import React from "react";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
  <Header spotify={spotify} />

  <div className="body__info">

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
        </div>
      </div>
  </div>
  );
}

export default Body;