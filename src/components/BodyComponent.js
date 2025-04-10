import RestrauntCardComponent from "./RestrauntCardComponent";
import resList from "../../utils/DummyData"; 
import { useState } from "react";

const BodyComponent = () => {

const [restrauntList,setListOfRestraunt]=useState(resList);

    return (<div className="body">
        <div className="filter">
           < button className="filterbtn" onClick={()=>{
            const filteredList=restrauntList.filter(
                (res)=>res.rating >=4.5
                );
                setListOfRestraunt(filteredList);
           }}>
            Top Rated Restaurants
           </button>
        </div>
        <div className="restraunt-Container">
        {restrauntList.map((resObj) => (
    <RestrauntCardComponent key={resObj.id} resData={resObj} />
))}

        </div>
    </div>)
};
export default BodyComponent ;