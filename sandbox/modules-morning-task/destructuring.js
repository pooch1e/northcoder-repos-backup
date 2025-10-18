// function treeCatalogue() {
//   const tree = {
//     species: 'willow',
//     age: 35,
//     type: 'deciduous',
//     conservationStatus: { endangered: false, ukDistribution: 'widespread' },
//   };

//   const { species, type: category, location } = tree;
//   const {endangered, ukDistribution} = tree.conservationStatus;
//   console.log(species);
//   console.log(category);
//   console.log(endangered)
//   console.log(ukDistribution)
// }

// treeCatalogue();

// function flowerCatalogue() {
//   const plants = ['sunflower', 'tulips', 'rose'];
//   const [a, b, c] = plants;
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }
// flowerCatalogue();


function createConservationLabel() {
  const {species, conservationStatus: {endangered}} = tree;
  
  // console.log(species)
  // console.log(endangered)
  console.log (`This is a ${species} tree, it is currently ${
    endangered ? 'endangered' : 'not endangered'
  }.`);
}

const tree = {
  species: 'willow',
  age: 35,
  type: 'deciduous',
  conservationStatus: { endangered: false, ukDistribution: 'widespread' },
};

createConservationLabel(tree);