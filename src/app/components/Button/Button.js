import React, { Component } from "react";
import "./Button.scss";

const Button = (props) => {
  const { isBlur, children, onPress } = props;
  return (
    // <div class="form-group">
    <button
      class={isBlur ? "btn btn-blur btn-block" : "btn btn-primary btn-block"}
      onClick={() => onPress()}
    >
      {children}
    </button>
    // </div>
  );
};

export default Button;
