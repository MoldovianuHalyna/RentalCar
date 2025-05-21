import { useNavigate } from "react-router-dom";
import s from "./ViewCatalogBtn.module.css";

const ViewCatalogBtn = () => {
  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate("/catalog");
  };

  return (
    <button type="button" className={s.viewCatalogBtn} onClick={onBtnClick}>
      View catalog
    </button>
  );
};

export default ViewCatalogBtn;
