import RestrauntCardComponent from "./RestrauntCardComponent";
// import resList from "../../utils/DummyData";
import { useState, useEffect } from "../../node_modules/react";
import ShimmerComponent from "./ShimmerComponent";
const BodyComponent = () => {
  const [restrauntList, setListOfRestraunt] = useState([]);
  const [searchText , setSearchText]=useState("");

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.allorigins.win/raw?url=" +
      encodeURIComponent(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      )
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);

    setListOfRestraunt(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  };

  //Condtional Rendering   
  return restrauntList.length === 0 ? <ShimmerComponent /> : (<div className="body">
    <div className="filter">
    <div className="searchBar">
        <input className="searchBox" type="text" placeholder="what do you looking for?" value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        ></input>
        <button onClick={()=>{
        const filteredList= restrauntList.filter((res) => {
          return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setListOfRestraunt(filteredList);
        


        }}
        ><b>Search</b></button>
      </div>
      <button className="filter-btn" onClick={() => {
        const filtered = restrauntList.filter(
          (res) => res.info.avgRating > 4.5
        );
        setListOfRestraunt(filtered)
      }}>
        Top Rated Restaurants
      </button>
    </div>
    <div className="restraunt-Container">
      {restrauntList.map((resObj) => {
        const info = resObj?.info || resObj; // handles both API and local data
        return (
          <RestrauntCardComponent key={info.id} resData={info} />
        );
      })}


    </div>
  </div>
  )
};

export default BodyComponent;
