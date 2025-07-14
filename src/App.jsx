import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Clients from '@/components/Clients';
import Openings from '@/components/Openings';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SkySeaConsulting Gurgaon - Leading BPO & Healthcare Recruitment Firm</title>
        <meta 
          name="description" 
          content="Professional recruitment firm in Gurgaon specializing in BPO and healthcare hiring. Partner with top companies like IGT Solutions, TaskUs, Tech Mahindra. 500+ successful placements, 95% client satisfaction." 
        />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Clients />
        <Openings />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;