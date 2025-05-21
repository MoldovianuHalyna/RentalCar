import s from "./CarCatalogItem.module.css";

const CarCatalogItem = ({
  src,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  return (
    <div className={s.carCardItem}>
      <img className={s.carCardImage} src={src} alt={`${brand} ${model}`} />
      <div className={s.carCardTextWrapper}>
        <p>
          {brand}
          {model},{year}
        </p>
        <p>{rentalPrice}</p>
      </div>
      <div>
        <p>{address}</p>

        <p>{rentalCompany}</p>
      </div>
      <div>
        <p>{type}</p>
        <p>{mileage}</p>
      </div>
    </div>
  );
};

export default CarCatalogItem;
