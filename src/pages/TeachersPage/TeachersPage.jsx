// TeachersPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addFavourite, removeFavourite } from "../../redux/favouritesSlice";
import CardModal from "../../components/CardModal/CardModal";
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
} from "./TeachersPage.styled";
import HeartOff from "../../assets/svg/heartOff.svg";
import HeartOn from "../../assets/svg/heartOn.svg";
import Star from "../../assets/svg/Star.svg";
import Book from "../../assets/svg/book-open-01.svg";
import GreenDotImage from "../../assets/svg/Group 82.svg";
import HeaderPage from "../HeaderPage/HeaderPage";
import Filter from "../../components/Filter/Filter";
import { fetchTeachers } from "../../api/teachers.js";
import "react-toastify/dist/ReactToastify.css";

const TeachersPage = () => {
  const dispatch = useDispatch();
  const favouriteTeachers = useSelector(
    (state) => state.favourites.favouriteTeachers
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Assuming you have auth state

  // Log the authentication state
  console.log("Is Authenticated:", isAuthenticated);

  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [visibleStart, setVisibleStart] = useState(0);
  const [visibleEnd, setVisibleEnd] = useState(3);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    const loadTeachers = async () => {
      const data = await fetchTeachers();
      const teachersArray = Object.values(data);
      setTeachers(teachersArray);

      const allLanguages = [
        "All",
        ...teachersArray
          .flatMap((teacher) => teacher.languages)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort(),
      ];
      setLanguages(allLanguages);

      const allLevels = [
        "All",
        ...teachersArray
          .flatMap((teacher) => teacher.levels)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort(),
      ];
      setLevels(allLevels);

      const allPrices = teachersArray
        .map((teacher) => teacher.price_per_hour)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => a - b);
      setPrices(allPrices);

      setFilteredTeachers(teachersArray);
    };

    loadTeachers();
  }, []);

  useEffect(() => {
    let filtered = teachers;

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
  }, [selectedLanguage, selectedLevel, selectedPrice, teachers]);

  const handleLoadMore = () => {
    if (visibleEnd < filteredTeachers.length) {
      setVisibleEnd(visibleEnd + 4);
    }
  };

  const handleReadMore = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeModal = () => {
    setSelectedTeacher(null);
  };

  const isFavourite = (teacherId) => {
    return favouriteTeachers.some((teacher) => teacher.id === teacherId);
  };

  const toggleFavorite = (teacher) => {
    if (!isAuthenticated) {
      toast.error(" ");
      return;
    }
    if (isFavourite(teacher.id)) {
      dispatch(removeFavourite(teacher));
    } else {
      dispatch(addFavourite(teacher));
    }
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
                          src={isFavourite(teacher.id) ? HeartOn : HeartOff}
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
                      <Lesson>
                        <span>Conditions:</span> {teacher.conditions}
                      </Lesson>
                    </CardBody>
                  </CardInfo>
                  <ReadMore onClick={() => handleReadMore(teacher)}>
                    Read more
                  </ReadMore>
                </InfoBlock>
                <CardFooter>
                  {teacher.levels.map((level) => (
                    <LevelTag key={level} highlighted={level === selectedLevel}>
                      {level}
                    </LevelTag>
                  ))}
                </CardFooter>
              </CardBlock>
            </Card>
          ))}
        </CardsContainer>
      )}
      {visibleEnd < filteredTeachers.length && (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      )}
      {selectedTeacher && (
        <CardModal
          teacher={selectedTeacher}
          onClose={closeModal}
          selectedLevel={selectedLevel}
        />
      )}
    </PageContainer>
  );
};

export default TeachersPage;
