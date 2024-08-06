//TeachersPage.jsx
import React from "react";
import {
  PageContainer,
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
  LevelTag,
} from "./TeachersPage.styled";
import HeartOff from "../../assets/svg/heartOff.svg";
// import HeartOn from "../../assets/svg/heartOn.svg";
import Star from "../../assets/svg/Star.svg";
import Book from "../../assets/svg/book-open-01.svg";

const teachersData = [
  {
    id: 1,
    name: "Jane Smith",
    languages: "German, French",
    lessonInfo:
      "Lessons are structured to cover grammar, vocabulary, and practical usage of the language.",
    conditions:
      "Welcomes both adult learners and teenagers (13 years and above). Provides personalized study plans.",
    levels: [
      "#A1 Beginner",
      "#A2 Elementary",
      "#B1 Intermediate",
      "#B2 Upper-Intermediate",
    ],
    rating: 4.8,
    lessonsDone: 1098,
    price: 30,
  },
  {
    id: 2,
    name: "David Johnson",
    languages: "Mandarin Chinese",
    lessonInfo:
      "Lessons focus on developing all four language skills: speaking, listening, reading, and writing.",
    conditions:
      "Teaches all age groups, including children, teenagers, and adults. Offers group lessons at discounted rates.",
    levels: ["#A1 Beginner", "#A2 Elementary", "#B1 Intermediate"],
    rating: 4.2,
    lessonsDone: 1203,
    price: 35,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    languages: "English",
    lessonInfo:
      "Lessons focus on building conversational skills and grammar knowledge.",
    conditions:
      "Teaches adults and teenagers (15 years and above). Flexible lesson timings available.",
    levels: ["#A1 Beginner", "#A2 Elementary", "#B1 Intermediate"],
    rating: 4.6,
    lessonsDone: 1120,
    price: 28,
  },
];

const TeachersPage = () => (
  <PageContainer>
    {teachersData.map((teacher) => (
      <Card key={teacher.id}>
        <Avatar />
        <CardBlock>
          <InfoBlock>
            <CardInfo>
              <CardHeader>
                <TeacherName>{teacher.name}</TeacherName>
                <BlockHeader>
                  <img src={Book} width="16" height="16" alt="open book" />
                  <span>Lessons online</span>
                  <spanDiv> | </spanDiv>
                  <span>Lessons done:</span> {teacher.lessonsDone}
                  <spanDiv> | </spanDiv>
                  <span>Rating:</span>{" "}
                  <img src={Star} width="16" height="16" alt="star" />
                  {teacher.rating}
                  <spanDiv> | </spanDiv>
                  <span>Price / 1 hour: </span>{" "}
                  <spanPrice>{teacher.price}$</spanPrice>
                  <img src={HeartOff} width="26" height="26" alt="heart Off" />
                </BlockHeader>
              </CardHeader>
              <CardBody>
                <Speaks>
                  <span>Languages Speaks:</span>
                  <div className="underline-text">{teacher.languages}</div>
                </Speaks>
                <Lesson>
                  <span>Lesson Info:</span> {teacher.lessonInfo}
                </Lesson>
                <Lesson>
                  <span>Conditions:</span> {teacher.conditions}
                </Lesson>
              </CardBody>
            </CardInfo>
            <ReadMore>Read more</ReadMore>
          </InfoBlock>
          <CardFooter>
            {teacher.levels.map((level) => (
              <LevelTag key={level}>{level}</LevelTag>
            ))}
          </CardFooter>
        </CardBlock>
      </Card>
    ))}
  </PageContainer>
);

export default TeachersPage;
