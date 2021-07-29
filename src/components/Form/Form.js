import React, { useState, useEffect } from "react";
import Api from "../../apis/Api";
import "./FormStyles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimationText from "./AnimationText/AnimationText";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
// import { usePopup } from "react-hook-popup";

// import logo from "../../assets/esports_colour.png";
// const URL = process.env.REACT_APP_API_URL;
// const MID = process.env.REACT_APP_MID;

// const loadRazorpay = (src) => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve(true);
//     };
//     script.onerror = () => {
//       resolve(false);
//     };
//     document.body.appendChild(script);
//   });
// };

const Form = () => {
  const [isClicked, setClicked] = useState(false);
  // eslint-disable-next-line
  const [isPaid, setIsPaid] = useState(false);
  const [name, setName] = useState();
  const [mobile, setMobile] = useState("");
  const [riotId, setRiotId] = useState();
  const [crank, setCrank] = useState();
  const [hrank, setHrank] = useState();
  // eslint-disable-next-line
  const [statusof, setStatus] = useState("not paid");
  const [id, setId] = useState();
  const [email, setEmail] = useState();

  var currentdate = new Date();

  const alerttoast = (message) => toast.dark(`${message}`);

  // const displayRazorpay = async () => {
  //   const res = await loadRazorpay(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!res) {
  //     alert("Razorpay sdk failed to load");
  //     return;
  //   }

  //   const data = await fetch(`${URL}/apis/pay`, { method: "POST" }).then((t) =>
  //     t.json()
  //   );

  //   console.log(data);

  //   const options = {
  //     key: MID, // Enter the Key ID generated from the Dashboard
  //     amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     currency: data.currency,
  //     order_id: data.id,
  //     name: "Esports Club BPHC",
  //     description: "Duality Tournament",
  //     image: { logo },
  //     handler: function (response) {
  //       alert(" Payment Successful, Proceed to submit your form. ");
  //       // window.open("/success", "_blank");
  //       // alert(response.razorpay_payment_id);
  //       // alert(response.razorpay_order_id);
  //       // alert(response.razorpay_signature);
  //       setStatus("captured");
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  //   rzp1.on("payment.failed", function (response) {
  //     // window.open("/failure", "_blank");
  //     alert(
  //       "Payment Failed, You can still submit the form, we will contact you to make payment afterwards. "
  //     );
  //     setStatus("not successful");

  //     // alert(response.error.code);
  //     // alert(response.error.description);
  //     // alert(response.error.source);
  //     // alert(response.error.step);
  //     // alert(response.error.reason);
  //     // alert(response.error.metadata.order_id);
  //     // alert(response.error.metadata.payment_id);
  //   });
  //   rzp1.on("payment.successful", function (response) {
  //     // alert(response.error.code);
  //     // alert(response.error.description);
  //     // alert(response.error.source);
  //     // alert(response.error.step);
  //     // alert(response.error.reason);
  //     // alert(response.error.metadata.order_id);
  //     // alert(response.error.metadata.payment_id);
  //   });
  // };

  // const pay = () => {
  //   displayRazorpay();
  //   // try {

  //   //   // window.open(`${URL}/apis/pay`, "_blank"); // https://esport-club-server.herokuapp.com , http://localhost:3005
  //   //   // alert(
  //   //   //   "Please Submit after paying fee, otherwise Registration will be invalid"
  //   //   // );
  //   // } catch (error) {
  //   //   console.log(error.response.data);
  //   // }
  // };

  // const getStatus = async () => {
  //   const response = await Api.get("/2");
  //   return response.data.data;
  // };

  const sendData = async (data) => {
    await Api.get(
      `/${name}/${mobile}/${riotId}/${crank}/${hrank}/${data}/${currentdate}/${id}/${email}`
    );
  };

  const getState = async () => {
    try {
      // getStatus()
      //   .then((status) => {
      //     if (status === statusof) {
      //       sendData(status);
      //     } else {
      //       sendData(status + statusof);
      //     }
      //   })
      sendData(statusof)
        .then(() => alerttoast("🔥🎉 Submission Successfull"))
        .catch(() => alerttoast("😢 Submission Failed"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isClicked === true && riotId !== undefined) {
      if (riotId.match("^[0-9a-zA-Z ]+$")) {
        getState();
      } else {
        alerttoast("riot id should not contain #");
        setClicked(false);
      }
    } else if (isClicked === true && isPaid === false) {
      alerttoast("❌💰 Payment not made");
      setClicked(false);
    }
    // eslint-disable-next-line
  }, [isClicked, isPaid]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("ispaid", isPaid, "isclicked", isClicked);

  return (
    <div>
      <div className="toast">
        <ToastContainer />
      </div>
      <form onSubmit={handleSubmit} className="main-form">
        <div className="glass">
          <div className="form-animation">
            <AnimationText />
          </div>
          <div className="form-title">
            <h1>Tournament Form</h1>
          </div>

          <div className="form-name">
            <input
              type="text"
              name="name"
              autoComplete="off"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>

          <div className="form-number">
            <input
              type="text"
              name="number"
              autoComplete="off"
              required
              onChange={(e) => setMobile(e.target.value)}
            />
            <label htmlFor="number" className="label-number">
              <span className="content-number">WhatsApp No.</span>
            </label>
          </div>

          <div className="form-riot">
            <input
              type="text"
              name="riot"
              autoComplete="off"
              // pattern="^[a-zA-Z0-9]+$"
              required
              onMouseDownCapture={() =>
                alerttoast("😎 ID : noob 4201 (not noob#4201)")
              }
              onChange={(e) => setRiotId(e.target.value)}
            />
            <label htmlFor="riot" className="label-riot">
              <span className="content-riot">Riot ID</span>
            </label>
          </div>

          <div className="form-currentrank">
            <input
              type="text"
              name="currentrank"
              autoComplete="off"
              required
              onChange={(e) => setCrank(e.target.value)}
            />
            <label htmlFor="currentrank" className="label-currentrank">
              <span className="content-currentrank">Current Act Rank</span>
            </label>
          </div>

          <div className="form-highestrank">
            <input
              type="text"
              name="highestrank"
              autoComplete="off"
              required
              onChange={(e) => setHrank(e.target.value)}
            />
            <label htmlFor="highestrank" className="label-highestrank">
              <span className="content-highestrank">Highest Act Rank</span>
            </label>
          </div>

          <div className="form-id">
            <input
              type="text"
              name="id"
              autoComplete="off"
              required
              onChange={(e) => setId(e.target.value)}
            />
            <label htmlFor="id" className="label-id">
              <span className="content-id">Bits Id</span>
            </label>
          </div>

          <div className="form-email">
            <input
              type="text"
              name="email"
              autoComplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="label-email">
              <span className="content-email">Bits Email</span>
            </label>
          </div>

          <div className="form-pay">
            <h4>
              UPI ID: <span className="tm">siddhantashoknagar@oksbi</span>
              <br />
              note - put your name in comments
            </h4>
            {/* <Popup
              trigger={
                <button className="pay">
                  <span className="pay-first">Pay&nbsp;</span>
                  <span className="tm">Now</span>
                </button>
              }
              modal
            >
              <div className="popup"> Modal content </div>
            </Popup> */}
            {/* <button
              className="pay"
              required
              onClick={() => {
                if (mobile.length === 10) {
                  pay();
                  setIsPaid(true);
                } else if (
                  mobile === undefined ||
                  mobile === "" ||
                  id === undefined ||
                  id === "" ||
                  email === undefined ||
                  email === ""
                ) {
                  alerttoast("First fill info");
                } else {
                  alerttoast("Fill correct WhatsApp number");
                }
              }}
            >
              <span className="pay-first">Pay&nbsp;</span>
              <span className="tm">Now</span>
            </button> */}
          </div>

          <div className="form-submit">
            <button className="submit" onClick={(e) => setClicked(true)}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
