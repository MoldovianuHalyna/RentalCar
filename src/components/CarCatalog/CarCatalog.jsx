import { useSelector } from "react-redux";
import { selectCars } from "../../redux/api/selectors";
import CarCatalogItem from "../CarCatalogItem/CarCatalogItem";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { fetchCars } from "../../redux/api/operations";
import s from "./CarCatalog.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const CarCatalog = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);

  const isLoading = useSelector((state) => state.cars.isLoading);
  const isError = useSelector((state) => state.cars.isError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMoreBtn = () => {
    console.log("LoadMore");
  };
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  return (
    <div className={s.catalogWrapper}>
      <ul className={s.carCardList}>
        {cars.map(
          ({
            id,
            img,
            brand,
            model,
            year,
            rentalPrice,
            address,
            rentalCompany,
            type,
            mileage,
          }) => (
            <li key={id}>
              <CarCatalogItem
                src={img}
                brand={brand}
                model={model}
                year={year}
                rentalPrice={rentalPrice}
                address={address}
                rentalCompany={rentalCompany}
                type={type}
                mileage={mileage}
                id={id}
              />
            </li>
          )
        )}
      </ul>
      <LoadMoreBtn onClick={handleLoadMoreBtn} />
    </div>
  );
};

export default CarCatalog;
