import { useNavigate } from "react-router-dom";
import s from "./ReadMoreBtn.module.css";

const ReadMoreBtn = ({ id }) => {
  const navigate = useNavigate();

  const handlButtonClick = () => {
    navigate(`/catalog/${id}`);
  };
  return (
    <button className={s.readMoreBtn} type="button" onClick={handlButtonClick}>
      Read More
    </button>
  );
};

export default ReadMoreBtn;
