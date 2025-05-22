import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./DatepickerComponent.module.css";
import "./reactDatepickerOverrides.css";

const DatepickerComponent = ({ name, minDate }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <DatePicker
      selected={field.value}
      onChange={(val) => setFieldValue(name, val)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking date"
      className={s.datePicker}
      minDate={minDate}
    />
  );
};

export default DatepickerComponent;
