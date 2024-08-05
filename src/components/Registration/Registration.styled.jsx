import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 438px;
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
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 18px;
  position: absolute;
  width: 438px;
  height: 198px;
  top: 238px;
  left: 64px;

  input {
    width: 438px;
    height: 54px;
    padding: 16px 347px 16px 18px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: var(--text-color);

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
`;

export const EyeImage = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 87%;
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
  top: 476px;
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
`;
