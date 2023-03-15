import React from "react";
import Button from "../components/button";
import IconButton from "../components/icon-button";
import InputStandard from "../components/input";

export default function HomePage() {
    return(
        <section>

            <div className="flex-init">
                <div className="flex-row">
                    {/* Overkill example, can be simplified */}
                    <div className="flex-col-5 flex-col-xl-6 flex-col-l-7 flex-col-m-9 flex-col-s-10 flex-col-xs-12 nl-margin--0auto">
                        <div className="nl-card">
                            <div className="card-heading">
                                <h6>Form Element</h6>
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

            <div className="flex-init">
                <div className="flex-row">
                    <div className="flex-col">
                        <div className="nl-card">
                            <div className="card-heading">
                                <h4>Grid</h4>
                            </div>
                            <div className="card-content">
                                <h6>To start</h6>
                                <p className="nl-typo--body1 nl-margin-bottom--8px">
                                    &lt;div class="flex-init"&gt; <br />
                                        &emsp;&lt;div class="flex-row"&gt;<br />
                                            &emsp;&emsp;&lt;div class="flex-col-2"&gt;<br />
                                            &emsp;&emsp;&emsp; Column 2<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />
                                            &emsp;&emsp;&lt;div class="flex-col-2"&gt;<br />
                                            &emsp;&emsp;&emsp; Column 8<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />
                                            &emsp;&emsp;&lt;div class="flex-col-2"&gt;<br />
                                            &emsp;&emsp;&emsp; Column 2<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />
                                        &emsp;&lt;/div&gt;<br />
                                    &lt;/div&gt;
                                </p>

                                <div className="flex-init grid-demo">
                                    <div className="flex-row">
                                        <div className="flex-col-2">Column 2</div>
                                        <div className="flex-col-8">Column 8</div>
                                        <div className="flex-col-2">Column 2</div>
                                    </div>
                                </div>

                                <hr />

                                <h6>Offset</h6>
                                <p className="nl-typo--body1 nl-margin-bottom--8px">
                                            &emsp;&emsp;&lt;div class="flex-col-2 offset-1"&gt;<br />
                                            &emsp;&emsp;&emsp; Column 2 with offset 1<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />
                                            &emsp;&emsp;&lt;div class="flex-col-3 offset-4"&gt;<br />
                                            &emsp;&emsp;&emsp; Column 3 with offset 4<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />
                                </p>

                                <div className="flex-init grid-demo">
                                    <div className="flex-row">
                                        <div className="flex-col-2 offset-1">Column 2 with offset 1</div>
                                        <div className="flex-col-3 offset-4">Column 3 with offset 4</div>
                                    </div>
                                </div>

                                <hr />

                                <h6>Offset</h6>
                                <p className="nl-typo--body1 nl-margin-bottom--8px">
                                            &emsp;&emsp;&lt;div class="flex-col-1"&gt;<br />
                                            &emsp;&emsp;&emsp; Column 1 with super long text to demo how content align work.<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />

                                            &emsp;&emsp;&lt;div class="flex-col-1 v-align-center"&gt;<br />
                                            &emsp;&emsp;&emsp; Vertical align center<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />

                                            &emsp;&emsp;&lt;div class="flex-col-1 v-align-bottom"&gt;<br />
                                            &emsp;&emsp;&emsp; Vertical align bottom<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />

                                            &emsp;&emsp;&lt;div class="flex-col-2 h-align-center"&gt;<br />
                                            &emsp;&emsp;&emsp; Horizontal align center<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />

                                            &emsp;&emsp;&lt;div class="flex-col-2 h-align-right"&gt;<br />
                                            &emsp;&emsp;&emsp; Horizontal align right<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />

                                            &emsp;&emsp;&lt;div class="flex-col-5 v-align-bottom h-align-right"&gt;<br />
                                            &emsp;&emsp;&emsp; Vertical align bottom + Horizontal align right<br />
                                            &emsp;&emsp;&lt;/div&gt;<br />
                                </p>

                                <div className="flex-init grid-demo">
                                    <div className="flex-row">
                                        <div className="flex-col-1">Column 1 with super long text to demo how content align work.</div>
                                        <div className="flex-col-1 v-align-center">Vertical align center</div>
                                        <div className="flex-col-1 v-align-bottom">Vertical align bottom</div>
                                        <div className="flex-col-2 h-align-center">Horizontal align center</div>
                                        <div className="flex-col-2 h-align-right">Horizontal align right</div>
                                        <div className="flex-col-5 v-align-bottom h-align-right">Vertical align bottom + Horizontal align right</div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer">
                                <p className="nl-typo--caption">Margin consider as column offset alternative. <br />Instead of putting two offset classes to make a center align column, use nl-margin--0auto.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-row">
                    <div className="flex-col">
                        <div className="nl-card">
                            <div className="card-heading">
                                <h5>Card</h5>
                            </div>
                            <div className="card-content">
                                <p className="nl-typo--body1 nl-margin-bottom--16px">
                                    Added extra margin on this &lt;p&gt; tag.
                                    <br /><br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <p className="nl-typo--body1">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                </p>
                            </div>
                            <div className="card-footer">
                                <p className="nl-typo--caption">Card footer content here.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-row">
                    <div className="flex-col">
                        <div className="nl-card">
                            <div className="card-heading">
                                <h5>Typography</h5>
                            </div>
                            <div className="card-content">
                                <h1>Heading 1</h1>
                                <h2>Heading 2</h2>
                                <h3>Heading 3</h3>
                                <h4>Heading 4</h4>
                                <h5>Heading 5</h5>
                                <h6>Heading 6</h6>
                                <p className="nl-typo--subtitle1">Subtitle 1, class="nl-typo--subtitle1"</p>
                                <p className="nl-typo--subtitle2">Subtitle 2, class="nl-typo--subtitle2"</p>
                                <p className="nl-typo--body1">Body 1, class="nl-typo--body1"</p>
                                <p className="nl-typo--body2">Body 2, class="nl-typo--body2"</p>
                                <p className="nl-typo--button">Button font, class="nl-typo--button"</p>
                                <p className="nl-typo--caption">Caption, class="nl-typo--caption"</p>
                                <p className="nl-typo--overline">Overline, class="nl-typo--overline"</p>
                            </div>
                            <div className="card-footer">
                                <p className="nl-typo--caption">--</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}