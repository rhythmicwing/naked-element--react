import React from "react";
import Button from "../components/button";
import IconButton from "../components/icon-button";

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
            </div>

            <div className="nl-card">
                <p className="nl-theme">nl-card</p>
                <IconButton simple={"simple"} icon={"info"} />
                <IconButton simple={"simple"} iconlayout={"outlined"} icon={"info"} />
                <IconButton simple={"simple"} iconlayout={"round"} icon={"info"} />
                <IconButton simple={"simple"} iconlayout={"sharp"} icon={"info"} />
                <IconButton simple={"simple"} iconlayout={"duotone"} icon={"info"} />
            </div>


            <input type="text" />

            <button className="icon-button">
                <i class="material-icons">
                thumb_up
                </i>
            </button>

        </section>
    );
}