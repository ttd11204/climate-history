"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useAudio } from "./AudioContext"; 

interface LandingPageProps {
    onNavigate: () => void;
}

const LandingPage: FC<LandingPageProps> = ({ onNavigate }) => {
    const { playMusic } = useAudio();

    const handleMusicOn = () => {
        playMusic();
        onNavigate();
    };
    
    const handleMusicOff = () => {
        onNavigate();
    };

    return (
        <div className="bg-[#262322] text-[#b99d75] min-h-screen flex flex-col justify-center items-center font-serif p-6">
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Tinos:wght@400;700&display=swap'); body { background-color: #262322; }`}</style>
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                     <img className="w-28 h-28 rounded-md flex items-center justify-center mx-auto mb-12" src="/podcast/phones.svg" alt="Headphones Icon" />
                </div>
                <p className="text-lg md:text-xl mb-10 max-w-sm mx-auto tracking-wider">
                    For greater immersion, it is recommended to turn on music
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                        onClick={handleMusicOn}
                        className="bg-[#d1c5b4] text-[#262322] font-bold py-3 px-8 rounded-md tracking-widest text-sm uppercase transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Music On
                    </motion.button>
                    <motion.button
                        onClick={handleMusicOff}
                        className="border-2 border-[#b99d75] text-[#b99d75] font-bold py-3 px-8 rounded-md tracking-widest text-sm uppercase transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Without Music
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default LandingPage;
