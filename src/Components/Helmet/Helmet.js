import React from "react";

const Helmet = (props) => {
  document.title = "Vegetable store -" + props.title;
  return <div className="w-100" style={{marginTop:"5%"}}>{props.children}</div>;
};

export default Helmet;
