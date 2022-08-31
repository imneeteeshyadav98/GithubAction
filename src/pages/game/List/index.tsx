import { GridColDef, GridRowsProp } from "@material-ui/data-grid";
import DataGrid from "components/DataGrid";

type GameListProps = {
  data: GridRowsProp;
  isLoading: boolean;
};

const GameList = ({ data, isLoading, ...rest }: GameListProps) => {
  const columns: GridColDef[] = [
    {
      field: "home_team",
      headerName: "Home Team",
      flex: 1,
      sortable: true,
    },
    {
      field: "away_team",
      headerName: "Away Team",
      flex: 1,
      sortable: false,
    },
    {
      field: "start_date",
      headerName: "Start Date",
      flex: 1,
      sortable: false,
    },
    {
      field: "start_time",
      headerName: "Start Time",
      flex: 1,
      sortable: false,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      sortable: false,
    },
  ];

  return (
    <div>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        checkboxSelection={false}
        hideFooterPagination={false}
        disableColumnFilter={false}
        disableColumnMenu={false}
        loading={isLoading}
        componentsProps={{
          toolbar: { showQuickFilter: true },
        }}
        {...rest}
      />
    </div>
  );
};

export default GameList;
