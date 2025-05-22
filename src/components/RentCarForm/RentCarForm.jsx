import { Field, Form, Formik } from "formik";
import DatepickerComponent from "../DatePickerComponent/DatePickerComponent.jsx";
import s from "./RentCarForm.module.css";
import SendBtn from "../SendBtn/SendBtn.jsx";

const RentCarForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };
  return (
    <div className={s.commonFormWrapper}>
      <div className={s.commonFormText}>
        <p className={s.mainHeader}>Book your car now</p>
        <p className={s.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik initialValues={initialValues}>
        <Form className={s.formWrapper}>
          <Field
            className={s.formField}
            name="name"
            placeholder="Name*"
            required
          />
          <Field
            className={s.formField}
            name="email"
            placeholder="Email*"
            required
          />
          <DatepickerComponent name="bookingDate" />
          <Field className={s.formField} name="comment" placeholder="Comment" />
          <SendBtn />
        </Form>
      </Formik>
    </div>
  );
};

export default RentCarForm;
