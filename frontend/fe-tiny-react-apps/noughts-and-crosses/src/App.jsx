import { useState } from 'react';
import './App.css';
import { Grid } from './components/Grid';
import { Scoreboard } from './components/Scoreboard';

function App() {
  return (
    <>
      <header>
        <h1>Noughts and Crosses</h1>
      </header>
      <main>
        <Grid />
      </main>
    </>
  );
}

export default App;
