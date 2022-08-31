import { DataGrid as MatDataGrid, GridToolbar } from "@material-ui/data-grid";
import useStyles from "./style";

const DataGrid = ({
  rows,
  columns,
  autoHeight = true,
  checkboxSelection = false,
  disableColumnFilter = true,
  disableColumnMenu = true,
  hideFooterPagination = false,
  loading = false,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classes.dataGridWrapper}>
      <MatDataGrid
        rows={rows}
        columns={columns}
        autoHeight={autoHeight}
        checkboxSelection={checkboxSelection}
        disableColumnFilter={disableColumnFilter}
        disableColumnMenu={disableColumnMenu}
        loading={loading}
        pagination
        hideFooterPagination={hideFooterPagination}
        components={{
          NoRowsOverlay: () => (
            <div className={classes.noRows}> No Data Available </div>
          ),
          ColumnResizeIcon: () => null,
          Toolbar: GridToolbar,
        }}    
        {...rest}
      />
    </div>
  );
};

export default DataGrid;
