import { TextField } from "@mui/material";
interface SearchBarProps {
  onInputChange: (value: string) => void;
}

export const SearchBar = ({ onInputChange }: SearchBarProps) => {
  return (
    <div>
      <TextField
        label={"search"}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        fullWidth
        size={"small"}
      ></TextField>
    </div>
  );
};
