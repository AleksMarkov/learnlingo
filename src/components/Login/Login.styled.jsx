//Login.styled.jsx
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 438px;
  height: 112px;
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
    gap: 10px;
    width: 80%;
    left: 32px;
  }

  @media (max-width: 480px) {
    width: 90%; /* Adjust width for smaller screens */
    left: 5%; /* Center the container */
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  position: absolute;
  width: 438px;
  height: 126px;
  left: 64px;
  top: 216px;

  input {
    width: 438px;
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
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    top: 180px;
    input {
      width: 100%;
    }
  }
`;

export const EyeImage = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 80%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const MainButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 168px;
  position: absolute;
  width: 438px;
  height: 60px;
  left: 64px;
  top: 382px;
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
  }

  @media (max-width: 480px) {
    width: 90%;
    left: 5%;
    padding: 16px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 10px;
`;

export const AlertMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--btn-icon-bg);
  color: var(--text-color);
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  z-index: 20000;

  @media (max-width: 600px) {
    width: 80%;
    left: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    padding: 16px 24px;
  }
`;
