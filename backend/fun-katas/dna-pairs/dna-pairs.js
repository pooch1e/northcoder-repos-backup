// Please do not change the name of this function
function dnaPairs(dna) {
  // Write your code here
  let dnaArray = dna.split('');
  let dnaSequence = [];
  const dnaMap = {
    C: 'G',
    T: 'A',
    G: 'C',
    A: 'T',
  };
  dnaArray.forEach((key) => {
    if (dnaMap[key]) {
      dnaSequence.push([key, dnaMap[key]]);
    }
  });
  return dnaSequence;
}

module.exports = dnaPairs;
