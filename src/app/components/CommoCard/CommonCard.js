import React from "react";
import "./CommonCard.scss";
export default function CommonCard(props) {
  return <div className="common-card">{props.children}</div>;
}
