//Review.styled.jsx
import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 968px;
  height: 200px;
`;

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 968px;
  height: 84px;
`;

export const ReviewerName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  color: #8a8a89;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

export const ReviewerRating = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: var(--text-color);
`;

export const ReviewText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: var(--text-color);
`;
