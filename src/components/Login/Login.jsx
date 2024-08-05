//Login.jsx
import React from "react";
import {
  TitleContainer,
  InputsContainer,
  MainButton,
  EyeImage,
} from "./Login.styled";
import Modal from "../Modal/Modal";
import eyeoff from "../../assets/svg/eye-off.svg";

const Login = ({ closeMenu }) => {
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
        <TitleContainer>
          <h2>Log In</h2>
          <p>
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
        </TitleContainer>
        <InputsContainer>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <EyeImage src={eyeoff} alt="eye-off" />
        </InputsContainer>
        <MainButton>Log In</MainButton>
      </Modal>
    </>
  );
};

export default Login;
