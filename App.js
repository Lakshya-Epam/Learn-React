import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World from React...!!");

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
const jsxHeading=<h1>Hello world from the JSX...!!!</h1>;
// rootElement.render(heading);
// rootElement.render(jsxHeading);
const reactElement=(
    <h2>Hello world from React Element</h2>
);
const FunctionalComponent =()=>{
    return <div>
        {reactElement}
    <h1>Hello world from Functional Component</h1>

    </div>
    
};
rootElement.render(<FunctionalComponent/>);