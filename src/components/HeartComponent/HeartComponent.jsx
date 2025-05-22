import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useState } from "react";
import s from "./HeartComponent.module.css";

const HeartComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
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
