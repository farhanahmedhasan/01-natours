import React from 'react';
import Header from './Header';
import About from './About';
import Features from './Features';
import Tours from './Tours';
import Stories from './Stories';
import Booking from './Booking';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
