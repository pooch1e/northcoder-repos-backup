const postCat = async (vote) => {
  //UPVOTE
  const response = await fetch('https://api.thecatapi.com/v1/votes', {
    method: 'POST',
    body: JSON.stringify({
      image_id: '...',
      value: 1
    }),
  });

  //DOWNVOTE
  
};
