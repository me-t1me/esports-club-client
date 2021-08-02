import React from "react";
import "./TourneyStyles.css";

const Tourney = () => {
  return (
    <div className="tourney-container">
      <div className="fixture-container">
        <iframe
          title="Tourney"
          src="https://challonge.com/dualitybphc/module"
          width="90%"
          height="700"
          frameborder="0"
          scrolling="auto"
          allowtransparency="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Tourney;
