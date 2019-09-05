import React from 'react';
import Header from './components/header/main';
import Content from './pages/content/main';
import Footer from './components/footer/main'
import './reset.css';
import './global.css';

function App() {
  return (
    <div className="App">
      <div className="global-content">
        <Header/>
        <Content/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
