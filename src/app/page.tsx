'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import OurJourneyNav from '@/components/OurJourneyNav';
import HeroSection from '@/components/HeroSection';
import BookNowButton from '@/components/BookNowButton';
import FooterSection from '@/components/FooterSection';

/** 4) MAIN PAGE COMPONENT */
const OurJourneyPage = () => (
  <main className="d-flex flex-column min-vh-100">
    <OurJourneyNav />
    <HeroSection />
    <BookNowButton />
    <FooterSection />
  </main>
);

export default OurJourneyPage;
