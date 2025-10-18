import { useState } from 'react';
export const Votes = ({ catId }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [currentVote, setCurrentVote] = useState(
    Math.floor(Math.random(0, 100) * 10) + 1
  );
  const cat = catId;
  //need to get votes
  // upvote func -> post vote
  // downvote func -> post vote

  const incrementVote = () => {
    setCurrentVote(currentVote + 1);
    setIsDisabled(true);
  };

  const decrementVote = () => {
    setCurrentVote(currentVote - 1);
    setIsDisabled(true);
  };

  return (
    <>
      <h3>Votes: {currentVote}</h3>
      <button onClick={incrementVote} disabled={isDisabled ? true : false}>
        Thumb Up
      </button>
      <button onClick={decrementVote} disabled={isDisabled ? true : false}>
        Thumb Down
      </button>
    </>
  );
};
