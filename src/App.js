import logo from "./logo.svg";
import "./App.css";
import "./st.css";
import Navebar from "./pages/Navebar";
import Email from "./pages/Email";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./component/Home";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Chose from "./pages/Chose";
import PhoneNumber from "./pages/PhoneNumber";
import LoginUser from "./pages/Register/LoginUser";
import RegisterUser from "./pages/Register/RegisterUser";

function App() {
  const [emailinput, setEmailinput] = useState("");
  const [emailresult, setEmailresult] = useState("");
  const [emailadrees, setEmailadress] = useState("");
  const [emaildomain, setEmaildomain] = useState("");
  const [emailspam, setEmailspam] = useState("");

  // useEffect(()=> {
  // const fetchemailresult= async () => {
  //   const request =await fetch ( `https://api.eva.pingutil.com/email?email=${emailinput} `);
  //   const data = await request.json();
  //   setEmailadress(data.data.email_address);
  //   setEmaildomain(data.data.domain);
  //   setEmailspam(data.data.spam);
  //   console.log('data',data);

  // };
  // fetchemailresult();
  // } ,[] );

  // const showresult = async (e) => {
  //   console.log(emailinput)
  //   const request =await fetch (`https://api.eva.pingutil.com/email?email=${emailinput} `);
  //   const data=await request.json();
  //   console.log(data);
  //   setEmailadress(data.data.email_address);
  //   console.log(emailadrees);
  //     setEmaildomain(data.data.domain);
  //     setEmailspam(data.data.spam);
  //     console.log('data',data);
  //   }

  const emailCheck = async (e) => {
    console.log(emailinput);
    const request = await fetch(
      `https://api.eva.pingutil.com/email?email=${emailinput} `
    );
    const data = await request.json();
    console.log(data);
    setEmailspam(data.data.spam);
    console.log("data", data);

    if (emailspam === true) {
      toast.error("BE CARFULL IT DANGRES !!", {});
    } else {
      toast.success("YOU ARE SAFE ", {
        position: "bottom-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // const phonenumbercheck = async (e) => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "2fb2535170msh927f85182db7851p1073d1jsn65e935cb20ad",
  //       "X-RapidAPI-Host": "spamcheck.p.rapidapi.com",
  //     },
  //   };

  //   fetch(
  //     `https://spamcheck.p.rapidapi.com/index.php?number=%2B${emailinput}`,
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

  return (
    <BrowserRouter>
      <Navebar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chose" element={<Chose />} />
        <Route path="/Login" element={<LoginUser />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />

        <Route
          path="/Email"
          element={
            <Email
              emailadrees={emailadrees}
              emaildomain={emaildomain}
              emailspam={emailspam}
              emailinput={emailinput}
              setEmailinput={setEmailinput}
              emailCheck={emailCheck}
            />
          }
        />
        <Route
          path="/PhoneNumber"
          element={
            <PhoneNumber
              emailresult={emailadrees}
              emaildomain={emaildomain}
              emailspam={emailspam}
              emailinput={emailinput}
              setEmailinput={setEmailinput}
            />
          }
        />
        {/* <Route path="/URL" element={<URL/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// {
//   "status": "success",
//   "data": {
//       "email_address": "test@mail7.io",
//       "domain": "mail7.io",
//       "valid_syntax": true,
//       "disposable": true,
//       "webmail": false,
//       "deliverable": true,
//       "catch_all": true,
//       "gibberish": false,
//       "spam": false
//   }
// }
