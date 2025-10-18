const { check, runTest, skipTest } = require("../test-api/index.js");

function validTriangles(triangles) { //array
  /*
This function that takes an array of triangles.
Each triangle is represented as an array e.g. [10, 12, 22] where the three numbers are the sides of the triangle.
The function should return the count of triangles that are valid.
To be a valid triangle, the sum of any two sides must be larger than the remaining side
  */
  if (triangles.length === 0) {
    return 0;
  }

  let validTriangles = 0;
  // iterate over nested arrays
  triangles.forEach(triangle => {
    // now we are iterating over each triangle = 3 number array
    // first make sure has 3 numbers exactly
      
    // save sides of the triangle
    let sideA = triangle[0];
    let sideB = triangle[1];
    let sideC = triangle[2];

    if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB) {
      validTriangles ++;
    }

    // if(triangle.length === 3){
    //   let side = triangle[0];
    //   let sides = triangle;
    //   // find smallest number if at all
     
    // } 
    // return
    
  })
  console.log(validTriangles)
  return validTriangles; // returns valid triangles if none found returns 0 as base value

}

console.log("validTriangles()");
runTest("returns 0 when passed no triangles []", function () {
  check(validTriangles([])).isEqualTo(0);
});

runTest("returns 0 when passed an array with no valid triangles", function () {
  check(validTriangles([[5, 10, 25]])).isEqualTo(0);
});

runTest(
  "returns 1 when passed an array with a single valid triangle",
  function () {
    check(validTriangles([[5, 4, 5]])).isEqualTo(1);
  }
);

runTest(
  "returns 2 when passed an array with 2 valid and 1 invalid triangle",
  function () {
    check(
      validTriangles([
        [5, 10, 25],
        [5, 4, 5],
        [542, 586, 419]
      ])
    ).isEqualTo(2);
  }
);
