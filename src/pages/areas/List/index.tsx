import { GridColDef, GridRowsProp } from "@material-ui/data-grid";
import DataGrid from "components/DataGrid";
import useStyles from "./style";

type AreasListProps = {
  data: GridRowsProp;
  isLoading: boolean;
};

const AreasList = ({ data, isLoading, ...rest }: AreasListProps) => {
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: "id",
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
      field: "city",
      headerName: "City",
      flex: 1,
      sortable: false,
    },
    {
      field: "code",
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

export default AreasList;
