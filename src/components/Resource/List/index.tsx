import { Backdrop, Fade, MenuItem, Modal, Select } from "@material-ui/core";
import { GridCellParams, GridRowId } from "@material-ui/data-grid";
import { AxiosError } from "axios";
import ConfirmationModal from "components/ConfirmationModal";
import CSVUpload from "components/CSV_Upload";
import { Button } from "components/FormComponents";
import EntityHeader from "components/header/EntityHeader";
import fetcher from "dataProvider";
import { ComponentType, ReactNode, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router";
import { bulkDownload } from "utils/helper";
import useStyles from "./style";

type ListProps = {
  name: string;
  component: ComponentType<any>;
  createBtn?: ReactNode;
  viewAction: boolean;
  editAction: boolean;
  deleteAction: boolean;
  exportBtn?: boolean;
  uploadBtn?: boolean;
};

const List = ({
  name,
  component: ListComp,
  createBtn,
  exportBtn,
  viewAction,
  editAction,
  deleteAction,
  uploadBtn,
}: ListProps) => {
  const [gridData, setGridData] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState<GridRowId>();

  const [uploadModal, setUploadModal] = useState(false);

  const [isExport, setIsExport] = useState(false);

  const [pageSize, setPageSize] = useState(5);
  const [offset, setOffset] = useState(0);

  const classes = useStyles();

  const history = useHistory();

  const { data, isLoading, refetch } = useQuery([name, pageSize, offset], () =>
    fetcher.get(`/api/v1/${name}?limit=${pageSize}&offset=${offset}`)
  );

  const { data: exportData } = useQuery(
    [name, isExport],
    () => fetcher.get(`/api/v1/${name}/export`),
    {
      onSuccess: (resData) => {
        bulkDownload(resData.data);
        setIsExport(false);
      },
      onError: (err: AxiosError) => console.log(err),
      enabled: isExport,
    }
  );

  const deleteCompanyById = useMutation(
    name,
    (id: GridRowId) => fetcher.delete(`/api/v1/${name}/${id}`),
    {
      onSuccess: () => refetch(),
      onError: (err: AxiosError) => console.log(err),
    }
  );

  useEffect(() => {
    if (!isLoading && !!data) {
      setGridData((prevData) => [...prevData, ...data?.data?.data]);
    }
  }, [data, isLoading]);

  const handleOpenDeleteModal = () => setOpenModal(!openModal);

  const onRouteChange = (id: GridRowId) => history.push(`/${name}/${id}/view`);

  const renderDropDown = (params: GridCellParams) => {
    const selectClickHandler = (event) => {
      event.stopPropagation();

      if (event.target.value === "Edit")
        history.push(`/${name}/${params.id}/edit?`);

      if (event.target.value === "Delete") {
        setDeleteId(params.id);
        handleOpenDeleteModal();
      }
      if (event.target.value === "View") {
        history.push(`/${name}/${params.id}/view`);
      }
    };

    return (
      <div onClick={selectClickHandler} className={classes.selectWrapper}>
        <Select value="" variant="outlined" displayEmpty>
          <MenuItem value="" className={classes.actionDropdown}>
            Actions
          </MenuItem>
          {viewAction && (
            <MenuItem value="View" className={classes.actionDropdown}>
              View
            </MenuItem>
          )}
          {editAction && (
            <MenuItem value="Edit" className={classes.actionDropdown}>
              Edit
            </MenuItem>
          )}
          {deleteAction && (
            <MenuItem value="Delete" className={classes.actionDropdown}>
              Delete
            </MenuItem>
          )}
        </Select>
      </div>
    );
  };

  return (
    <div className={classes.gridWrapper}>
      <EntityHeader>
        {createBtn}
        {uploadBtn && (
          <Button
            label="Upload .CSV"
            className={classes.entityButton}
            onClick={() => setUploadModal(true)}
          />
        )}
        {exportBtn && (
          <Button
            label="Export .CSV"
            className={classes.entityButton}
            onClick={() => setIsExport(true)}
          />
        )}
      </EntityHeader>
      <ListComp
        data={gridData}
        onRouteChange={onRouteChange}
        actionBtn={renderDropDown}
        isLoading={isLoading}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        onPageChange={(newPage) => setOffset(newPage + pageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        rowCount={data?.data?.count}
      />
      <Modal
        className={classes.modal}
        open={openModal}
        onClose={handleOpenDeleteModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <ConfirmationModal
            handleOpenModal={handleOpenDeleteModal}
            confirm={() => {
              deleteCompanyById.mutate(deleteId);
              handleOpenDeleteModal();
            }}
            heading={`Are you sure you want to delete this ${name}?`}
          />
        </Fade>
      </Modal>
      <Modal
        className={classes.modal}
        open={uploadModal}
        onClose={() => setUploadModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={uploadModal}>
          <CSVUpload
            name={name}
            handleOpenPipelineModal={() => setUploadModal(false)}
          />
        </Fade>
      </Modal>
    </div>
  );
};

export default List;
