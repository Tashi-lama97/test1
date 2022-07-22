import React, { useState } from "react";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import { useHistory, useParams } from "react-router";
import {
  Box,
  TextField,
  Button,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { accessPinCache } from "../cache";

const Auth = () => {
  const history = useHistory();
  const { username } = useParams();
  const [accessPin, setAccessPin] = useState("");
  const [error, setError] = useState("");

  const authenticate = () => {
    setError("");
    const hashDigest = sha256(accessPin);
    const hmacDigest = Base64.stringify(
      hmacSHA512(hashDigest, process.env.REACT_APP_PRIVATE_KEY)
    );
    if (process.env.REACT_APP_AUTH_TOKEN === hmacDigest) {
      accessPinCache.set(accessPin);
      history.push(`/action/${username}`);
      return;
    } else {
      setError("Access Token is invalid");
      return;
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Box
        sx={{
          mx: "auto",
          pt: 20,
          width: "90vw",
          height: "90vh",
          borderRadius: 1,
          textAlign: "center",
        }}
      >
        <Stack spacing={2} direction="column">
          <TextField
            label="Access Token"
            color="secondary"
            value={accessPin}
            onChange={(e) => setAccessPin(e.target.value)}
          />
          <Button variant="contained" onClick={authenticate}>
            Authenticate
          </Button>
          {error ? (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              There is an error — <strong>{error}</strong>
            </Alert>
          ) : null}
        </Stack>
      </Box>
    </div>
  );
};

export default Auth;
