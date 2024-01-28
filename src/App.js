
import React from 'react';
import './App.css';

import MainComponent from './components/MainComponent';
import { DarkModeProvider } from './components/DarkModeContext';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <MainComponent/>
        </DarkModeProvider>
    </div>
  );
}

export default App;

