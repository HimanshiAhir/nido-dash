// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div style={{ height: '200vh', background: '#000' }}></div>
      <Footer />
    </React.Fragment>
  );
}

export default App;