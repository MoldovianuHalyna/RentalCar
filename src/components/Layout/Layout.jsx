import NavigationBar from "../NavigationBar/NavigationBar";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={s.container}>
      <NavigationBar />
      {children}
    </div>
  );
};

export default Layout;
