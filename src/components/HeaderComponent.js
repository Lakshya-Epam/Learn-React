import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {
    const [btnName ,setBtnName]=useState("LogIn");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} id="logo" alt="logo" />
            </div>
        
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                        <button className="btn" onClick={()=>{
                           btnName==="LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
                        }}>
                            <b>
                            {btnName}
                            </b>
                            </button>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default HeaderComponent ;