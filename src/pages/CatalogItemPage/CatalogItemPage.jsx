import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectSelectedCar } from "../../redux/api/selectors";
import OneCarDescription from "../../components/OneCarDescription/OneCarDescription";
import { useEffect } from "react";
import { fetchOneCar } from "../../redux/api/operations";

const CatalogItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const selectedCar = useSelector(selectSelectedCar);

  const carFromStore = cars.find((car) => car.id === id);
  const car = carFromStore || selectedCar;

  useEffect(() => {
    if (!carFromStore) {
      dispatch(fetchOneCar(id));
    }
  }, [id, carFromStore, dispatch]);

  if (!car) return <div>Loading or Car not found...</div>;

  return <OneCarDescription car={car} />;
};

export default CatalogItem;
