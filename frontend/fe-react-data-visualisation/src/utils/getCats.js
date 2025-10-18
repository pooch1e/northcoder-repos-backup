export const getCats = async (searchQuery = null) => {
  const url = 'https://api.thecatapi.com/v1/images/search/';
  const urlForBreeds = `https://api.thecatapi.com/v1/images/search?breed_ids=${searchQuery}`;

  const API_KEY =
    'live_RzliirBXudCPJVS4PrKtanza4RnXcl88KldRLFcZW0yuqU2uLrPQu2wra76DzLZu';
  try {
    const data = searchQuery
      ? await fetch(urlForBreeds, {
          headers: {
            'x-api-key': API_KEY,
          },
        })
      : await fetch(url, {
          headers: {
            'x-api-key': API_KEY,
          },
        });

    if (!data.ok) {
      throw new Error(`Response status: ${data.status}`);
    }
    const json = await data.json();
    console.log(json, 'json data from get cats func');
    return json;
  } catch (err) {
    console.log(err, 'no cat found');
    return [];
  }
};
