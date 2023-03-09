import { Grid, Typography, Box, Stack, Button } from "@mui/material";
import { useContext } from "react";
import { ProductActionButton } from "../Products/ProductActionButton";
import { ProductsContext } from "../ProductsContext";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const currencyFormat = new Intl.NumberFormat(navigator.language, {
  style: "currency",
  currency: "EUR",
});

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 150,
    editable: true,
  },

  {
    field: "action",
    headerName: "Action",
    width: 180,
    sortable: false,

    renderCell: (params) => {
      const onClick = (e: any) => {
        const currentRow = params.row;
        return alert(JSON.stringify(currentRow, null, 4));
      };

      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={onClick}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={onClick}
          >
            Delete
          </Button>
        </Stack>
      );
    },
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

export const Cart = () => {
  const { cartProducts } = useContext(ProductsContext);
  const currencyFormat = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "EUR",
  });

  const totalPrice = cartProducts.reduce(
    (curPrice, cartProduct) =>
      (curPrice + (cartProduct.price || 0)) * cartProduct.amount,
    0
  );

  // ToDo: material ui list (DataGrid)

  return (
    <Box sx={{ height: 400, width: "80%", mx: "auto" }}>
      <DataGrid
        rows={cartProducts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[1, 5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />

      <Box display="flex" justifyContent="center" alignItems="center" mt="20px">
        <Typography variant="h4">Total price:&nbsp;</Typography>
        <Typography variant="h4">
          {currencyFormat.format(totalPrice)}
        </Typography>
      </Box>
    </Box>
  );
};
