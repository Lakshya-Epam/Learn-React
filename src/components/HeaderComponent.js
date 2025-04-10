import { LOGO_URL } from "../../utils/constants";
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} id="logo" alt="logo" />
            </div>
        <div ><input className="searchBar" id ="inputbox" type="textbox" placeholder="what do you want to eat?"></input> <button className="searchBar"><b>Search</b></button></div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default HeaderComponent ;