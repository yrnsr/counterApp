import React from "react";

const VARIANT_STYLES = {
  filled: ({ titleColor, color }) => ({
    color: titleColor || "#FFF",
    backgroundColor: color,
    borderColor: color,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    display: "flex",
    border: "none",
    fontSize: 30,
    padding: "20px 30px",
    cursor: "pointer",
  }),
  ghost: ({ color }) => ({
    backgroundColor: "transparent",
    borderColor: "transparent",
    color,
    borderWidth: 2,
    cursor: "pointer",
  }),
  outline: ({ color }) => ({
    backgroundColor: "transparent",
    borderColor: color,
    borderStyle: "solid",
    color,
    borderWidth: 2,
    cursor: "pointer",
  }),
};

const Button = ({ variant = "filled", color = "#7fa19f", title, style, icon, ...props }) => {
  return (
    <button
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        borderRadius: 6,
        outline: "none",
        minWidth: title ? "auto" : "60px",
        ...VARIANT_STYLES[variant]({ color }),
        ...style,
      }}
      {...props}
    >
      {title && <span style={{ marginLeft: icon ? 5 : 0 }}>{title}</span>}
    </button>
  );
};

export default Button;
