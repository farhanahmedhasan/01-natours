import React from 'react';
import Header from './Header';
import About from './About';
import Features from './Features';
import Tours from './Tours';
import Stories from './Stories';
import Booking from './Booking';
import Footer from './Footer';

import Navigation from './Navigation';

function App() {
  const Popup = React.lazy(() => import(/* webpackPrefetch: true */ './Popup'));
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <React.Suspense fallback={<div style={{ display: 'none' }}>Loading...</div>}>
        <Popup />
      </React.Suspense>
    </>
  );
}

export default App;
