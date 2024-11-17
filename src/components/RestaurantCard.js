import { CDN_URL } from "../utils/utils";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  const { name, avgRating, costForTwo, cuisines, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <p>{costForTwo}</p>
      <p>{avgRating} stars</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
