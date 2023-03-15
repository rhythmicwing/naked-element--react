import React from "react";
import Button from "../components/button";
import IconButton from "../components/icon-button";
import InputStandard from "../components/input";

export default function ButtonPage() {
    return(
        <section>
            <div className="flex-init">
                <div className="flex-row">
                    <div className="flex-col-5 flex-col-xl-6 flex-col-l-7 flex-col-m-9 flex-col-s-10 flex-col-xs-12 nl-margin--0auto">
                        <div className="nl-card">
                            <div className="card-heading">
                                <h6>Button (to be continue)</h6>
                            </div>
                            <div className="card-content">
                                <IconButton icon={"info"} />
                                <IconButton iconlayout={"outlined"} icon={"info"} />
                                <IconButton iconlayout={"round"} icon={"info"} />
                                <IconButton iconlayout={"sharp"} icon={"info"} />
                                <IconButton iconlayout={"duotone"} icon={"info"} />

                                <InputStandard placeholder={"Please insert your first name"} />
                                <InputStandard type={"text"} placeholder={"Please Insert your last name"} />
                                <InputStandard type={"number"} placeholder={"Number only"} />
                            </div>

                            <Button buttonType={"Submit"} buttonText={"Submit"} />
                            <Button buttonText={"Cancel"} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}