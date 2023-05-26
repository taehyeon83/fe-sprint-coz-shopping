import React from "react";
import PropTypes from "prop-types";
import "./star.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export const Star = ({primary, fontSize, size, label, ...props}) => {
  const mode = primary ? "storybook-Star--primary" : "storybook-Star--secondary";
  return <FontAwesomeIcon icon={faStar} className={["storybook-Star", `storybook-Star--${size}`, mode].join(" ")} style={{fontSize: "3rem"}} {...props} />;
};

Star.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Star.defaultProps = {
  primary: false,
  onClick: undefined,
};
