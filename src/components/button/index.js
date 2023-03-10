import React from "react";
import '../../scss/testing.scss';

export default function Button({
    buttonText,
    buttonType,
    disabled
}) {
    return(
        <button disabled={disabled} type={buttonType}>{buttonText}</button>
    );
}