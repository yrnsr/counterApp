import React from "react";

const VARIANT_STYLES = {
    filled: (props) => ({
        color: props.titleColor ? props.titleColor : "#444",
        backgroundColor: props.color,
        borderColor: props.color,
        borderStyle: "solid",
        borderWidth: 2
    }),
    ghost: (props) => ({
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: props.color,
        borderWidth: 2
    }),
    outline: (props) => ({
        backgroundColor: "transparent",
        borderColor: props.color,
        borderStyle: "solid",
        color: props.color,
        borderWidth: 2
    })
};

const Button = (
    {
        variant = "filled",
        color = "#00c2a9",
        title,
        style,
        icon,
        ...props
    }
) => {
        return <button
            style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "10px 20px",
                borderRadius: 6,
                outline: "none",
                ...VARIANT_STYLES[variant]({
                    ...props,
                    color
                }),
                ...style
            }}
            {...props}
        >
            {
                icon ?
                    icon
                :
                    null
            }
            {
                title ?
                    <span
                        style={{
                            marginLeft: icon ? 5 : 0
                        }}
                    >
                        {title}
                    </span>
                :
                    null
            }
        </button>;
};
export default Button;