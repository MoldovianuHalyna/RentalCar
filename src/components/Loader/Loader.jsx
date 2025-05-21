import s from "./Loader.module.css";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={s.loaderBackdrop}>
      <BounceLoader color="#3471ffc9" />
    </div>
  );
};

export default Loader;
