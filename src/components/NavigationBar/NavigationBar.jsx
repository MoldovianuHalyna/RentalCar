import { NavLink } from "react-router-dom";
import s from "./NavigationBar.module.css";
import Logo from "../Logo/Logo";

const NavigationBar = () => {
  const addActive = ({ isActive }) =>
    isActive ? s.activeLink : s.inactiveLink;
  return (
    <div className={s.navBarContainer}>
      <Logo />
      <div className={s.navLinksWrapper}>
        <NavLink className={addActive} to="/">
          Home
        </NavLink>
        <NavLink className={addActive} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationBar;
