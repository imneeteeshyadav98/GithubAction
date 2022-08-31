import Resource from "components/Resource";
import AreasList from "pages/areas/List/index";
import Login from "pages/auth/Login";
import CreateBrand from "pages/brand/Create";
import EditBrand from "pages/brand/Edit";
import BrandList from "pages/brand/List";
import ViewBrand from "pages/brand/View";
import CreateCompanies from "pages/companies/Create";
import EditCompanies from "pages/companies/Edit";
import CompaniesList from "pages/companies/List";
import ViewCompanies from "pages/companies/View";
import CouponCodeList from "pages/couponCodes/List";
import GameList from "pages/game/List/index";
import PGOList from "pages/pgo/List";
import PmDealsList from "pages/pmDeals/List";
import { Redirect, Switch } from "react-router-dom";
import AppRoute from "./AppRoute";

const AppRouter = () => {
  return (
    <Switch>
      <AppRoute path="/" component={Login} exact layoutVariant="auth" />
      <AppRoute
        path="/games"
        privateRoute
        component={() => <Resource name="games" list={GameList} exportData />}
        layoutVariant="dashboard"
      />
      <AppRoute
        path="/company"
        privateRoute
        component={() => (
          <Resource
            name="company"
            list={CompaniesList}
            create={CreateCompanies}
            edit={EditCompanies}
            view={ViewCompanies}
            deleteAction
          />
        )}
        layoutVariant="dashboard"
      />
      <AppRoute
        path="/brand"
        privateRoute
        component={() => (
          <Resource
            name="brand"
            list={BrandList}
            create={CreateBrand}
            edit={EditBrand}
            view={ViewBrand}
            deleteAction
          />
        )}
        layoutVariant="dashboard"
      />
      <AppRoute
        path="/pm-deals"
        privateRoute
        component={() => (
          <Resource name="pm-deals" list={PmDealsList} uploadData />
        )}
        layoutVariant="dashboard"
      />
      <AppRoute
        path="/pgo"
        privateRoute
        component={() => <Resource name="pgo" list={PGOList} uploadData />}
        layoutVariant="dashboard"
      />
      <AppRoute
        path="/areas"
        privateRoute
        component={() => <Resource name="areas" list={AreasList} exportData />}
        layoutVariant="dashboard"
      />
      <AppRoute
        path="/coupon-codes"
        privateRoute
        component={() => (
          <Resource name="coupon-codes" list={CouponCodeList} uploadData />
        )}
        layoutVariant="dashboard"
      />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default AppRouter;
