import { FunctionComponent } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import "./FrameComponent1.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <form className="log-in-form-parent">
      <div className="log-in-form6" />
      <div className="sign-up-button">
        <div className="sign-upsign-in-bar" />
        <Button
          className="sign-in-button"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "30",
            background: "rgba(0, 123, 143, 0.8)",
            borderRadius: "10px 50px 50px 10px",
            "&:hover": { background: "rgba(0, 123, 143, 0.8)" },
            width: 264,
            height: 71,
          }}
        >
          Sign Up
        </Button>
        <div className="sign-in">Sign In</div>
      </div>
      <Button
        className="frame-inner"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "25",
          background: "rgba(0, 123, 143, 0.8)",
          borderRadius: "10px",
          "&:hover": { background: "rgba(0, 123, 143, 0.8)" },
          width: 258,
          height: 71,
        }}
      >
        Register
      </Button>
      <div className="first-name-input-parent">
        <div className="first-name-input" />
        <div className="first-name">First Name</div>
      </div>
      <div className="last-name-input-parent">
        <div className="last-name-input" />
        <div className="last-name">Last Name</div>
      </div>
      <TextField
        className="frame-textfield"
        placeholder="E-mail"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "75px",
            backgroundColor: "rgba(0, 44, 60, 0.9)",
            borderRadius: "10px",
            fontSize: "25px",
          },
          "& .MuiInputBase-input": { color: "#fff" },
          width: "509px",
        }}
      />
      <TextField
        className="frame-child1"
        placeholder="Something"
        variant="outlined"
        sx={{
          "& fieldset": { border: "none" },
          "& .MuiInputBase-root": {
            height: "75px",
            backgroundColor: "rgba(0, 44, 60, 0.9)",
            borderRadius: "10px",
            fontSize: "25px",
          },
          "& .MuiInputBase-input": { color: "#fff" },
          width: "509px",
        }}
      />
    </form>
  );
};

export default FrameComponent1;
