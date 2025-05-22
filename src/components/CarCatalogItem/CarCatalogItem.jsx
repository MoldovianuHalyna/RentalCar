import HeartComponent from "../HeartComponent/HeartComponent";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import s from "./CarCatalogItem.module.css";
import { TbCurrencyDollar } from "react-icons/tb";

const CarCatalogItem = ({ car }) => {
  const {
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
  } = car;

  const addres = address;
  const addressParts = addres.split(",");
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();

  return (
    <div className={s.carCardItem}>
      <HeartComponent carId={id} />
      <img className={s.carCardImage} src={img} alt={`${brand} ${model}`} />
      <div className={s.carCardTextWrapper1}>
        <p>
          {brand}
          <span>{model}</span>,{year}
        </p>
        <div className={s.iconwrapper}>
          <TbCurrencyDollar />
          {rentalPrice}
        </div>
      </div>
      <div className={s.carCardTextWrapper}>
        <p>{city}</p>
        <p>{country}</p>
        <p>{rentalCompany}</p>
      </div>
      <div className={s.carCardTextWrapper}>
        <p>{type}</p>
        <p>{mileage}km</p>
      </div>
      <ReadMoreBtn id={id} />
    </div>
  );
};

export default CarCatalogItem;
