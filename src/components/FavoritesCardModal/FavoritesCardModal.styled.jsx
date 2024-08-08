import styled from "styled-components";

export const ModalCard = styled.div`
  width: 1136px;
  height: 628px;
  display: flex;
  gap: 48px;
  justify-content: center;
  flex-direction: row;
  background-color: var(--primary-bg-color);
`;

export const ModalAvatar = styled.div`
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

export const ModalAvatarImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const ModalGreenDot = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 19px;
  left: 85px;
  border-radius: 50%;
`;

export const ModalCardBlock = styled.div`
  width: 968px;
  height: 628px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalInfoBlock = styled.div`
  width: 968px;
  height: 238px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ModalCardInfo = styled.div`
  width: 968px;
  height: 150px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
`;

export const ModalCardHeader = styled.div`
  width: 968px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTeacherName = styled.div`
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

export const ModalBlockHeader = styled.div`
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

export const ModalCardBody = styled.div`
  width: 968px;
  height: 88px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ModalSpeaks = styled.div`
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

export const ModalLesson = styled.div`
  width: 968px;
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

export const ModalExp = styled.div`
  width: 968px;
  max-height: 120px; 
  overflow-y: auto; 
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);
`;

export const ModalCardFooter = styled.div`
  width: 968px;
  height: 32px;
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

export const ModalLevelTag = styled.div`
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

  &:focus {
    border-color: var(--btn-hover-bg);
    cursor: pointer;
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const BookButton = styled.button`
  all: unset;
  display: block;
  opacity: 0px;
  width: 232px;
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

export const FavoriteIcon = styled.img`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
