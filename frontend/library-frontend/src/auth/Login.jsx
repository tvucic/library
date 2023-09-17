import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";

import { Grid, TextField, Button } from "@mui/material";

const Login = (e) => {
  // const [token, setToken] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { keycloak } = useKeycloak();

  // const client_id = "library_app";
  // const grant_type = "password";
  // const client_secret = "5WV50lrr74XTM0vnsiCb2opEVh77RvCe";

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    console.log("logged");

    console.log(username);

    console.log(password);

    try {
      await keycloak.login({
        username,
        password,
      });
    } catch (error) {
      console.error("Failed to log in", error);
    }

    // const fetchBook = async () => {
    //   //       0            1       2
    //   const baseUrl = `http://localhost:9080/auth/realms/library/protocol/openid-connect/token`;

    //   const response = await fetch(baseUrl, {
    //     method: "POST",
    //     headers: {
    //       Accept: "*/*",
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //     body: `grant_type=password&client_id=${client_id}&username=${encodeURIComponent(
    //       username
    //     )}&password=${encodeURIComponent(
    //       password
    //     )}&client_secret=${client_secret}`,
    //   });
    //   if (!response.ok) {
    //     throw new Error("Something went wrong!");
    //   }

    //   const responseJson = await response.json();

    //   console.log(responseJson);

    //   // const loadedBook = {
    //   //   id: responseJson.id,
    //   //   title: responseJson.title,
    //   //   author: responseJson.author,
    //   //   description: responseJson.description,
    //   //   copies: responseJson.copies,
    //   //   copiesAvailable: responseJson.copiesAvailable,
    //   //   category: responseJson.category,
    //   //   img: responseJson.img,
    //   // };
    //   // setBook(loadedBook);
    //   // setIsLoading(false);
    // };

    // fetchBook().catch((error) => {
    //     setIsLoading(false);
    //     setHttpError(error.message);
    // });
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
          <TextField label="Username" onChange={handleUsername}></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            onChange={handlePassword}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={(e) => handleLogin(e)}>
            {" "}
            Login{" "}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
