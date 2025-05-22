import s from "./OneCarDescription.module.css";
import { TbCurrencyDollar } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import RentCarForm from "../RentCarForm/RentCarForm";
import { IoLocationOutline } from "react-icons/io5";

const OneCarDescription = ({ car }) => {
  const addres = car.address;
  const addressParts = addres.split(",");
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();

  return (
    <div className={s.mainContainer}>
      <div className={s.imageFormContainer}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={s.imageDescription}
        />
        <RentCarForm />
      </div>
      <div className={s.commonInformation}>
        <div className={s.containerInformation}>
          <h2>
            {car.brand}
            <span>{car.model}</span>,
            <span className={s.idSpan}>Id:{car.id.slice(0, 4)}</span>
          </h2>

          <p className={s.adressMilleage}>
            <span>
              <IoLocationOutline className={s.locationIcon} />
              {city} {country}
            </span>
            Milleage: {car.mileage}Km
          </p>
          <p className={s.currencyContainer}>
            <TbCurrencyDollar />
            {car.rentalPrice}
          </p>
          <p className={s.currencyDescription}>{car.description}</p>
        </div>
        <div className={s.containerInformation}>
          <h2>Rental Conditions: </h2>
          <ul>
            {car.rentalConditions.map((condition, index) => {
              return (
                <li key={index}>
                  <FaRegCheckCircle />
                  {condition}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.containerInformation}>
          <h2>Car specifications</h2>
          <ul>
            <li>
              <BsCalendar2Week />
              Year:{car.year}
            </li>
            <li>
              <FaCar />
              Type:{car.type}
            </li>

            <li>
              <BsFuelPump />
              Consumption:{car.fuelConsumption}
            </li>

            <li>
              <GoGear />
              Engine Size:{car.engineSize}
            </li>
          </ul>
        </div>
        <div className={s.containerInformation}>
          <h2>Accessories and functionalities:</h2>
          <ul>
            {[...car.accessories, ...car.functionalities].map((item, index) => {
              return (
                <li key={index}>
                  <FaRegCheckCircle />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OneCarDescription;
