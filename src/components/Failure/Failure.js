import React, { useEffect } from "react";

import "./FailureStyles.css";

const Failure = () => {
  useEffect(() => {
    setTimeout(() => window.close(), 5000);
  }, []);

  return (
    <div className="failure-main">
      <div className="failure-payment-message">
        Payment Failed
        <br /> You can still submit the form, we will contact you to make
        payment afterwards. <br />
        This window will close after 5 seconds.
      </div>
    </div>
  );
};

export default Failure;
