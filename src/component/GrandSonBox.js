import React from "react";
import { useSelector } from "react-redux";

const GrandSonBox = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      gread
      {counter}
    </div>
  );
};

export default GrandSonBox;
