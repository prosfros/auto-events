import React from 'react';

export default function HubBackground() {
  return (
    <video
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
      <source src="/Backgrounds/hub1.realesrgan.mp4" type="video/mp4" />
      {/* Можно добавить альтернативные форматы, если нужно */}
      Ваш браузер не поддерживает видео.
    </video>
  );
}
