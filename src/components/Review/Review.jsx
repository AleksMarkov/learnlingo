//Review.jsx
import React from "react";
import {
  ReviewContainer,
  ReviewItem,
  ReviewerName,
  ReviewerRating,
  ReviewText,
} from "./Review.styled";
import Star from "../../assets/svg/Star.svg";

const Review = ({ reviews }) => {
  return (
    <ReviewContainer>
      {reviews.map((review, index) => (
        <ReviewItem key={index}>
          <ReviewerName>
            {review.reviewer_name}
            <ReviewerRating>
              <img src={Star} width="16" height="16" alt="star" />
              {review.reviewer_rating.toFixed(1)}
            </ReviewerRating>
          </ReviewerName>
          <ReviewText>{review.comment}</ReviewText>
        </ReviewItem>
      ))}
    </ReviewContainer>
  );
};

export default Review;
