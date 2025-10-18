export const getAllCats = async () => {
  const url = 'https://api.thecatapi.com/v1/breeds'
  try {  
    const allCats = await fetch(url)
    const catsJson = await allCats.json();
    console.log(catsJson)
    const breeds = catsJson.map((breed) => {
      return breed.id;
    })
    console.log(breeds) // allowable breed search terms
  } catch (err) {
    console.log(err)
  }
}
