import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div", {id:"child1"},
        [React.createElement("h1", {id:"heading1"}, "Hello"),
        React.createElement("h1", {id:"heading2"}, "Hello1"),
        React.createElement("h1", {id:"heading3"}, "Hello2"),
        React.createElement("h1", {id:"heading4"}, "Hello3")
    ]),
    React.createElement("div", {id:"child2"},
        [React.createElement("h1", {id:"heading1"}, "Hello"),
        React.createElement("h1", {id:"heading2"}, "Hello1"),
        React.createElement("h1", {id:"heading3"}, "Hello2"),
        React.createElement("h1", {id:"heading4"}, "Hello3")
    ])]
);


const heading = React.createElement(
    "h1", 
    {id:"heading", xyz:"abc"}, 
    "Hello World from React");
console.log(heading);
const root = createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);