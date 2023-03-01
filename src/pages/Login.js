import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useForm } from "react-hook-form";

import { makeStyles } from "@mui/styles";
import Theme from "../utility/theme";

export default function SignIn() {
  const classes = useStyles(Theme);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => reset();

  const { emailRef, ...emailRest } = register("email", {
    required: "Email Address is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Please enter a valid email",
    },
  });

  const { passRef, ...passRest } = register("password", {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be least 8 or more characters",
    },
  });

  return (
    <>
      <CssBaseline />
      <Paper className={classes.paper}>
        <img
          src={`https://avatars.githubusercontent.com/u/124091983`}
          srcSet={`https://avatars.githubusercontent.com/u/124091983 2x`}
          alt={"tamatemPlusLogo"}
          loading="lazy"
          width={128}
          height={128}
        />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ maxWidth: "328px" }}
        >
          <TextField
            inputRef={emailRef}
            {...emailRest}
            margin="normal"
            fullWidth
            label="Email"
            id="margin-none email"
            name="email"
            error={errors.email ? true : false}
            helperText={errors.email?.message}
            InputLabelProps={{
              style: { color: "#C3001E" },
            }}
          />
          <TextField
            inputRef={passRef}
            {...passRest}
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            id="margin-none password"
            type="password"
            error={errors.password ? true : false}
            helperText={errors.password?.message}
            InputLabelProps={{
              style: { color: "#C3001E" },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 1,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={classes.button}
            >
              login
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      height: "100vh",
    },
  },
  button: {
    boxShadow: theme.shadows[1],
    letterSpacing: "1.25px",
  },
  paper: {
    padding: "24px",
    boxShadow: theme.shadows[1],
    minWidth: "768px",
    margin: "65px auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down('tablet')]: {
      minWidth: "100%",
    },
  },
}));
