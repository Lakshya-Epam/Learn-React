import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />

        </div>
    )
}
rootElement.render(<AppLayout />);




