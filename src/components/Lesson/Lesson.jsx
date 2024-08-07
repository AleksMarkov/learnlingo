//Lesson.jsx
import React, { useState } from "react";
import {
  TitleContainer,
  InputContainer,
  MainButton,
  Avatar,
  AvatarImage,
  YourTeacher,
  RadioTitle,
  RadioBlock,
  RadioLabel,
  RadioInput,
  RadioWrapper,
  RadioColumn,
} from "./Lesson.styled";
import Modal from "../Modal/Modal";

const Lesson = ({ teacher, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("Career and business");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const leftColumnOptions = [
    "Career and business",
    "Lesson for kids",
    "Living abroad",
  ];
  const rightColumnOptions = [
    "Exams and coursework",
    "Culture, travel or hobby",
  ];

  return (
    <>
      <Modal
        width={600}
        height={882}
        onClose={onClose}
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
        <Avatar>
          <AvatarImage src={teacher.avatar_url} />
          <YourTeacher>
            <span>Your teacher </span>
            {teacher.name} {teacher.surname}
          </YourTeacher>
        </Avatar>
        <RadioTitle>What is your main reason for learning English?</RadioTitle>
        <RadioBlock>
          <RadioColumn>
            {leftColumnOptions.map((option) => (
              <RadioWrapper key={option}>
                <RadioInput
                  type="radio"
                  name="reason"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <RadioLabel>{option}</RadioLabel>
              </RadioWrapper>
            ))}
          </RadioColumn>
          <RadioColumn>
            {rightColumnOptions.map((option) => (
              <RadioWrapper key={option}>
                <RadioInput
                  type="radio"
                  name="reason"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                />
                <RadioLabel>{option}</RadioLabel>
              </RadioWrapper>
            ))}
          </RadioColumn>
        </RadioBlock>
        <InputContainer>
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Phone number" type="password" />
        </InputContainer>
        <MainButton onClick={onClose}>Book</MainButton>
      </Modal>
    </>
  );
};

export default Lesson;
