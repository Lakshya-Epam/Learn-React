import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://images-platform.99static.com/mdbeYP7EWgX7tdQGLYwFj6ctftg=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/64/64173/attachment_64173052" id="logo" alt="logo" />
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

const resList = [
    {
        "id": 1,
        "name": "Paradise Biryani",
        "rating": 4.5,
        "cuisine": ["Hyderabadi", "Mughlai"],
        "area": "Secunderabad",
        "pure_veg": false,
        "image": "https://th.bing.com/th/id/OIP.4Wkhkwvikc5ndjfsch139QHaE8?rs=1&pid=ImgDetMain"
    },
    {
        "id": 2,
        "name": "Chutneys",
        "rating": 4.3,
        "cuisine": ["South Indian", "Vegetarian"],
        "area": "Banjara Hills",
        "pure_veg": true,
        "image": "https://bigseventravel.com/wp-content/uploads/2019/08/Screen-Shot-2020-10-21-at-7.37.07-PM.png"
    },
    {
        "id": 3,
        "name": "Bawarchi",
        "rating": 4.2,
        "cuisine": ["Hyderabadi", "North Indian"],
        "area": "Chikkadpally",
        "pure_veg": false,
        "image": "https://vietnamnomad.com/wp-content/uploads/2023/02/Banh-Mi-A-Guide-to-the-Vietnamese-Sandwich-Vietnamnomad.jpg"
    },
    {
        "id": 4,
        "name": "Ohri's Jiva Imperia",
        "rating": 4.4,
        "cuisine": ["North Indian", "Chinese", "South Indian"],
        "area": "Begumpet",
        "pure_veg": true,
        "image": "https://deih43ym53wif.cloudfront.net/bun-cha-vietnam-food-shutterstock_769738648_a1baaf2235.jpeg"
    },
    {
        "id": 5,
        "name": "Shah Ghouse Cafe",
        "rating": 4.1,
        "cuisine": ["Hyderabadi", "Arabian"],
        "area": "Tolichowki",
        "pure_veg": false,
        "image": "https://foodnerdy.com/blog/wp-content/uploads/2021/05/2-1024x1024.jpg"
    },
    {
        "id": 6,
        "name": "Barbeque Nation",
        "rating": 4.6,
        "cuisine": ["Barbecue", "North Indian", "Continental"],
        "area": "Jubilee Hills",
        "pure_veg": false,
        "image": "https://www.holidify.com/images/cmsuploads/articles/447.jpg"
    },
    {
        "id": 7,
        "name": "Minerva Coffee Shop",
        "rating": 4.0,
        "cuisine": ["South Indian", "Chinese", "Fast Food"],
        "area": "Himayatnagar",
        "pure_veg": true,
        "image": "https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2019/01/vegetarian-bowl.png"
    },
    {
        "id": 8,
        "name": "Almond House",
        "rating": 4.7,
        "cuisine": ["Sweets", "Bakery"],
        "area": "Kukatpally",
        "pure_veg": true,
        "image": "https://th.bing.com/th/id/OIP.qcGu4nx1n-BgdM_tQV8w2wHaE8?rs=1&pid=ImgDetMain"
    },
    {
        "id": 9,
        "name": "Rayalaseema Ruchulu",
        "rating": 4.2,
        "cuisine": ["Andhra", "South Indian"],
        "area": "Ameerpet",
        "pure_veg": false,
        "image": "https://th.bing.com/th/id/OIP.BJcN-bbY-_boOJmrw2KTwAHaEK?rs=1&pid=ImgDetMain"
    },
    {
        "id": 10,
        "name": "Pista House",
        "rating": 4.3,
        "cuisine": ["Hyderabadi", "Bakery"],
        "area": "Charminar",
        "pure_veg": false,
        "image": "https://img.freepik.com/premium-photo/top-view-indian-traditional-dishes-appetizers-chicken-curry-pilaf-naan-bread-samosas-paneer-chutney-rustic-background-table-with-choice-food-indian-cuisine-dinner-buffet_92134-1253.jpg"
    }
];

const RestrauntCardComponent = ({ resData }) => {
    return (
        <div className="res-card">
            <img
                alt="res-image"
                className="res-image"
                src={resData.image}
            />
            <h3 id="res-name">{resData.name}</h3>
            <h4>{resData.cuisine.join(", ")}</h4>
            <h4>{resData.rating} Stars</h4>
            <h4>{resData.pure_veg ? "Pure Veg" : "Non-Veg"}</h4>
            <h4>{resData.area}</h4>
        </div>
    );
};

const BodyComponent = () => {
    return (<div className="body">
        <div className="restraunt-Container">
        {resList.map((resObj) => (
    <RestrauntCardComponent key={resObj.id} resData={resObj} />
))}

        </div>
    </div>)
};
const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
        </div>
    )
}
rootElement.render(<AppLayout />);




