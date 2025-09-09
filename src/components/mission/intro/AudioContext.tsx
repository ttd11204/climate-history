"use client";
import React, { useRef, createContext, useContext, ReactNode, FC } from "react";

// Định nghĩa kiểu cho giá trị của context
interface AudioContextType {
    playMusic: () => void;
}

// Tạo Context với kiểu đã định nghĩa
const AudioContext = createContext<AudioContextType | null>(null);

// Định nghĩa kiểu cho props của Provider
interface AudioProviderProps {
    children: ReactNode;
}

// Tạo Provider để bao bọc ứng dụng, cung cấp logic âm thanh
export const AudioProvider: FC<AudioProviderProps> = ({ children }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Hàm để bật nhạc
    const playMusic = () => {
        if (audioRef.current) {
            // Trình duyệt có thể chặn tự động phát, cần bắt lỗi
            audioRef.current.play().catch(error => {
                console.error("Lỗi khi bật nhạc:", error);
            });
        }
    };

    // Cung cấp hàm playMusic cho các component con
    return (
        <AudioContext.Provider value={{ playMusic }}>
            <audio ref={audioRef} src="/podcast/music.mp3" loop />
            {children}
        </AudioContext.Provider>
    );
};

// Custom hook để sử dụng context dễ dàng hơn, với kiểm tra null
export const useAudio = (): AudioContextType => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within an AudioProvider");
    }
    return context;
};

