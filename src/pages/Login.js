import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useForm } from "react-hook-form";

import { makeStyles } from "@mui/styles";
import { shadows } from "@mui/system";
import { borders } from "@mui/system";

export default function SignIn() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =  data  => reset();

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
    validate: (value) => {
      return (
        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
          pattern.test(value)
        ) || "Password must include lower, upper, number, and special chars"
      );
    },
  });

  return (
    <>
      <CssBaseline />
      <Box>
        <Paper
          sx={{
            p: 3,
            boxShadow: shadows[1],
            borders: borders.borderColor,
            maxWidth: '768px',
            margin: '65px auto',
            display: "flex",
            justifyContent: "center",
            height: '90vh',
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              noValidate
              sx={{ mt: 1 }}
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
                sx={{ borderColor: "text.primary" }}
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
                sx={{
                  color: "text.primary",
                  borderColor: "grey.500",
                  borderRadius: "shape.borderRadius",
                }}
                // ref={}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mt: 4,
                }}
              >
                <Button type="submit" variant="contained" size="large">
                  LOGIN
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
