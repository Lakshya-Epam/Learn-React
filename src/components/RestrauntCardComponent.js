 const RestrauntCardComponent = ({ resData }) => {
    return (
        <div className="res-card">
            <img
                alt="res-image"
                className="res-image"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    resData.cloudinaryImageId
                }
            />
            <h3 id="res-name">{resData.name}</h3>
            <h4>{resData.cuisines?.join(", ") || "No cuisines listed"}</h4>
            <h4>{resData.avgRating} Stars</h4>
            {resData.veg !== undefined && (
                <h4>{resData.veg ? "Pure Veg" : "Non-Veg"}</h4>
            )}
            <h4>{resData.areaName}</h4>
        </div>
    );
};
 
export default RestrauntCardComponent;
 
 