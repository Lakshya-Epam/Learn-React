
const RestrauntCardComponent = ({ resData }) => {
    return (
        <div className="res-card">
            <img
                alt="res-image"
                className="res-image"
                src={resData.image}
            />
            <h3 id="res-name">{resData.name}</h3>
            <h5>{resData.cuisine.join(", ")}</h5>
            <h5>{resData.rating} Stars</h5>
            <h5>{resData.pure_veg ? "Pure Veg" : "Non-Veg"}</h5>
            <h5>{resData.area}</h5>
        </div>
    );
};
 export default RestrauntCardComponent ;