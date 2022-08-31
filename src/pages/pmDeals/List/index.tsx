import { GridColDef, GridRowsProp } from "@material-ui/data-grid";
import DataGrid from "components/DataGrid";
import useStyles from "./style";

type PmDealsListProps = {
  data: GridRowsProp;
  isLoading: boolean;
};

const PmDealsList = ({ data, isLoading, ...rest }: PmDealsListProps) => {
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: "area_id",
      headerName: "Area ID",
      sortable: false,
      flex: 1,
    },
    {
      field: "province",
      headerName: "Province",
      sortable: false,
      flex: 1,
    },
    {
      field: "district",
      headerName: "District",
      flex: 1,
      sortable: false,
    },
    {
      field: "postal_code",
      headerName: "Postal Code",
      sortable: false,
      flex: 1,
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

export default PmDealsList;
