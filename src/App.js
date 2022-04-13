import React from "react";
import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

const App = () => {
  // state for the modal
  const [Showmodal, setShowModal] = useState(false);

  return (
    <div className="app">
      <p> Hey, click on the button.</p>
      <button
        className="btn"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open modal
      </button>
      {Showmodal && <Modal CloseModal={setShowModal} />}
    </div>
  );
};

export default App;
