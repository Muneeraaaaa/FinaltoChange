import React from "react";
import { Link } from "react-router-dom";

export const Chose = () => {
  return (
    <>
      <div className="container mt-5 " id="Cards">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-card-5">
              <Link style={{ textDecoration: "none" }} to="/EMAIL">
                <img src="assets/assets/img/IMGE.png" />

                <div className="profile-name">EMAIL</div>

                <div className="profile-overview">
                  <div className="profile-overview">
                    <div className="row text-left p-2">
                      <div className="col-xs-4">
                        <h4>
                          Click here to check if the sender of email is spam
                          before replying to it
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-card-5">
              <img src="assets/assets/img/Num.png" />
              <div className="profile-name">PHONE NUMBER</div>

              <div className="profile-overview">
                <div className="profile-overview">
                  <div className="row text-left p-2">
                    <div className="col-xs-4">
                      <h4>
                        Click here to check if phone number is previously
                        reported before answearing them
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="profile-card-5">
              <img src="assets/assets/img/URL.png" />
              <div className="profile-name">URL</div>

              <div className="profile-overview">
                <div className="profile-overview">
                  <div className="row text-left p-2">
                    <div className="col-xs-4">
                      <h4>
                        Click here to check if the URL is spam before you click
                        on it
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chose;
