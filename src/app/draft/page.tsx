"use client";
import React, { useState } from 'react';
import LandingPage from '@/components/mission/intro/Intro'; 
import MissionPage from '@/components/mission/Misson'; 

export default function Home() {
    const [showMission, setShowMission] = useState<boolean>(false);

    const navigateToMission = () => {
        setShowMission(true);
    };

    if (!showMission) {
        return <LandingPage onNavigate={navigateToMission} />;
    }

    return <MissionPage />;
}