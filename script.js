import React from "react";
import  ReactDOM from "react-dom/client";

const r = React.createElement("h1", {}, "Hi Babe");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(r);