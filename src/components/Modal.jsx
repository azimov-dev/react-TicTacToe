import React from "react";
import "../App.css";
import ReactDOM from "react-dom";

function Modal({ wonPlayer }) {
  let player = "";
  if (wonPlayer) {
    player = "Player 2";
  } else {
    player = "Player 1";
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-title">{player} won!</h2>
        <button className="modal-btn" onClick={() => window.location.reload()}>
          Start again
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
