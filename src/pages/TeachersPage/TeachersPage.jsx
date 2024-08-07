// TeachersPage.jsx
import React, { useEffect, useState } from "react";
import CardModal from "../../components/CardModal/CardModal"; // Импортируем новый модуль
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
} from "./TeachersPage.styled";
import HeartOff from "../../assets/svg/heartOff.svg";
import Star from "../../assets/svg/Star.svg";
import Book from "../../assets/svg/book-open-01.svg";
import GreenDotImage from "../../assets/svg/Group 82.svg";
import HeaderPage from "../HeaderPage/HeaderPage";
import Filter from "../../components/Filter/Filter";
import { fetchTeachers } from "../../api/teachers.js";

const TeachersPage = () => {
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
  const [selectedTeacher, setSelectedTeacher] = useState(null); // Состояние для выбранного учителя

  useEffect(() => {
    const loadTeachers = async () => {
      const data = await fetchTeachers();
      const teachersArray = Object.values(data);
      setTeachers(teachersArray);

      // Извлечение всех языков и их сортировка
      const allLanguages = [
        "All",
        ...teachersArray
          .flatMap((teacher) => teacher.languages)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort(),
      ];
      setLanguages(allLanguages);

      // Извлечение всех уровней знаний и их сортировка
      const allLevels = [
        "All",
        ...teachersArray
          .flatMap((teacher) => teacher.levels)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort(),
      ];
      setLevels(allLevels);

      // Извлечение всех уникальных цен и их сортировка
      const allPrices = teachersArray
        .map((teacher) => teacher.price_per_hour)
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort((a, b) => a - b);
      setPrices(allPrices);

      // Изначально показываем всех учителей
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
                        <img
                          src={HeartOff}
                          width="26"
                          height="26"
                          alt="heart Off"
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
