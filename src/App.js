// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ServiceSection from './components/ServiceSection';
import VideoSection from './components/VideoSection';
import KeyMetricSection from './components/KeyMetricSection';
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <ServiceSection />
      <VideoSection />
      <KeyMetricSection />
      <TestimonialSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;