import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Form from "@mui/material/FormLabel";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
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
  // const showData = (data) => console.log (data)

  // useEffect(() => {
  //   const movie_trending_API = async () => {
  //     try {
  //       const apiResponse = await axios.get(
  //         `http://localhost:5000/account`
  //       );
  //       console.log({apiResponse});
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   };
  //   movie_trending_API();
  // }, []);

  return (
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
  );
}

export default LoginPage;
