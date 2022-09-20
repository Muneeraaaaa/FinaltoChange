import React from "react";
import "./P.css";

const PhoneNumber = ({ emailadrees, emaildomain, emailspam, emailinput }) => {
  return (
    <>
      <div ClassNane=" container mt-5">
        <div class="row text-center">
          <h1 className="MM"> Enter the sender Email </h1>
        </div>
        <div class="row text-center">
          <div class="input-group w-50 mx-auto mt-3">
            <input type="text" class="form-control " />
            <button class="btn btn-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
      <div class="row text-center mt-4">
        <h3> The Result :</h3>
        <hr />
        <p> the domain of it is : {emailadrees}</p>
        <br />
        <p>{emaildomain}</p>
      </div>
    </>
  );
};

export default PhoneNumber;
