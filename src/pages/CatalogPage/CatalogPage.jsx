import CarCatalog from "../../components/CarCatalog/CarCatalog";
import CarFilterElement from "../../components/CarFilterElement/CarFilterElement";

const Catalog = () => {
  return (
    <div>
      <CarFilterElement />
      <CarCatalog />
    </div>
  );
};

export default Catalog;
