import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Link from "@mui/joy/Link";
import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

function LoginPage() {
  let location = useLocation();
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const auth = useContext(AuthContext);
  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    console.log(data);
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
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
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don't have an account?
        </Typography>
      </Box>
    </form>
  );
}

export default LoginPage;
