import React from "react";

export const Navebar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container px-4 px-lg-5">
          <a href="#" class="navbar-brand">
            <img
              src="assets/assets/lastlogo.ico"
              width="45"
              alt=""
              class="d-inline-block align-middle mr-2"
            />
            <span class="text-uppercase font-weight-bold">Quick Check</span>
          </a>
          {/* <img class="img-fluid" src="assets/lastlogo.ico"  href="#page-top" alt="..." />
         <a class="navbar-brand" href="#page-top">Quick Check</a>  */}
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link" href="Cards">
                  phone number
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">
                  URL
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Email">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navebar;
