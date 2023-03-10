import React from "react";
import '../../scss/testing.scss';
import '../../scss/core/components/iconButton.scss'

export default function IconButton({
    icon,
    simple,
    iconlayout = "default",
}) {
    let iconlayoutResult;
    switch(iconlayout) {
        case "outlined":
            iconlayoutResult = "material-icons-outlined";
        break;
        case "round":
            iconlayoutResult = "material-icons-round";
        break;
        case "sharp":
            iconlayoutResult = "material-icons-sharp";
        break;
        case "duotone":
            iconlayoutResult = "material-icons-two-tone";
        break;
        case "default":
            iconlayoutResult = "material-icons";
        break;
        default:
            iconlayoutResult = "material-icons";
    }
    return(
        // 5 different layout for icons
            // undefined = default = regular icon
            // outlined
            // round
            // sharp
            // duotone

        // Icon name can be find in https://fonts.google.com/icons?icon.set=Material+Icons&icon.platform=web

        <button className={`icon-button ${ simple }`}>
            <i className={iconlayoutResult}>{icon}</i>
            <div className="psuedoBorder"></div>
        </button>
    );
}