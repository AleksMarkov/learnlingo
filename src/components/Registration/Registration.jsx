//Registration.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registrationSchema from "../../schemas/registrationSchema.js";
import { registerUser } from "../../api/users.js";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import {
  TitleContainer,
  InputContainer,
  EyeImage,
  MainButton,
  ErrorMessage,
  AlertMessage,
} from "./Registration.styled";
import Modal from "../Modal/Modal";
import eyeoff from "../../assets/svg/eye-off.svg";
import eyeon from "../../assets/svg/eye-on.svg";

const Registration = ({ closeMenu }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { userCredential, token } = await registerUser(data);
      localStorage.setItem("token", token);

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      };

      dispatch(login(user));
      setAlertMessage("User registered successfully");
      setTimeout(() => {
        setAlertMessage("");
        closeMenu();
      }, 5000);
    } catch (error) {
      setAlertMessage("Error registering user: " + error.message);
      setTimeout(() => {
        setAlertMessage("");
      }, 5000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Modal
        width={566}
        height={600}
        onClose={() => closeMenu(false)}
        top="50%"
        left="50%"
        border="none"
        background="rgba(0, 0, 0, 0.5)"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TitleContainer>
            <h2>Registration</h2>
            <p>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information
            </p>
          </TitleContainer>
          <InputContainer>
            <input placeholder="Name" {...register("name")} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            <input placeholder="Email" {...register("email")} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
            <EyeImage
              src={showPassword ? eyeon : eyeoff}
              alt="toggle password visibility"
              onClick={togglePasswordVisibility}
            />
          </InputContainer>
          <MainButton type="submit">Sign Up</MainButton>
        </form>
      </Modal>
      {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
    </>
  );
};

export default Registration;
