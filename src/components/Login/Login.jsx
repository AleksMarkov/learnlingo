//Login.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../schemas/loginSchema.js";
import { loginUser } from "../../api/users.js";
import {
  TitleContainer,
  InputsContainer,
  MainButton,
  EyeImage,
  ErrorMessage,
  AlertMessage,
} from "./Login.styled";
import Modal from "../Modal/Modal";
import eyeoff from "../../assets/svg/eye-off.svg";
import eyeon from "../../assets/svg/eye-on.svg";

const Login = ({ closeMenu }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      await loginUser(data);
      setAlertMessage("User logged in successfully");
      setTimeout(() => {
        setAlertMessage("");
        closeMenu();
      }, 2000);
    } catch (error) {
      setAlertMessage("Error logging in: " + error.message);
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Modal
        width={566}
        height={506}
        onClose={() => closeMenu(false)}
        top="50%"
        left="50%"
        border="none"
        background="rgba(0, 0, 0, 0.5)"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TitleContainer>
            <h2>Log In</h2>
            <p>
              Welcome back! Please enter your credentials to access your account
              and continue your search for a teacher.
            </p>
          </TitleContainer>
          <InputsContainer>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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
          </InputsContainer>
          <MainButton type="submit">Log In</MainButton>
        </form>
      </Modal>
      {alertMessage && <AlertMessage>{alertMessage}</AlertMessage>}
    </>
  );
};

export default Login;
