import {
  GridCellParams,
  GridColDef,
  GridRowId,
  GridRowsProp,
} from "@material-ui/data-grid";
import DataGrid from "components/DataGrid";
import { ReactNode } from "react";
import useStyles from "./style";

type CompaniesListProps = {
  data: GridRowsProp;
  onRouteChange: (id: GridRowId) => void;
  actionBtn: (params: GridCellParams) => ReactNode;
  isLoading: boolean;
};

const CompaniesList = ({
  data,
  onRouteChange,
  actionBtn,
  isLoading,
  ...rest
}: CompaniesListProps) => {
  const classes = useStyles();

  const renderId = (params: GridCellParams) => (
    <div className={classes.nameCell} onClick={() => onRouteChange(params.id)}>
      {params.row.id}
    </div>
  );

  const companiesColumn: GridColDef[] = [
    {
      field: "id",
      headerName: "Business ID",
      sortable: false,
      flex: 1,
      renderCell: renderId,
    },
    {
      field: "name",
      headerName: "Company Name",
      sortable: false,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email ID",
      flex: 1,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      sortable: false,
    },
    {
      field: "dropDown",
      sortable: false,
      flex: 1,
      renderHeader: () => {
        return <></>;
      },
      renderCell: actionBtn,
    },
  ];

  return (
    <>
      <DataGrid
        rows={data}
        columns={companiesColumn}
        disableSelectionOnClick
        hideFooterPagination={false}
        disableColumnFilter={false}
        loading={isLoading}
        componentsProps={{
          toolbar: { showQuickFilter: true },
        }}
        {...rest}
      />
    </>
  );
};

export default CompaniesList;
