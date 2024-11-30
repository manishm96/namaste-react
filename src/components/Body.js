import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  [searchText, setSearchText] = useState("");

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
    setFilteredRestaurants(restaurants);
  };

  const filterRestaurants = () => {
    const updatedRestaurants = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    console.log("filteredRestaurants", filteredRestaurants);
    setFilteredRestaurants(updatedRestaurants);
  };

  const searchRestaurants = () => {
    console.log("searchText", searchText);
    const updatedRestaurants = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(updatedRestaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={searchRestaurants}>
          Search
        </button>
        <button className="filter-btn" onClick={filterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => {
          return (
            <Link key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
