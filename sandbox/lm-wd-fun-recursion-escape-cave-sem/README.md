# Problem Solving with Recursion

## Learning Aims

- 🧐 Evaluate recursion-friendly types of problem
- 🧩 Contextualise today's learning with prior understanding of TDD principles

## Tasks

1. Explain how the recursive solution works
2. Identify the mechanisms used to create iteration-like behaviour
3. Implement the `escapeCaveIterative` solution and check it passes the tests.

### escapeCave Logic

- The function is called `escapeCave`
- It accepts a single `caveSystem` argument represented by an array of arbitrarily nested arrays
- The exit is represented by the string `"exit"`
- Return an array to represent the sequence of indexes to escape

#### Example Input -> Output

```javascript
// input
const caveSystem = [
  [[], [], [], [], []],
  [[], [[], [], "exit", []], []],
  [],
  [[], [], [], []],
];

const output = escapeCave(caveSystem);
// output 👉 [1, 1, 2]
```
