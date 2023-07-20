import { Box, List, ListItem } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { Delete, ExpandCircleDownOutlined } from "@mui/icons-material";

//atoms
import { BaseCheckbox } from "../atoms/BaseCheckbox";
import { BaseIconButton } from "../atoms/BaseIconButton";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import { EnhancedTableHead } from "./EnhancedTableHead";

//api
import {
  deleteProductDataApi,
  getProductDataApi,
} from "../../utils/api/product";

type ProductData = {
  id: number;
  name: string;
  price: string;
  created_at: string;
  updated_at: string;
};
export enum ProductSelectStatus {
  ALL = "all",
  PARTIAL = "partial",
  EMPTY = "empty",
}
export type ProductSelectState = {
  count: number;
  status: ProductSelectStatus;
  checkedItems: boolean[];
};

export const TableMultiSelect = () => {
  const [requiredProductName, setRequireProductName] = useState(false);
  const [requiredProductPrice, setRequireProductPrice] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [ids, setIds] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const [openList, setOpenList] = useState<number>();
  const [productSelect, setProductSelect] = useState<ProductSelectState>({
    count: 0,
    status: ProductSelectStatus.EMPTY,
    checkedItems: [],
  });

  console.log("check", productSelect.checkedItems);
  const queryClient = useQueryClient();
  const { mutate: deleteSinglleProduct } = useMutation(deleteProductDataApi);

  const { data, isLoading, error } = useQuery(["productData"], async () =>
    getProductDataApi({ page: 1, limit: 100, keyword: "" })
  );

  //Function handle delete single product
  const handleDeleteSubmit = async (id: number) => {
    console.log("id", id);
    try {
      await deleteSinglleProduct(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(["productData"]);
          handleCloseList();
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  //Menu
  const handleOpenList = (id: number) => {
    setOpenList(id === openList ? 0 : id);
  };
  const handleCloseList = () => {
    setOpenList(0);
  };

  //Panigation
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setProductName("");
    setProductPrice("");
    setRequireProductName(false);
    setRequireProductPrice(false);
  };

  //Selection
  const handleOnchangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCount = productSelect.count;
    let newStatus = productSelect.status;
    let newCheckedItems: boolean[] = productSelect.checkedItems;

    if (e.target.checked) {
      newCount = data.product.length;
      newStatus = ProductSelectStatus.ALL;
      newCheckedItems = data.product.map(() => true);
      const ids = data.product.map((item: ProductData) => item.id);
      setIds(ids);
    } else {
      newCount = 0;
      newStatus = ProductSelectStatus.EMPTY;
      newCheckedItems = productSelect.checkedItems.map(() => false);
    }

    setProductSelect({
      ...productSelect,
      status: newStatus,
      count: newCount,
      checkedItems: newCheckedItems,
    });
  };

  const handleOnchangeCheckBoxChild = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    index: number
  ) => {
    productSelect.checkedItems[index] = e.target.checked;
    let newStatus = ProductSelectStatus.PARTIAL;
    let newCount = productSelect.checkedItems.filter((item) => item).length;
    console.log("new count", newCount);

    const ids = data.product
      .filter((item: ProductData, i: number) => productSelect.checkedItems[i])
      .map((item: ProductData) => item.id);
    setIds(ids);

    if (newCount === 0) {
      newStatus = ProductSelectStatus.EMPTY;
    } else if (newCount === data.product.length) {
      newStatus = ProductSelectStatus.ALL;
    }
    setProductSelect({ ...productSelect, status: newStatus, count: newCount });
  };

  const visibleRows = useMemo(
    () =>
      data?.product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [data?.product, page, rowsPerPage]
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper sx={{ width: "100%", m: 5 }} elevation={1}>
        <EnhancedTableToolbar
          numSelected={productSelect.count}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          openModal={openModal}
          ids={ids}
          productName={productName}
          productPrice={productPrice}
          setProductName={setProductName}
          setProductPrice={setProductPrice}
          requiredProductName={requiredProductName}
          requiredProductPrice={requiredProductPrice}
          setRequireProductName={setRequireProductName}
          setRequireProductPrice={setRequireProductPrice}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <EnhancedTableHead
              productSelect={productSelect}
              handleOnchangeCheckBox={handleOnchangeCheckBox}
            />
            <TableBody>
              {visibleRows.map((item: ProductData, index: number) => {
                const isOpenList = openList === item.id;
                return (
                  <TableRow key={item.id}>
                    <TableCell align="center">
                      <BaseCheckbox
                        checked={
                          productSelect.checkedItems?.[index] ||
                          productSelect.status === ProductSelectStatus.ALL
                        }
                        onChange={(e) =>
                          handleOnchangeCheckBoxChild(e, item.id, index)
                        }
                      />
                    </TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.price} $</TableCell>
                    <TableCell align="center">
                      {item.created_at.substring(0, 10)}
                    </TableCell>
                    <TableCell align="center">
                      {item.updated_at.substring(0, 10)}
                    </TableCell>
                    <TableCell align="center" style={{ position: "relative" }}>
                      <BaseIconButton onClick={() => handleOpenList(item.id)}>
                        <ExpandCircleDownOutlined />
                      </BaseIconButton>
                      <Box
                        sx={{
                          position: "absolute",
                          top: "18px",
                          right: "4px",
                        }}
                      >
                        {isOpenList && (
                          <List
                            style={{
                              width: 110,
                              display: "flex",
                              alignItems: "center",
                              boxShadow:
                                "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
                              backgroundColor: "white",
                              cursor: "pointer",
                              padding: 0,
                            }}
                          >
                            <ListItem
                              onClick={() => {
                                handleDeleteSubmit(item.id);
                              }}
                            >
                              <Delete sx={{ marginRight: "5px" }} />
                              <span>Delete</span>
                            </ListItem>
                          </List>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ width: "100%", float: "left" }}
          rowsPerPageOptions={[5, 10, 25]}
          count={data.product.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
