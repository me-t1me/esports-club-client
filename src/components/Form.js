import React, { useState, useEffect } from "react";
import Api from "../apis/Api";
import "./FormStyles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimationText from "./AnimationText";

const URL = process.env.REACT_APP_API_URL;

const Form = () => {
  const [isFilled, setFilled] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [riotId, setRiotId] = useState();
  const [crank, setCrank] = useState();
  const [hrank, setHrank] = useState();

  var currentdate = new Date();

  const alert = (message) => toast.dark(`${message}`);

  const pay = async () => {
    try {
      window.open(`${URL}/apis/pay`, "_blank"); // https://esport-club-server.herokuapp.com/ , http://localhost:3005/
    } catch (err) {
      console.log(err);
    }
  };

  const getStatus = async () => {
    const response = await Api.get("/2");
    return response.data.data;
  };

  const sendData = async (data) => {
    await Api.get(
      `/${name}/${mobile}/${riotId}/${crank}/${hrank}/${data}/${currentdate}`
    );
  };

  const getState = async () => {
    try {
      getStatus()
        .then((status) => sendData(status))
        .then(() => alert("🔥🎉 Submission Successfull"))
        .catch(() => alert("😢 Submission Failed"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isClicked === true && isPaid === true) {
      getState();
    } else if (isClicked === true && isPaid === false) {
      alert("❌💰 Payment not made");
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
              onClick={() => setFilled(true)}
              onChange={(e) => setMobile(e.target.value)}
            />
            <label htmlFor="number" className="label-number">
              <span className="content-number">WhatsApp Number</span>
            </label>
          </div>

          <div className="form-riot">
            <input
              type="text"
              name="riot"
              autoComplete="off"
              required
              onMouseDownCapture={() =>
                alert("😎 ID : noob 4201 (not noob#4201)")
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
              <span className="content-currentrank">Current Rank</span>
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
              <span className="content-highestrank">Highest Rank</span>
            </label>
          </div>

          <div className="form-pay">
            <button
              className="pay"
              required
              onClick={() => {
                if (isFilled === true) {
                  pay();
                  setIsPaid(true);
                } else {
                  alert("First fill info");
                }
              }}
            >
              <span className="pay-first">Pay</span>
              <span className="tm">tm</span>
            </button>
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
