import React from "react";
import '../../scss/core/components/button.scss'

export default function Button({
    buttonText,
    buttonType = "button",
    disabled
}) {
    return(
        <button disabled={disabled} type={buttonType} className="nl-typo--button">
            <span>{buttonText}</span>
        </button>
    );
}