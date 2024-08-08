// TeachersPage.styled.jsx
import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: var(--additional-bg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardsContainer = styled.div`
  width: 1200px;
  max-height: 714px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 1184px;
  height: 222px;
  border-radius: 24px;
  padding: 16px;
  border: none;
  gap: 48px;
  margin-bottom: 16px;
  color: var(--text-color);
  background-color: var(--primary-bg-color);
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid var(--accent-bg-color);
  border-radius: 100px;
  background-color: var(--primary-bg-color);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const GreenDot = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 19px;
  left: 85px;
  border-radius: 50%;
`;

export const LoadMoreButton = styled.button`
  all: unset;
  display: block;
  width: 183px;
  height: 60px;
  border-radius: 12px;
  background-color: var(--btn-icon-bg);
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: var(--text-color);
  cursor: pointer;
  &:focus {
    border-color: var(--btn-hover-bg);
    outline: none;
  }
  &:hover {
    background-color: var(--btn-hover-bg);
  }
`;

export const CardBlock = styled.div`
  width: 984px;
  height: 190px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoBlock = styled.div`
  width: 984px;
  height: 150px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardInfo = styled.div`
  width: 984px;
  height: 118px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
`;

export const ReadMore = styled.div`
  width: 78px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export const CardHeader = styled.div`
  width: 984px;
  height: 26px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TeacherName = styled.div`
  height: 26px;
  display: flex;
  gap: 4px;
  flex-direction: row;
  align-items: center;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);
`;

export const BlockHeader = styled.div`
  width: 697px;
  height: 26px;
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);
`;

export const SpanText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);
`;

export const SpanDiv = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: rgba(18, 20, 23, 0.2);
`;

export const SpanPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #38cd3e;
  margin-right: 58px;
`;

export const CardBody = styled.div`
  width: 984px;
  height: 88px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Speaks = styled.div`
  width: 984px;
  height: 24px;
  display: flex;
  gap: 4px;
  flex-direction: row;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #8a8a89;
    text-decoration: none;
  }

  .underline-text {
    text-decoration: underline;
  }
`;

export const Lesson = styled.div`
  width: 984px;
  height: 24px;
  display: flex;
  gap: 4px;
  flex-direction: row;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #8a8a89;
  }
`;

export const CardFooter = styled.div`
  width: 984px;
  height: 32px;
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

export const LevelTag = styled.div`
  height: 32px;
  gap: 4px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 16px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: #121417;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: ${({ highlighted }) =>
    highlighted ? "var(--btn-icon-bg)" : "transparent"};
`;

export const FavoriteIcon = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
