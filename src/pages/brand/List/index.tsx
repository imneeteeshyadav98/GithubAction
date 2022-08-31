import {
  GridCellParams,
  GridColDef,
  GridRowsProp,
} from "@material-ui/data-grid";
import DataGrid from "components/DataGrid";
import { ReactNode } from "react";

type BrandListProps = {
  data: GridRowsProp;
  isLoading: boolean;
  actionBtn: (params: GridCellParams) => ReactNode;
};

const BrandList = ({ data, isLoading, actionBtn, ...rest }: BrandListProps) => {
  const columns: GridColDef[] = [
    {
      field: "business_id",
      headerName: "Business ID",
      sortable: false,
      flex: 1,
    },
    {
      field: "name",
      headerName: "Brand Name",
      sortable: true,
      flex: 1,
    },
    {
      field: "short_description",
      headerName: "Short_Description",
      flex: 1,
      sortable: false,
    },
    {
      field: "logo",
      headerName: "Logo",
      sortable: false,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      flex: 1,
    },
    // {
    //   field: "website_link",
    //   headerName: "Website Link",
    //   sortable: false,
    //   flex: 1,
    // },
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

export default BrandList;
