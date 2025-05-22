import { FaHeart, FaRegHeart } from "react-icons/fa";

import s from "./HeartComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/heart/heartSlice";

const HeartComponent = ({ carId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.heart.favorites);
  const isActive = favorites.includes(carId);

  const handleClick = () => {
    dispatch(toggleFavorite(carId));
  };
  return (
    <div>
      {isActive ? (
        <FaHeart
          onClick={handleClick}
          className={`${s.carCardIcon} ${s.activeIcon}`}
        />
      ) : (
        <FaRegHeart onClick={handleClick} className={s.carCardIcon} />
      )}
    </div>
  );
};

export default HeartComponent;
