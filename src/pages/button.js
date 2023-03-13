import React from "react";
import Button from "../components/button";
import IconButton from "../components/icon-button";
import InputStandard from "../components/input";

export default function ButtonPage() {
    return(
        <section>
            <h1>This is button page</h1>
            <div>
                button sample
                <Button
                    buttonType={"Submit"}
                    buttonText={"Testing Button"}
                />
                <Button
                    disabled={"disabled"}
                    buttonText={"Button 2"}
                />
            </div>

            <div className="nl-card">
                <p className="nl-theme">nl-card</p>
                <IconButton icon={"info"} />
                <IconButton iconlayout={"outlined"} icon={"info"} />
                <IconButton iconlayout={"round"} icon={"info"} />
                <IconButton iconlayout={"sharp"} icon={"info"} />
                <IconButton iconlayout={"duotone"} icon={"info"} />

                <InputStandard placeholder={"Please insert your first name"} />
                <InputStandard type={"text"} placeholder={"Please Insert your last name"} />
                <InputStandard type={"number"} placeholder={"Number only"} />

                <Button buttonText={"Testing Button"} />
                <Button buttonType={"Submit"} buttonText={"Testing Button"} />
                <Button disabled={"disabled"} buttonText={"Button 2"} />
            </div>

            <div className="asd">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </section>
    );
}