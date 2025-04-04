const heading = React.createElement("h1", {}, "Hello World from React...!!");
console.log(heading);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// console.log(rootElement);
rootElement.render(heading);