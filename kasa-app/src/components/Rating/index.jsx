import starFull from "../../assets/star-full.svg";
import starEmpty from "../../assets/star-empty.svg";
import styled from "../Rating/rating.module.scss";

// Rating component
function Rating({ score }) {
  const stars = [1, 2, 3, 4, 5]; // Create an array representing the five possible rating stars

  return (
    <div className={styled.ratingWrapper}>
      {stars.map((rate, index) =>
        score >= rate ? ( // If the score is greater than or equal to the current star rating, display a full star
          <img key={`${rate}-${index}`} src={starFull} alt="note" />
        ) : (
          // Otherwise, display an empty star
          <img key={`${rate}-${index}`} src={starEmpty} alt="note" />
        )
      )}
    </div>
  );
}

export default Rating;
