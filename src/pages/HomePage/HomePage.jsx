import RentCarForm from "../../components/RentCarForm/RentCarForm";
import ViewCatalogBtn from "../../components/ViewCatalogBtn/ViewCatalogBtn";
import s from "./HomePage.module.css";

const Home = () => {
  return (
    <>
      <div className={s.homePageContainer}>
        <div className={s.homepagetextWrapper}>
          <h1>Find your perfect rental car</h1>
          <p>Reliable and budget-friendly rentals for any journey</p>
        </div>
        <ViewCatalogBtn />
      </div>
    </>
  );
};

export default Home;
