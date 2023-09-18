import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <h2 className="fixed right-24 top-14 cursor-pointer font-semibold text-gray-800 dark:text-orange-300" onClick={() => loginWithRedirect()}>
        Iniciar sesión
      </h2>
    )
  );
}

export default LoginButton;