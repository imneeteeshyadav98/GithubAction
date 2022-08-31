import { Backdrop, Fade, Modal } from "@material-ui/core";
import ConfirmationModal from "components/ConfirmationModal";
import useLocalStorage from "hooks/useLocalStorage";
import useParam from "hooks/useParam";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { logoutUser } from "redux/actions";
import NavDrawer from "../NavDrawer";
import NAV_ROUTES from "./navRoutes";
import useStyles from "./style";

const DRAWER_WIDTH = 228;
const SUB_DRAWER_WIDTH = 200;

const SideNav = (props) => {
  const classes = useStyles();

  const [openModel, setModelOpen] = useState<boolean>(false);

  const params = useParam();
  const dispatch = useDispatch();

  const id = props.computedMatch.params.id;

  const { pathname } = useLocation();

  const history = useHistory();

  const handleLogoutModal = () => {
    setModelOpen(false);
    history.goBack();
  };

  useEffect(() => {
    if (params.get("logout") === "true") setModelOpen(true);
  }, [params]);

  const [entity, , feature] = useMemo(
    () => pathname.split("/").filter((item) => item),
    [pathname]
  );

  const entityIdx = useMemo(() => {
    const idx = NAV_ROUTES.findIndex((item) => item.name === entity);
    return idx === -1 ? 0 : idx;
  }, [entity]);

  const featureIdx = useMemo(() => {
    const idx = NAV_ROUTES[entityIdx]?.children.findIndex(
      (item) => item.name === feature
    );
    return idx === -1 ? 0 : idx;
  }, [entityIdx, feature]);

  const [sideNavConfig, setSideNavConfig] = useLocalStorage("sideNavConfig", {
    isMiniSideNav: false,
    selectedSideNavIdx: entityIdx,
  });

  const [subSideNavConfig, setSubSideNavConfig] = useLocalStorage(
    "subSideNavConfig",
    {
      isMiniSubSideNav: false,
      selectedSubSideNavIdx: featureIdx,
      isSubSideNavVisible: false,
    }
  );

  const subNavRoutes = useMemo(() => {
    return NAV_ROUTES[sideNavConfig.selectedSideNavIdx]?.children.map(
      (item) => ({
        ...item,
        path: item.path.replace(":id", id),
      })
    );
  }, [sideNavConfig.selectedSideNavIdx, id]);

  useEffect(() => {
    if (id && !subSideNavConfig.isSubSideNavVisible && feature) {
      setSubSideNavConfig((state) => ({
        ...state,
        selectedSubSideNavIdx: featureIdx,
        isSubSideNavVisible: true,
      }));
    } else if (!id) {
      setSubSideNavConfig((state) => ({
        ...state,
        isSubSideNavVisible: false,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, feature, featureIdx]);

  const toggleSideNav = () => {
    setSideNavConfig((state) => ({
      ...state,
      isMiniSideNav: !state.isMiniSideNav,
    }));
  };

  const toggleSubSideNav = () => {
    setSubSideNavConfig((state) => ({
      ...state,
      isMiniSubSideNav: !state.isMiniSubSideNav,
    }));
  };

  const selectedItemSideNavHandler = (idx) => {
    subSideNavConfig.isSubSideNavVisible &&
      setSubSideNavConfig((state) => ({
        ...state,
        isSubSideNavVisible: false,
      }));

    setSideNavConfig((state) => ({ ...state, selectedSideNavIdx: idx }));
  };

  const selectedItemSubSideNavHandler = (idx) => {
    setSubSideNavConfig((state) => ({ ...state, selectedSubSideNavIdx: idx }));
  };

  return (
    <>
      <NavDrawer
        drawerWidth={DRAWER_WIDTH}
        open={!sideNavConfig.isMiniSideNav}
        items={NAV_ROUTES}
        toggleDrawer={toggleSideNav}
        selectedItemIdx={sideNavConfig.selectedSideNavIdx}
        onSelectedItemClick={selectedItemSideNavHandler}
        isToolBar
      />

      {subSideNavConfig.isSubSideNavVisible && !!subNavRoutes.length && (
        <NavDrawer
          drawerWidth={SUB_DRAWER_WIDTH}
          open={!subSideNavConfig.isMiniSubSideNav}
          items={subNavRoutes}
          toggleDrawer={toggleSubSideNav}
          selectedItemIdx={subSideNavConfig.selectedSubSideNavIdx}
          onSelectedItemClick={selectedItemSubSideNavHandler}
          customPaperClass={{
            [classes.sideNavParent]: true,
          }}
          occupyToolbarSpace
        />
      )}
      <Modal
        className={classes.modal}
        open={openModel}
        onClose={handleLogoutModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModel}>
          <ConfirmationModal
            handleOpenModal={handleLogoutModal}
            confirm={() => {
              dispatch(logoutUser());
            }}
            heading={"Are you sure you want to Log Out?"}
          />
        </Fade>
      </Modal>
    </>
  );
};

export default SideNav;
