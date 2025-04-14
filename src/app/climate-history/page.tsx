'use client';

import { useEffect } from 'react';
import StoryLayout from '@/components/ui/StoryLayout';
import HistoryHero from '@/components/sections/HistoryHero';
import GreenhouseSection from '@/components/sections/GreenhouseSection';
import PageTransition from '@/components/transitions/PageTransition';

export default function ClimateHistoryPage() {
  // Set up smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return (
    <PageTransition>
      <StoryLayout
        nextChapter={{
          title: "Industrial Revolution",
          path: "/industrial-revolution"
        }}
      >
        <HistoryHero />
        <GreenhouseSection />
      </StoryLayout>
    </PageTransition>
  );
}