import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  DialogActions,
} from "@mui/material";
import { productsType } from "@/constants/product";
import { CartTable } from "../../molecules/DataTable";

interface ItemsModelBoxProps {
  cartItems: productsType[];
}

export const ItemsModelBox = ({ cartItems }: ItemsModelBoxProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const itemCounts = cartItems.reduce((counts, item) => {
    counts[item.id] = (counts[item.id] || 0) + 1;
    return counts;
  }, {} as { [key: number]: number });
  const uniqueItems: productsType[] = Array.from(
    new Set(cartItems.map((item) => item.id))
  )
    .map((id) => cartItems.find((item) => item.id === id))
    .filter((item): item is productsType => item !== undefined);

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        BuyNow
      </Button>
      <Dialog open={open}>
        <DialogTitle>{"Your Cart"}</DialogTitle>
        <DialogContent>
          <CartTable cartItems={uniqueItems} itemCounts={itemCounts} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Pay</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
