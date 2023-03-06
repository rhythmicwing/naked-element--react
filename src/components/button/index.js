import React from "react";

export default function Button({
    buttonText,
    buttonType,
    disabled
}) {
    return(
        <button disabled={disabled} type={buttonType}>{buttonText}</button>
    );
}