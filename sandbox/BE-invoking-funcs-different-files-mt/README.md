# Invoking Functions from Different Files

Today we'll be writing a function that will automate the creation of our database and the insertion of data.
In order for this to work, we'll be invoking the function in two different places, with two different data sets. 
The notes on [Testing and Development Databases](https://l2c.northcoders.com/courses/sd-notes/back-end#sectionId=test-databases,step=intro) will provide some more context here. 

To prepare you for today's content, complete the following:

## Part 1: Consider the files

Take a look around the repo provided. You'll see the following things:

- A file called `getMessage.js` that contains a function which takes an object of data and returns whatever is on the `message` key.
- A `data` directory containing some `devData` and some `testData`.
- A `tests` directory containing a single test.
- A `run-getMessage.js` file, which is empty for now.

## Part 2: Invoke the `getMessage` function with the test data.

The aim of today's task is to invoke the `getMessage` function from two places, each time with different data.

Firstly, when running our tests, we want to invoke the function with our test data. `npm` and `jest` have been setup for you, but don't forget to run `npm install`.

You'll see that the function is being invoked in our first (only) test, however it's currently missing an argument. Require in the correct data set and pass it to the function in order to get the test to pass.

__hint:__ You'll notice that we're not exporting anything from our data files. This is because the `.json` file type represents pure data and can be accessed directly (it still needs to be imported at the other end, though!).

Before moving on, take a look at the data in the `data` directory and the `getMessage` function. 

- How is the function getting hold of the message key from the data we're passing in?
If you're unsure, take a look at the notes on [Destructuring](https://l2c.northcoders.com/courses/sd-notes/fundamentals#sectionId=destructuring,step=intro)

## Part 3: Invoke the `getMessage` function with the dev data.

We also want to be able to invoke our function with the dev data, in the instance that we run the code without running our tests.

Whenever we run `npm test` with jest, it automatically looks for, and executes, our test file - where we're invoking our function with the test data.
In order to run our code without jest we'll have to invoke our function somewhere that can be executed with `node`.

It won't do to invoke the `getMessage` function directly in the file in which it is declared. This removes the reusability of the function, and will invoke the function twice when the tests are run (try it if you want, and console.log the output. You'll see what we mean).

For this reason, we've created a file called `run-getMessage.js`, which is currently empty. The aim here is to have this file invoke `getMessage` when we run it with node. Complete the following steps:

- Import the correct data into the file. We're no longer running our tests, so which set of data should this be?
- Import the `getMessage` function into this file, and invoke it with the above data. Console.log the output.
- Run the `run-getMessage.js` with `node`. 
- Do you get a console.log of `"Hello from dev data!"`?
- Does your test still pass when you run `npm test`?

## Considerations
- Look at the `devData` file and, again, at `getMessage.js` - what would have happened if our `devData` had a key of `greeting` instead?
- Both of our `testData` and `devData` JSON objects have a key called `author`. How might you update `getMessage.js` to also console.log the author when invoked?