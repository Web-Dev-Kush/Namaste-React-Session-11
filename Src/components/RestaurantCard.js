import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="card">
      <img className="img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-2xl">{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h4 className="font-bold">{user.name} - {user.email}</h4>
    </div>
  );
};

export default RestaurantCard;
