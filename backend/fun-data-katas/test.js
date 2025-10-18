

/*function responds with an object to reference a key from an array of objects to get the corresponding values
// ! args
//  array of objects
//  key
//  value

// ? Tests
// returns an empty object when passed an array of objects
// returns an object with the correct key and value referenced when passed an array with a single object
// returns an object with the correct key and value referenced when passed an array multiple objects*/





const getValueFromKey = (arr1, arr2, arr1key, arr2Key) => {
  if (arr.length === 0) return {};

  return arr.find((obj) => {
    return obj[key] === value;
  });

  if (arr1[0][arr1key] === arr2[0][arr2key]) {
article_id

  }
};


const comment = [{
    article_title: "Living in the shadow of a great man",
    body: "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
    votes: 16,
    author: "butter_bridge",
    created_at: 1586179020000,
  }
];

const article = [
  {
    article_id : 1,
    title: "Living in the shadow of a great man",
    topic: "mitch",
    author: "butter_bridge",
    body: "I find this existence challenging",
    created_at: 1594329060000,
    votes: 100,
    article_img_url:
      "https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?w=700&h=700",
  }
]

console.log(getValueFromKey(comment, article, ))