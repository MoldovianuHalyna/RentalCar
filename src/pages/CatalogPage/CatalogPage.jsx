import { useState } from "react";
import CarCatalog from "../../components/CarCatalog/CarCatalog";
import CarFilterElement from "../../components/CarFilterElement/CarFilterElement";

const Catalog = () => {
  const [filters, setFilters] = useState(null);

  const handleFilterSubmit = (values) => {
    const formattedFilters = {
      brand: values.carBrand || undefined,
      rentalPrice: values.priceHour || undefined,
      minMileage: values.carMilleage?.from || undefined,
      maxMileage: values.carMilleage?.to || undefined,
    };
    setFilters(formattedFilters);
  };

  return (
    <div>
      <CarFilterElement onSubmit={handleFilterSubmit} />
      <CarCatalog filters={filters} />
    </div>
  );
};

export default Catalog;
