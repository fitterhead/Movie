import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import AuthRequired from "../routes/AuthRequired";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginModalMain() {
  const auth = useContext(AuthRequired);
  const navigate = useNavigate();
  const location = useLocation();
  console.log({ auth });
  console.log("loginlocation", location);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let from = location.state?.from?.pathname || "/";

    auth.userLogin(data, () => {
      navigate(from, {
        state: { backgroundLocation: location.state?.backgroundLocation },
        replace: true,
      });
    });
  };

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        elevation={4}
        sx={{
          margin: "auto",
          marginTop: "30vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          maxWidth: "fit-content",
          padding: "3rem",
          borderRadius: "1rem",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register("email")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
