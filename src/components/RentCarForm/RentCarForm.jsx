import { Field, Form, Formik } from "formik";
import DatepickerComponent from "../DatePickerComponent/DatePickerComponent.jsx";

const RentCarForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };
  return (
    <div>
      <div>
        <p>Book your car now</p>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik initialValues={initialValues}>
        <Form>
          <Field name="name" placeholder="Name*" />
          <Field name="email" placeholder="Email*" />
          <DatepickerComponent name="bookingDate" />
          <Field name="comment" placeholder="Comment" />
        </Form>
      </Formik>
    </div>
  );
};

export default RentCarForm;
