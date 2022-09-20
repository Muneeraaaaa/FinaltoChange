import React from "react";
import Chose from "../pages/Chose";

export const Home = () => {
  return (
    <di>
      <header class="masthead">
        <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
            <div class="text-center">
              <h1 class="mx-auto my-0 text-uppercase">Be Safe !</h1>
              <h2 class="text-white-50 mx-auto mt-2 mb-5">
                Do you always recive anonymous phone calls ? Do You always
                recive Fraud Email or URLs ?{" "}
              </h2>
              <a class="btn btn-outline-secondary" href="#Cards">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      <Chose />
      {/* <!-- Contact--> */}
      <section
        className="contact-section bg-black "
        style={{ marginTop: "4rem" }}
      >
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    4923 Market Street, Orlando FL
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="#!">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="mx-2" href="#!">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer class="footer bg-black small text-center text-white-50">
        <div class="container px-4 px-lg-5">
          Copyright &copy; Your Website 2022
        </div>
      </footer>
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script>
      {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
    </di>
  );
};

export default Home;
