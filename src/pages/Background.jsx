import React from 'react';
import Particles from 'react-tsparticles';

export default function Background() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
          zIndex: -2,
        }}
      />
      <Particles
        style={{
          position: 'fixed',
          top: 0, left: 0, width: '100%', height: '100%',
          zIndex: -1,
        }}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.6 },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: { value: 100, density: { enable: true, area: 900 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: { enable: true, minimumValue: 1 },
              anim: {
                enable: true,
                speed: 3,
                size_min: 0.3,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
              attract: { enable: false },
            },
            links: {
              enable: true,
              distance: 140,
              color: '#ffffff',
              opacity: 0.3,
              width: 1,
              triangles: {
                enable: true,
                color: '#ffffff',
                opacity: 0.05,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}
