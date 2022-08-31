import { GridColDef, GridRowsProp } from "@material-ui/data-grid";
import DataGrid from "components/DataGrid";
import useStyles from "./style";

type CouponCodesList = {
  data: GridRowsProp;
  isLoading: boolean;
};

const CouponCodesList = ({ data, isLoading, ...rest }: CouponCodesList) => {
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: "coupon_code_id",
      headerName: "Coupon Code ID",
      sortable: false,
      flex: 1,
    },
    {
      field: "campaign_name",
      headerName: "Campaign Name",
      sortable: false,
      flex: 1,
    },
    {
      field: "code",
      headerName: "Code",
      flex: 1,
      sortable: false,
    },
    {
      field: "format",
      headerName: "Format",
      flex: 1,
      sortable: false,
    },
  ];

  return (
    <DataGrid
      rows={data}
      columns={columns}
      disableSelectionOnClick
      hideFooterPagination={false}
      disableColumnFilter={false}
      disableColumnMenu={false}
      loading={isLoading}
      componentsProps={{
        toolbar: { showQuickFilter: true },
      }}
      {...rest}
    />
  );
};

export default CouponCodesList;
