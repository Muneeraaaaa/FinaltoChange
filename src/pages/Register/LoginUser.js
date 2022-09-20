import React from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginUser = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const login = async () => {
    const request = await fetch(`/api/v1/auth/login`, {
      method: "POST",
      headers: {
        authorization: "Basic " + btoa(userName + ":" + password),
      },
    });
    const data = await request.json();

    if (request.status === 401) {
      toast({
        title: "Error",
        description: data.message,
        status: "error",
        duration: 2000,
        isClosable: false,
        position: "top",
      });
    } else {
      localStorage.setItem("loggedIn", true);
      navigate("/");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  }, []);

  return (
    <div class="container">
      <div class="screen">
        <div class="screencontent ">
          <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 d-flex justify-content-center">
            <form class="login m-5 p-5 bg-light shadow font-monospace">
              <div class="loginfield">
                <i class="loginicon fas fa-user"> </i>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  type="userName"
                  class="form-control"
                  placeholder="UserName"
                />
              </div>

              <div class="loginfield">
                <i class="loginicon fas fa-lock"></i>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <button onClick={login} class="button loginsubmit mt-3">
                <span class="buttontext">Login</span>
                <i class="buttonicon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>

          <div class="screenbackground">
            {/* <span class="screenbackgroundshape screenbackgroundshape4"></span>
            <span class="screenbackgroundshape screenbackgroundshape3"></span>         */}
            <span class="screenbackgroundshape screenbackgroundshape2"></span>
            <span class="screenbackgroundshape screenbackground__shape1"></span>
          </div>
        </div>

        <div class="toast" role="alert">
          <div class="toast-header">
            <strong class="mr-auto">Error</strong>
            <small class="text-muted">11 mins ago</small>
            <button type="button" class="ml-2 mb-1 close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">Username or password Wrong</div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
