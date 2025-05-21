import { NavLink } from "react-router-dom";
import s from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <NavLink to="/" className={s.logoLink}>
        <span className={s.logoRental}>Rental</span>
        <span className={s.logoCar}>Car</span>
      </NavLink>
    </div>
  );
};

export default Logo;
