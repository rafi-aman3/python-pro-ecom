import React from "react";
import { Link } from "react-router";

const FooterLink = ({text,href}) => {
  return (
    <Link to={href}>
      <a className="link link-hover">{text}</a>
    </Link>
  );
};

export default FooterLink;
