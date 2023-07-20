import * as React from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, TextField, Toolbar, Typography } from "@mui/material";
import {
  createProductDataApi,
  deleteManyProductDataApi,
} from "../../utils/api/product";
import { BaseButton } from "../atoms/BaseButton";
import BaseModal from "../atoms/BaseModal";
import { BaseIconButton } from "../atoms/BaseIconButton";
import { ClearOutlined, WarningAmberOutlined } from "@mui/icons-material";
import { IProductCreateDataPrisma } from "../../prisma/product";

interface EnhancedTableToolbarProps {
  numSelected: number;
  openModal: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  ids: number[];
  productName: string;
  productPrice: string;
  setProductName: React.Dispatch<React.SetStateAction<string>>;
  setProductPrice: React.Dispatch<React.SetStateAction<string>>;
  requiredProductName: boolean;
  setRequireProductName: React.Dispatch<React.SetStateAction<boolean>>;
  requiredProductPrice: boolean;
  setRequireProductPrice: React.Dispatch<React.SetStateAction<boolean>>;
}
export function EnhancedTableToolbar({
  numSelected,
  openModal,
  handleOpenModal,
  handleCloseModal,
  ids,
  productName,
  productPrice,
  setProductName,
  setProductPrice,
  requiredProductName,
  setRequireProductName,
  requiredProductPrice,
  setRequireProductPrice,
}: EnhancedTableToolbarProps) {
  //State


  //using mutation
  const queryClient = useQueryClient();
  const { mutate: createProduct } = useMutation(createProductDataApi);
  const { mutate: deleteManyProduct } = useMutation(deleteManyProductDataApi);

  //function
  const handleSubmit = async (params: IProductCreateDataPrisma) => {
    if (params.name === "") {
      setRequireProductName(true);
      return;
    } else if (params.price === "") {
      setRequireProductPrice(true);
      return;
    }
    try {
      await createProduct(params, {
        onSuccess: () => {
          queryClient.invalidateQueries(["productData"]);
          handleCloseModal();
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  //need import the number id select from the tableMultiSelect
  const handleDeleteSubmit = async (id: number[]) => {
    try {
      await deleteManyProduct(id, {
        onSuccess: () => {
          queryClient.invalidateQueries(["productData"]);
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Toolbar
      style={{
        padding: "20px 40px ",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box sx={{ width: 100, marginLeft: "40px" }}>
        <Typography color="inherit" variant="subtitle1" component="div">
          <span>{numSelected}</span> <span>selected</span>
        </Typography>
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "row-reverse" }}>
        {numSelected === 0 ? (
          <BaseButton disabledStyle disabled>
            <span>MULTIPLE DELETE </span>
          </BaseButton>
        ) : (
          <BaseButton
            onClick={() => {
              handleDeleteSubmit(ids); //pass the array id: number []
            }}
            primaryStyle
          >
            <span>MULTIPLE DELETE </span>
          </BaseButton>
        )}
        <BaseButton onClick={handleOpenModal} primaryStyle>
          <span>CREATE PRODUCT</span>
        </BaseButton>
      </Box>
      <BaseModal open={openModal} handleCloseModal={handleCloseModal}>
        <BaseIconButton
          onClick={handleCloseModal}
          style={{ position: "absolute", right: 0, top: 0, margin: 10 }}
        >
          <ClearOutlined sx={{ fontSize: 20 }} />
        </BaseIconButton>
        <h3>Create New Invoice</h3>
        <TextField
          name="name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Name"
          variant="outlined"
          sx={{ width: "90%", mb: "10px" }}
        />
        {requiredProductName && (
          <Box style={{ padding: "15px 5px", width: "90%" }}>
            <span
              style={{
                color: "#ff5555",
                display: "flex",
                alignItems: "center",
              }}
            >
              <WarningAmberOutlined sx={{ fontSize: 18 }} /> This is required
              field
            </span>
          </Box>
        )}
        <TextField
          name="price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Price"
          variant="outlined"
          sx={{ width: "90%", m: "10px 0 20px 0" }}
        />
        {requiredProductPrice && (
          <Box style={{ padding: "15px 5px", width: "90%" }}>
            <span
              style={{
                color: "#ff5555",
                display: "flex",
                alignItems: "center",
              }}
            >
              <WarningAmberOutlined sx={{ fontSize: 18 }} /> This is required
              field
            </span>
          </Box>
        )}
        <BaseButton
          primaryStyle
          onClick={() => {
            handleSubmit({ name: productName, price: productPrice });
          }}
        >
          Create
        </BaseButton>
      </BaseModal>
    </Toolbar>
  );
}
