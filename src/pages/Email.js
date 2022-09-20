import React, { useState } from "react";
import { toast } from "react-toastify";
import "./P.css";
const Email = ({
  emailadrees,
  emaildomain,
  emailspam,
  emailinput,
  setEmailinput,
  emailCheck,
}) => {
  // [spamsection, setspamsection] = useState("");

  const spam = () => {
    if (emailspam === true) {
      toast.error("BE CARFULL IT DANGRES !!", {});
    } else {
      toast.success("ITS SAFE !", {});
    }
  };

  console.log(emailadrees);
  console.log(emaildomain);
  console.log(emailspam);

  return (
    <>
      <div class="input-group w-50 mx-auto mt-5"></div>

      <div class="p-20 bg-surface-secondary mt-5 ">
        <div class="row">
          <div class=" col-lg-7 mx-auto">
            <div class="card shadow">
              <div class="card-body">
                <div className="Text text-center mt-6">
                  <h1>Enter email</h1>
                </div>

                <div class="input-group  w-20 mx-auto mt-6">
                  <input
                    value={emailinput}
                    onChange={(e) => setEmailinput(e.target.value)}
                    type="text"
                    class="form-control w-20 mx-auto mt-5"
                    placeholder="Enter the Sender Email "
                  />

                  <button
                    onClick={emailCheck}
                    class="btn btn-success mt-5"
                    type="button"
                  >
                    Serach{" "}
                  </button>
                </div>
                {/* 
<h3> Email Report :</h3>
                <hr/>
                <h6> Is it spam  ? </h6>
               { spam()}
               <br/>
                <p>{emailspam}</p>
                <h6> The email domain is : </h6>
                <p>{emaildomain}</p>
                <br/>
                <h6> The email Adress is : </h6>
                <p>{emailadrees}</p> */}

                <div>
                  {/* <h1>.................................................................................................................</h1> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // }
};

export default Email;

// {
//     "status": "success",
//     "data": {
//         "email_address": "test@mail7.io",
//         "domain": "mail7.io",
//         "valid_syntax": true,
//         "disposable": true,
//         "webmail": false,
//         "deliverable": true,
//         "catch_all": true,
//         "gibberish": false,
//         "spam": false
//     }
// }
