import React from "react";
import './Header.scss';

export default function Header(props) {
  return (
    <div className="page-title">
      <h1>{props.pageTitle}</h1>
    </div>
  );
}
