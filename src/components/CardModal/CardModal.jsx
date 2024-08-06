//CardModal.jsx
import React from "react";
import {
  ModalExp,
  ModalCard,
  ModalCardBlock,
  ModalInfoBlock,
  ModalCardHeader,
  ModalTeacherName,
  ModalBlockHeader,
  ModalCardInfo,
  ModalCardBody,
  ModalSpeaks,
  ModalLesson,
  ModalCardFooter,
  ModalAvatar,
  ModalAvatarImage,
  ModalGreenDot,
  ModalLevelTag,
} from "./CardModal.styled";
import HeartOff from "../../assets/svg/heartOff.svg";
import Star from "../../assets/svg/Star.svg";
import Book from "../../assets/svg/book-open-01.svg";
import GreenDotImage from "../../assets/svg/Group 82.svg";
import Modal from "../Modal/Modal";
import Review from "../Review/Review";

const CardModal = ({ teacher, onClose, selectedLevel }) => {
  return (
    <Modal
      width={1240}
      height={692}
      onClose={onClose}
      top="50%"
      left="50%"
      border="none"
      background="rgba(0, 0, 0, 0.5)"
    >
      <ModalCard>
        <ModalAvatar>
          <ModalAvatarImage src={teacher.avatar_url} />
          <ModalGreenDot src={GreenDotImage} alt="green dot" />
        </ModalAvatar>
        <ModalCardBlock>
          <ModalInfoBlock>
            <ModalCardInfo>
              <ModalCardHeader>
                <ModalTeacherName>
                  {teacher.name} {teacher.surname}
                </ModalTeacherName>
                <ModalBlockHeader>
                  <img src={Book} width="16" height="16" alt="open book" />
                  <span>Lessons online</span>
                  <spanDiv> | </spanDiv>
                  <span>Lessons done:</span> {teacher.lessons_done}
                  <spanDiv> | </spanDiv>
                  <span>Rating:</span>{" "}
                  <img src={Star} width="16" height="16" alt="star" />
                  {teacher.rating}
                  <spanDiv> | </spanDiv>
                  <span>Price / 1 hour: </span>{" "}
                  <spanPrice>{teacher.price_per_hour}$</spanPrice>
                  <img src={HeartOff} width="26" height="26" alt="heart Off" />
                </ModalBlockHeader>
              </ModalCardHeader>
              <ModalCardBody>
                <ModalSpeaks>
                  <span>Languages Speaks:</span>
                  <div className="underline-text">
                    {Array.isArray(teacher.languages)
                      ? teacher.languages.join(", ")
                      : teacher.languages}
                  </div>
                </ModalSpeaks>
                <ModalLesson>
                  <span>Lesson Info:</span> {teacher.lesson_info}
                </ModalLesson>
                <ModalLesson>
                  <span>Conditions:</span> {teacher.conditions}
                </ModalLesson>
              </ModalCardBody>
            </ModalCardInfo>
            <ModalExp>{teacher.experience}</ModalExp>
          </ModalInfoBlock>
          <Review reviews={teacher.reviews} />
          <ModalCardFooter>
            {teacher.levels.map((level) => (
              <ModalLevelTag key={level} highlighted={level === selectedLevel}>
                {level}
              </ModalLevelTag>
            ))}
          </ModalCardFooter>
        </ModalCardBlock>
      </ModalCard>
    </Modal>
  );
};

export default CardModal;
