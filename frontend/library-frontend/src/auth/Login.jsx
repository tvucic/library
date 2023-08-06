import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@mui/material";

const LoginPage = () => {
  const [token, setToken] = useState("");

  const username = "";
  const password = "";
  const client_id = "library_app";
  const grant_type = "password";
  const client_secret = "";

  const handleLogin = () => {
    console.log("logged");
    setToken("token");

    const fetchBook = async () => {
      //       0            1       2
      const baseUrl = `http://localhost:9080/auth/realms/library/protocol/openid-connect/token`;

      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=password&client_id=${client_id}&username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(
          password
        )}&client_secret=${client_secret}`,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseJson = await response.json();

      console.log(responseJson);

      // const loadedBook = {
      //   id: responseJson.id,
      //   title: responseJson.title,
      //   author: responseJson.author,
      //   description: responseJson.description,
      //   copies: responseJson.copies,
      //   copiesAvailable: responseJson.copiesAvailable,
      //   category: responseJson.category,
      //   img: responseJson.img,
      // };
      // setBook(loadedBook);
      // setIsLoading(false);
    };

    fetchBook().catch((error) => {
      //     setIsLoading(false);
      //     setHttpError(error.message);
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <Grid
        container
        spacing={3}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <TextField label="Username"></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type={"password"}></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={handleLogin}>
            {" "}
            Login{" "}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;
