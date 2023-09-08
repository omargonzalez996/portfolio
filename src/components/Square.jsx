import React from "react";

function Square({ active }) {
  //return <div className={active ? "square-active" : `square-inactive`}></div>;
  return <div className={`square-${active ? "active" : "inactive"}`}></div>;
}

export default Square;
