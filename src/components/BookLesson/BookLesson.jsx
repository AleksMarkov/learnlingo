//BookLesson.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import lessonSchema from "../../schemas/lessonSchema.js";
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
  TemporaryMessageContainer,
  TemporaryMessage,
  EnlargedAvatar,
  EnlargedAvatarImage,
  EnlargedYourTeacher,
  ErrorMessage,
} from "./BookLesson.styled.jsx";
import Modal from "../Modal/Modal.jsx";

const BookLesson = ({ teacher, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("Career and business");
  const [showMessage, setShowMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(lessonSchema),
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onSubmit = (data) => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      onClose();
    }, 3000);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TitleContainer>
            <h2>Book trial lesson</h2>
            <p>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </p>
          </TitleContainer>
          <Avatar>
            <AvatarImage src={teacher.avatar_url} />
            <YourTeacher>
              <span>Your teacher </span>
              {teacher.name} {teacher.surname}
            </YourTeacher>
          </Avatar>
          <RadioTitle>
            What is your main reason for learning English?
          </RadioTitle>
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
            <input placeholder="Full name" {...register("fullName")} />
            {errors.fullName && (
              <ErrorMessage>{errors.fullName.message}</ErrorMessage>
            )}
            <input placeholder="Email" {...register("email")} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
            <input
              placeholder="Phone number"
              type="text"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (
              <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
            )}
          </InputContainer>
          <MainButton type="submit">Book</MainButton>
        </form>
        {showMessage && (
          <TemporaryMessageContainer>
            <TemporaryMessage>
              Your request for a trial lesson has been sent to your teacher:
            </TemporaryMessage>
            <EnlargedAvatar>
              <EnlargedAvatarImage src={teacher.avatar_url} />
              <EnlargedYourTeacher>
                {teacher.name} {teacher.surname}
              </EnlargedYourTeacher>
            </EnlargedAvatar>
          </TemporaryMessageContainer>
        )}
      </Modal>
    </>
  );
};

export default BookLesson;
