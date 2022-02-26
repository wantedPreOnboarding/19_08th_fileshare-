import React from "react";
import ReactDOM from "react-dom";
import PortalProps from "./Portal.type";

const Portal = ({ children, id }: PortalProps) => {
  const modalElement = document.querySelector(id);
  return modalElement ? ReactDOM.createPortal(children, modalElement) : null;
};

export default Portal;
