import React from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/signin");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light bg-opacity-50 shadow fixed-top backdrop-blur">
        <div class="container-fluid">
          <div class="d-flex">
            <button
              onClick={handleSignInClick}
              class="btn btn-primary"
            >
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
