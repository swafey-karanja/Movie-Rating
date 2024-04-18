import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./SearchBar.css";

const SearchBar: FunctionComponent = () => {
  return (
    <TextField
      className="search-bar"
      placeholder="Search"
      variant="outlined"
      InputProps={{
        endAdornment: <img width="55px" height="53px" src="/search-alt.svg" />,
      }}
      sx={{
        "& fieldset": { border: "none" },
        "& .MuiInputBase-root": {
          height: "91px",
          backgroundColor: "rgba(0, 44, 60, 0.9)",
          paddingRight: "27px",
          borderRadius: "0px 0px 0px 0px",
          fontSize: "30px",
        },
        "& .MuiInputBase-input": { color: "#fff" },
        width: "626px",
      }}
    />
  );
};

export default SearchBar;
