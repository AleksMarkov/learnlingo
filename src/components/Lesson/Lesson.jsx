import React from "react";
import { TitleContainer, InputContainer, MainButton } from "./Lesson.styled";
import Modal from "../Modal/Modal";

const Lesson = ({ closeMenu }) => {
  return (
    <>
      <Modal
        width={600}
        height={972}
        onClose={() => closeMenu(false)}
        top="50%"
        left="50%"
        border="none"
        background="rgba(0, 0, 0, 0.5)"
      >
        <TitleContainer>
          <h2>Book trial lesson</h2>
          <p>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
        </TitleContainer>
        <InputContainer>
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Phone number" type="password" />
        </InputContainer>
        <MainButton>Book</MainButton>
      </Modal>
    </>
  );
};

export default Lesson;
