import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import Link from "@mui/joy/Link";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Form from "@mui/material/FormLabel";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  let location = useLocation();
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const auth = useContext(AuthContext);
  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    console.log(data);
    //fetch data từ api rồi so sánh
    try {
      const apiResponse = await axios.get(`http://localhost:5000/account`);
      console.log({ apiResponse });
      data.username === apiResponse.data.username &&
      data.password === apiResponse.data.password
        ? auth.login(data.username, () => {
            navigate(from, { replace: true });
          })
        : console.log("fail");
    } catch (error) {
      console.log(error);
    }

    //nếu giống nhau thì chạy login
    //nếu khác nhau thì console.log fail
  };
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Sheet
          sx={{
            maxWidth: 400,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue</Typography>
            <input
              name="email"
              type="username"
              placeholder="username"
              label="username"
              {...register("username")}
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="password"
              label="Email"
              {...register("password")}
            />
          </div>
          <input type="submit" />
          {/* <Button 
        type= "submit"
          // onClick = {() => console.log(showData)}
          sx={{
            mt: 1, // margin top
          }}
        >
          Log in
        </Button> */}
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            Don't have an account?
          </Typography>
        </Sheet>
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
