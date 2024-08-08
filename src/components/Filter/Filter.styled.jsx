//Filter.styled.jsx
import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 14px;
  gap: 20px;
  width: 1184px;
  height: 74px;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const FilterLabel = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8a8a89;
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
`;

export const FilterInput = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: var(--text-color);
`;

export const DropdownIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 18px;
  top: calc(50% - 10px);
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
`;
