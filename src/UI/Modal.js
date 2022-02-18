import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import  { modalActions } from "../store/modal";

import "./Modal.css";

const Backdrop = (props) => {
  const dispatch = useDispatch();

  const handleBackdropClick = () => {
    dispatch(modalActions.close());
  };
  return <div className="backdrop" onClick={handleBackdropClick}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
function Modal(props) {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
      {/* <Backdrop />
      <ModelOverlay> {props.children}</ModelOverlay> */}
    </div>
  );
}

export default Modal;
