import React, { useRef, useEffect } from 'react';

export default function HelpBackground({ onLoaded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      console.log('✅ HelpBackground video loaded');
      if (onLoaded) onLoaded();
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('canplay', handleLoaded);

    if (video.readyState >= 3) {
      handleLoaded();
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('canplay', handleLoaded);
    };
  }, [onLoaded]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src={process.env.PUBLIC_URL + "/Backgrounds/help1.mp4"} type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  );
}
