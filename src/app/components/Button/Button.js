import React, { Component } from "react";
import "./Button.scss";

const Button = (props) => {
  const { isBlur, children, onClick,colorClass,customClass,style } = props;
  return (
    // <div class="form-group">
    <button
    style={{style}}
      className={ `btn btn-${colorClass} ${customClass} `}
      onClick={() => onClick()}
    >
      {children}
    </button>
    // </div>
  );
};

export default Button;
