import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartIconProps {
  cartCount: number;
}

export const CartIcon = ({ cartCount }: CartIconProps) => {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={cartCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};
