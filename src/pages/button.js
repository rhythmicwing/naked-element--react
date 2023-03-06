import React from "react";
import Button from "../components/button";

export default function ButtonPage() {
    return(
        <div>
            <h1>This is button page</h1>
            <div>
                button sample
                <Button buttonType={"Submit"} buttonText={"Testing Button"} />
                <Button disabled={"disabled"} buttonText={"Button 2"} />
            </div>
        </div>
    );
}