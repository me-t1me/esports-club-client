import React, { useEffect } from "react";

import "./SuccessStyles.css";

const Success = () => {
  useEffect(() => {
    setTimeout(() => window.close(), 5000);
  }, []);

  return (
    <div className="success-main">
      <div className="success-payment-message">
        Payment Successful
        <br /> Proceed to submit your form. <br />
        This window will close after 5 seconds.
      </div>
    </div>
  );
};

export default Success;
