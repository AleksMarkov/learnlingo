//FavoritesPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeFavourite } from "../../redux/favouritesSlice";
import {
  PageContainer,
  CardsContainer,
  Card,
  CardBlock,
  InfoBlock,
  CardHeader,
  TeacherName,
  BlockHeader,
  CardInfo,
  ReadMore,
  CardBody,
  Speaks,
  Lesson,
  CardFooter,
  Avatar,
  AvatarImage,
  GreenDot,
  LevelTag,
  LoadMoreButton,
  FavoriteIcon,
  SpanText,
  SpanDiv,
  SpanPrice,
  ExpandedCardBody,
  ModalLesson,
  ModalExp,
  ModalCardFooter,
  ModalLevelTag,
  BookButton,
} from "./FavoritesPage.styled";
import HeartOn from "../../assets/svg/heartOn.svg";
import Star from "../../assets/svg/Star.svg";
import Book from "../../assets/svg/book-open-01.svg";
import GreenDotImage from "../../assets/svg/Group 82.svg";
import HeaderPage from "../HeaderPage/HeaderPage";
import Filter from "../../components/Filter/Filter";
import Review from "../../components/Review/Review";
import BookLesson from "../../components/BookLesson/BookLesson";
import "react-toastify/dist/ReactToastify.css";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favouriteTeachers = useSelector(
    (state) => state.favourites.favouriteTeachers
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isBookShown, setIsBookShown] = useState(false);

  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleEnd, setVisibleEnd] = useState(3);
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);

  useEffect(() => {
    const favoriteTeachersArray = Object.values(favouriteTeachers);
    setFilteredTeachers(favoriteTeachersArray);

    const allLanguages = [
      "All",
      ...favoriteTeachersArray
        .flatMap((teacher) => teacher.languages)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort(),
    ];
    setLanguages(allLanguages);

    const allLevels = [
      "All",
      ...favoriteTeachersArray
        .flatMap((teacher) => teacher.levels)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort(),
    ];
    setLevels(allLevels);

    const allPrices = favoriteTeachersArray
      .map((teacher) => teacher.price_per_hour)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => a - b);
    setPrices(allPrices);
  }, [favouriteTeachers]);

  useEffect(() => {
    let filtered = favouriteTeachers;

    if (selectedLanguage && selectedLanguage !== "All") {
      filtered = filtered.filter((teacher) =>
        teacher.languages.includes(selectedLanguage)
      );
    }

    if (selectedLevel && selectedLevel !== "All") {
      filtered = filtered.filter((teacher) =>
        teacher.levels.includes(selectedLevel)
      );
    }

    if (selectedPrice) {
      filtered = filtered.filter(
        (teacher) => teacher.price_per_hour === selectedPrice
      );
    }

    setFilteredTeachers(filtered);
    setVisibleStart(0);
    setVisibleEnd(4);
  }, [selectedLanguage, selectedLevel, selectedPrice, favouriteTeachers]);

  const handleLoadMore = () => {
    if (visibleEnd < filteredTeachers.length) {
      setVisibleEnd(visibleEnd + 4);
    }
  };

  const handleReadMore = (teacherId) => {
    setExpandedTeacherId(teacherId === expandedTeacherId ? null : teacherId);
  };

  const toggleFavorite = (teacher) => {
    if (!isAuthenticated) {
      toast.error("This functionality is available only to authorized users.");
      return;
    }
    dispatch(removeFavourite(teacher));
  };

  return (
    <PageContainer>
      <HeaderPage />
      <Filter
        languages={languages}
        levels={levels}
        prices={prices}
        selectedLanguage={selectedLanguage}
        selectedLevel={selectedLevel}
        selectedPrice={selectedPrice}
        onSelectLanguage={setSelectedLanguage}
        onSelectLevel={setSelectedLevel}
        onSelectPrice={setSelectedPrice}
      />
      {filteredTeachers.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          There are no teachers in the database that meet the search criteria.
        </p>
      ) : (
        <CardsContainer>
          {filteredTeachers.slice(visibleStart, visibleEnd).map((teacher) => (
            <Card key={teacher.id}>
              <Avatar>
                <AvatarImage src={teacher.avatar_url} />
                <GreenDot src={GreenDotImage} alt="green dot" />
              </Avatar>
              <CardBlock>
                <InfoBlock>
                  <CardInfo>
                    <CardHeader>
                      <TeacherName>
                        {teacher.name} {teacher.surname}
                      </TeacherName>
                      <BlockHeader>
                        <img
                          src={Book}
                          width="16"
                          height="16"
                          alt="open book"
                        />
                        <SpanText>Lessons online</SpanText>
                        <SpanDiv> | </SpanDiv>
                        <SpanText>Lessons done:</SpanText>{" "}
                        {teacher.lessons_done}
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
                      </BlockHeader>
                    </CardHeader>
                    <CardBody>
                      <Speaks>
                        <span>Languages Speaks:</span>
                        <div className="underline-text">
                          {Array.isArray(teacher.languages)
                            ? teacher.languages.join(", ")
                            : teacher.languages}
                        </div>
                      </Speaks>
                      <Lesson>
                        <span>Lesson Info:</span> {teacher.lesson_info}
                      </Lesson>
                      {expandedTeacherId === teacher.id && (
                        <ExpandedCardBody>
                          <ModalLesson>
                            <span>Conditions:</span> {teacher.conditions}
                          </ModalLesson>
                          <ModalExp>{teacher.experience}</ModalExp>
                          <Review reviews={teacher.reviews} />
                          <ModalCardFooter>
                            {teacher.levels.map((level) => (
                              <ModalLevelTag
                                key={level}
                                highlighted={level === selectedLevel}
                              >
                                {level}
                              </ModalLevelTag>
                            ))}
                          </ModalCardFooter>
                          <BookButton onClick={() => setIsBookShown(true)}>
                            Book trial lesson
                          </BookButton>
                          {isBookShown && (
                            <BookLesson
                              teacher={teacher}
                              onClose={() => setIsBookShown(false)}
                            />
                          )}
                        </ExpandedCardBody>
                      )}
                    </CardBody>
                  </CardInfo>
                  {expandedTeacherId !== teacher.id && (
                    <CardFooter>
                      {teacher.levels.map((level) => (
                        <LevelTag
                          key={level}
                          highlighted={level === selectedLevel}
                        >
                          {level}
                        </LevelTag>
                      ))}
                    </CardFooter>
                  )}
                  <ReadMore onClick={() => handleReadMore(teacher.id)}>
                    {expandedTeacherId === teacher.id
                      ? "Read less"
                      : "Read more"}
                  </ReadMore>
                </InfoBlock>
              </CardBlock>
            </Card>
          ))}
        </CardsContainer>
      )}
      {visibleEnd < filteredTeachers.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      )}
    </PageContainer>
  );
};

export default FavoritesPage;
