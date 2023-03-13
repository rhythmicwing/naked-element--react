import React from "react";
import '../../scss/core/components/input.scss'

export default function InputStandard({
    type = "text",
    placeholder,
}) {
    return(
        <input type={type} placeholder={placeholder} />
    );
}