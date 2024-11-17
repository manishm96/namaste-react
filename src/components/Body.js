import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Get restaurants from mock data
  let { restaurants } = mockData?.card?.card?.gridElements?.infoWithStyle;
  [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  const filterRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    console.log("filteredRestaurants", filteredRestaurants);
    setListOfRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      <div className="search">
        {/*<h3>search</h3>*/}
        <button className="filter-btn" onClick={filterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => {
          return <RestaurantCard key={res?.info?.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
