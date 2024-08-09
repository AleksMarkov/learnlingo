//Filter.styled.jsx
import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 14px;
  gap: 20px;
  width: 100%;
  max-width: 1184px;
  height: auto;

  @media (max-width: 1253px) {
    width: 100%;
    gap: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const FilterLabel = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8a8a89;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
`;

export const FilterLanguagesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 221px;
  height: 48px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const FilterLevelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 198px;
  height: 48px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px; 
`;

export const FilterPriceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 124px;
  height: 48px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  padding: 16px 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const FilterInput = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
`;

export const DropdownIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 18px;
  top: calc(50% - 10px);

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  max-height: 200px;
  background-color: var(--primary-bg-color);
  border-radius: 14px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    top: 40px;
  }
`;

export const DropdownItem = styled.div`
  padding: 6px 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: rgba(3.6, 4, 4.6, 0.2);
  cursor: pointer;

  &:hover {
    color: var(--text-color);
    background-color: var(--additional-bg-color);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    padding: 4px 16px;
  }
`;
