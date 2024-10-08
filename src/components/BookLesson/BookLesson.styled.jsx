//BookLesson.styled.jsx
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 472px;
  height: 134px;
  left: 64px;
  top: 64px;
  background-color: var(--primary-bg-color);

  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: var(--text-color);
    text-align: left;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: rgba(18, 20, 23, 0.8);
    text-align: left;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 302px;
    gap: 10px;
    width: 80%;
    left: 32px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const Avatar = styled.div`
  width: 200px;
  height: 44px;
  background-color: var(--primary-bg-color);
  display: flex;
  position: absolute;
  top: 218px;
  left: 64px;
  gap: 14px;
  opacity: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 600px) {
    width: 80%;
    left: 32px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
  }
`;

export const AvatarImage = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const YourTeacher = styled.div`
  width: 142px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);

  span {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    color: #8a8a89;
  }
`;

export const RadioTitle = styled.div`
  width: 472px;
  height: 64px;
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 302px;
  left: 64px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: var(--text-color);

  @media (max-width: 600px) {
    width: 100%;
    left: 32px;
    width: 400px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 260px;
    font-size: 20px;
  }
`;

export const RadioBlock = styled.div`
  width: 472px;
  position: absolute;
  top: 386px;
  left: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    left: 32px;
    width: 300px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    flex-direction: column;
    gap: 8px;
    top: 320px;
  }
`;

export const RadioColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 600px) {
    width: 100%;
    gap: 16px;
    left: 32px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--btn-icon-bg);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:checked::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--btn-icon-bg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  color: var(--text-color);

  @media (max-width: 600px) {
    width: 60%;
    left: 32px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  position: absolute;
  width: 472px;
  height: 198px;
  top: 520px;
  left: 64px;

  input {
    width: 472px;
    height: 54px;
    padding: 16px 18px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: var(--text-color);

    @media (max-width: 600px) {
      width: 100%;
      left: 32px;
    }

    ::placeholder {
      color: var(--text-color);
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      opacity: 1;
    }

    &:focus {
      border-color: var(--btn-hover-bg);
      outline: none;
    }
  }
  @media (max-width: 600px) {
    width: 80%;
    left: 32px;
    top: 560px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 460px;
    input {
      width: 100%;
    }
  }
`;

export const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 215px;
  position: absolute;
  width: 472px;
  height: 60px;
  left: 64px;
  top: 758px;
  background-color: var(--btn-icon-bg);
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: var(--btn-hover-bg);
  }

  @media (max-width: 600px) {
    width: 80%;
    padding: 16px;
    left: 32px;
    top: 776px;
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 706px;
  }
`;

export const TemporaryMessageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-bg-color);
  color: var(--text-color);
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: 1;
  @media (max-width: 600px) {
    width: 80%;
    padding: 16px 24px;
    gap: 12px;
  }
  @media (max-width: 480px) {
    padding: 16px 24px;
    gap: 12px;
  }
`;

export const TemporaryMessage = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const EnlargedAvatar = styled.div`
  width: 400px;
  height: 88px;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;

  @media (max-width: 480px) {
    width: 90%;
    gap: 12px;
  }
`;

export const EnlargedAvatarImage = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;

  @media (max-width: 480px) {
    width: 64px;
    height: 64px;
  }
`;

export const EnlargedYourTeacher = styled.div`
  width: 284px;
  height: 88px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  text-align: left;
  color: var(--text-color);

  span {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    text-align: left;
    color: #8a8a89;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
    span {
      font-size: 18px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
