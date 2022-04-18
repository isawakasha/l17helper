import React from "react";
import { ReactDOM } from "react-dom";

function Popup() {
    return (
        <div>
            <h1> Hi </h1>
        </div>
    )
}

const container = document.getElementById("react-target");
const root = ReactDOM.createRoot(container);
root.render(<Popup/>);
