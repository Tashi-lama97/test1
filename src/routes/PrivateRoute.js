import React from "react";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";
import { Route, Redirect } from "react-router";
import { accessPinCache } from "../cache";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAutheticated = () => {
    const hashDigest = sha256(accessPinCache.get());
    const hmacDigest = Base64.stringify(
      hmacSHA512(hashDigest, process.env.REACT_APP_PRIVATE_KEY)
    );
    if (process.env.REACT_APP_AUTH_TOKEN === hmacDigest) return true;
    return false;
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        isAutheticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
