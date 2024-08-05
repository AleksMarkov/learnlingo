import React from "react";
import {
  TitleContainer,
  InputContainer,
  EyeImage,
  MainButton,
} from "./Registration.styled";
import Modal from "../Modal/Modal";
import eyeoff from "../../assets/svg/eye-off.svg";

const Registration = ({ closeMenu }) => {
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
        <TitleContainer>
          <h2>Registration</h2>
          <p>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
        </TitleContainer>
        <InputContainer>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <EyeImage src={eyeoff} alt="eye-off" />
        </InputContainer>
        <MainButton>Sign Up</MainButton>
      </Modal>
    </>
  );
};

export default Registration;
