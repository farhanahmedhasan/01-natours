import React from 'react';
import Header from './Header';
import About from './About';
import Features from './Features';
import Tours from './Tours';
import Stories from './Stories';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
      </main>
    </>
  );
}

export default App;
