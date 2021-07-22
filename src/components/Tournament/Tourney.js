import React from "react";
import "./TourneyStyles.css";

const Tourney = () => {
  return (
    <div className="tourney-container">
      <div className="fixture-container">
        <iframe
          title="Tourney"
          src="https://challonge.com/mmi2ozcs/module"
          width="80%"
          height="1000"
          frameborder="0"
          scrolling="auto"
          allowtransparency="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Tourney;
