import React from "react";
import "./Modal.css";
import { GrClose } from "react-icons/gr";

const Modal = ({ CloseModal }) => {
  return (
    <div className="Modal_background">
      <div className="modal_COntainer">
        <div className="Modal_btn">
          <GrClose
            onClick={() => {
              CloseModal(false);
            }}
          />
        </div>

        <div className="Modal_title">
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className="Modal_body">
          <p>The next page is Very Good! Dont move forward</p>
        </div>
        <div className="Modal_footer">
          <button
            onClick={() => {
              CloseModal(false);
            }}
          >
            Cancle
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
