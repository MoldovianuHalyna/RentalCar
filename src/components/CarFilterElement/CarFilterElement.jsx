import { Field, Form, Formik } from "formik";
import Select from "react-select";

import s from "./CarFilterElement.module.css";
import SubmitBtn from "../SubmitBtn/SubmitBtn";
import { customStyles } from "../../helpers/customStylesSelect";
import {
  carBrandOptions,
  carPriceOptions,
} from "../../helpers/selectorOptions";

const CarFilterElement = () => {
  const initialValues = {
    carBrand: "",
    priceHour: "",
    carMilleage: {
      from: "",
      to: "",
    },
  };
  const handleFormSubmit = (values) => {
    console.log("Submitted values:", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      <Form className={s.formWrapper}>
        <div className={s.formElement}>
          <label className={s.formLabel} htmlFor="carBrand">
            Car brand
          </label>
          <Field name="carBrand">
            {({ field, form }) => {
              const options = carBrandOptions;

              return (
                <Select
                  styles={customStyles}
                  options={options}
                  value={options.find((option) => option.value === field.value)}
                  onChange={(option) =>
                    form.setFieldValue("carBrand", option.value)
                  }
                  placeholder="Choose a brand"
                />
              );
            }}
          </Field>
        </div>
        <div className={s.formElement}>
          <label className={s.formLabel} htmlFor="priceHour">
            Price/1 hour{" "}
          </label>
          <Field name="priceHour">
            {({ field, form }) => {
              const options = carPriceOptions;
              return (
                <Select
                  styles={customStyles}
                  options={options}
                  value={options.find((option) => option.value === field.value)}
                  onChange={(option) =>
                    form.setFieldValue("carBrand", option.value)
                  }
                  placeholder="Choose a price"
                />
              );
            }}
          </Field>
        </div>
        <div className={s.formElement}>
          <label className={s.formLabel} htmlFor="carMilleage">
            Сar mileage / km
          </label>
          <div className={s.milleageContainer}>
            <Field
              name="carMilleage.from"
              placeholder="From"
              className={s.formFieldMilleage}
            />
            <Field
              name="carMilleage.to"
              placeholder="To"
              className={s.formFieldMilleage}
            />
          </div>
        </div>

        <SubmitBtn />
      </Form>
    </Formik>
  );
};

export default CarFilterElement;
