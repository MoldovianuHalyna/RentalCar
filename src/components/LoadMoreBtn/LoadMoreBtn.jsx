import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.loadMoreBtn} type="button">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
