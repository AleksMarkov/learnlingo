import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeFavourite } from "../../redux/favouritesSlice";
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
  BookButton,
  SpanText,
  SpanDiv,
  SpanPrice,
  FavoriteIcon,
} from "./FavoritesCardModal.styled";
import HeartOn from "../../assets/svg/heartOn.svg";
import Star from "../../assets/svg/Star.svg";
import Book from "../../assets/svg/book-open-01.svg";
import GreenDotImage from "../../assets/svg/Group 82.svg";
import Modal from "../Modal/Modal";
import Review from "../Review/Review";
import Lesson from "../BookLesson/BookLesson";
import "react-toastify/dist/ReactToastify.css";

const FavoritesCardModal = ({ teacher, onClose, selectedLevel }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isBookShown, setIsBookShown] = useState(false);

  const toggleFavorite = (teacher) => {
    if (!isAuthenticated) {
      toast.error("This functionality is available only to authorized users.");
      return;
    }
    dispatch(removeFavourite(teacher));
  };

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
                  <SpanText>Lessons online</SpanText>
                  <SpanDiv> | </SpanDiv>
                  <SpanText>Lessons done:</SpanText> {teacher.lessons_done}
                  <SpanDiv> | </SpanDiv>
                  <SpanText>Rating:</SpanText>{" "}
                  <img src={Star} width="16" height="16" alt="star" />
                  {teacher.rating}
                  <SpanDiv> | </SpanDiv>
                  <SpanText>Price / 1 hour: </SpanText>{" "}
                  <SpanPrice>{teacher.price_per_hour}$</SpanPrice>
                  <FavoriteIcon
                    src={HeartOn}
                    width="26"
                    height="26"
                    alt="heart"
                    onClick={() => toggleFavorite(teacher)}
                  />
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
          <BookButton onClick={() => setIsBookShown(true)}>
            Book trial lesson
          </BookButton>
        </ModalCardBlock>
      </ModalCard>
      {isBookShown && (
        <Lesson
          teacher={teacher}
          onClose={onClose}
          selectedLevel={selectedLevel}
        />
      )}
    </Modal>
  );
};

export default FavoritesCardModal;
