import { Todo } from "./todo";
function App() {
  const user = 'Joel';
  return (
    <div>
      <header>
        <h1>Welcome to React {user}!</h1>
      </header>
      <main>
        <section>
          <h2>What's all this then?</h2>
          <p>
            Before looking at the code, where do you think the UI is coming
            from?
      
          </p>
          <p>What files do you expect to find in a project like this?</p>
        </section>
        <section>
          <h2>Files and Folders</h2>
          <p>Time to look at the code.</p>
          <ul>
            <li>
              What does <code>src</code> folder contain?
            </li>
            <li>
              What's going on with <code>index.html</code>? How does this relate
              to <code>main.jsx</code>?
            </li>
          </ul>
        </section>
        <section>
          <h3>Code</h3>
          <p>Today's date is {Date.now()}</p>
          <p>
            Take a look at <code>App.jsx</code>. What can you figure out?
            <ul>
              <li>Which bits of this look like HTML?</li>
              <li>What's different from what you've seen before?</li>
              <li>What language do you think this file is written in?</li>
              <li>How can you personalise the welcome message?</li>
            </ul>
          </p>
        </section>
        <section>
          <p>Your Todo's are:</p>
          <Todo />
        </section>
        <section>
          <h3>Add to the UI</h3>
          <p>
            What would you add to this page to make it feel more personal,
            useful or fun?
          </p>
          <ul>
            <li>Can you add another heading or paragraph?</li>
            <li>Could you include today's date pragmatically?</li>
            <li>Where in the code would you put new content?</li>
          </ul>
          <p>Try making one small change and see what happens!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
