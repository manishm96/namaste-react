import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();

    const restaurants =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("restaurants", restaurants);

    setListOfRestaurants(restaurants);
  };

  const filterRestaurants = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    console.log("filteredRestaurants", filteredRestaurants);
    setListOfRestaurants(filteredRestaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

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
