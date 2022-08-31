import { GridColDef, GridRowsProp } from "@material-ui/data-grid";
import DataGrid from "components/DataGrid";
import useStyles from "./style";

type PGOListProps = {
  data: GridRowsProp;
  isLoading: boolean;
};

const PGOList = ({ data, isLoading, ...rest }: PGOListProps) => {
  const classes = useStyles();

  const columns: GridColDef[] = [
    {
      field: "pgo_name",
      headerName: "PGO Name",
      sortable: false,
      flex: 1,
    },
    {
      field: "pgo_code_set_name",
      headerName: "PGO Code Set Name",
      sortable: false,
      flex: 1,
    },
    {
      field: "pgo_offer_type",
      headerName: "PGO Offer Type",
      flex: 1,
      sortable: false,
    },
    {
      field: "pgo_offer_value",
      headerName: "PGO Offer Value",
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

export default PGOList;
