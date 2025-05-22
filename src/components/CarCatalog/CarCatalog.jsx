import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectCars } from "../../redux/api/selectors";
import { fetchCars } from "../../redux/api/operations";
import CarCatalogItem from "../CarCatalogItem/CarCatalogItem";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import s from "./CarCatalog.module.css";

const CarCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector((state) => state.cars.isLoading);
  const isError = useSelector((state) => state.cars.isError);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchCars({ page: 1, limit: 8 })).then((res) => {
        setHasMore(res.payload.totalPages > 1);
      });
    }
  }, [dispatch, page]);

  const handleLoadMoreBtn = () => {
    const nextPage = page + 1;
    dispatch(fetchCars({ page: nextPage, limit: 8 })).then((res) => {
      if (res.payload.cars.length > 0) {
        setPage(nextPage);
        setHasMore(nextPage < res.payload.totalPages);
      }
    });
  };

  if (isLoading && page === 1) return <Loader />;
  if (isError) return <h1>Something went wrong. Please try again later.</h1>;

  return (
    <div className={s.catalogWrapper}>
      <ul className={s.carCardList}>
        {cars.map((car) => (
          <li key={car.id}>
            <CarCatalogItem car={car} />
          </li>
        ))}
      </ul>

      {hasMore && !isLoading && <LoadMoreBtn onClick={handleLoadMoreBtn} />}
    </div>
  );
};

export default CarCatalog;
