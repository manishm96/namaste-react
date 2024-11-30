import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../utils/utils";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(`${RESTAURANT_MENU_URL}${id}`);

    const data = await response.json();

    console.log("restaurantData", data);
    setRestaurantData(data);
  };

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, costForTwoMessage } =
    restaurantData?.data?.cards[2]?.card?.card?.info;

  const cards =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  console.log("cards", cards);

  return (
    <div className="restaurant-menu">
      <h2>{name}</h2>
      <h4>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <h3>{avgRating} stars</h3>
      <ul>
        {cards.map((card) => (
          <li>
            <h4>
              {card?.card?.info?.name} - Rs.
              {card?.card?.info?.defaultPrice
                ? card?.card?.info?.defaultPrice / 100
                : card?.card?.info?.price / 100}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
