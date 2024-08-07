// lessonSchema.js
import * as yup from "yup";

const lessonSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(32, "Full name cannot be longer than 32 characters")
    .required("Full name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot be longer than 15 digits")
    .required("Phone number is required"),
});

export default lessonSchema;
