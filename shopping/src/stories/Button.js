import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export const Button = ({primary, backgroundColor, size, label, ...props}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button type="button" className={["storybook-button", `storybook-button--${size}`, mode].join(" ")} style={backgroundColor && {backgroundColor}} {...props}>
      <FontAwesomeIcon icon={faStar} />
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
