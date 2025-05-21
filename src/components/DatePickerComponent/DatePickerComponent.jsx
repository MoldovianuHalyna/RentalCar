import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatepickerComponent = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <DatePicker
      selected={field.value}
      onChange={(val) => setFieldValue(name, val)}
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
    />
  );
};

export default DatepickerComponent;
