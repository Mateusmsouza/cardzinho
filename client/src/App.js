import React from 'react';
import Header from './components/header/main';
import Content from './pages/content/main';
import './reset.css';
import './pages/global.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
