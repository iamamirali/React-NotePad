import React, { useEffect } from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { setIsError } = useGlobalContext();
  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  });

  return <div className="modal">the title shouldn't be empty!</div>;
};

export default Modal;
