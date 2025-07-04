import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const text = `Мы — команда энтузиастов, объединившая автолюбителей и цифровые технологии. Наш Telegram-бот создан для того, чтобы упростить организацию автособытий, упростить регистрацию участников и сделать процесс взаимодействия удобным и прозрачным.

Мы верим, что автосообщество — это не просто хобби, а стиль жизни. Присоединяйтесь к нам и убедитесь сами, как легко можно наладить взаимодействие между организаторами и участниками.`;

  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setCharIndex(0); // Сбрасываем при маунте

    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const displayedText = text.slice(0, charIndex);
  const isFinished = charIndex >= text.length;

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-10 overflow-hidden">
      {/* Переливающийся фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient opacity-20 z-0" />

      {/* Контейнер с текстом */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl bg-white bg-opacity-80 backdrop-blur-md border border-gray-300 rounded-xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gradient">
          О проекте
        </h1>
        <p className="whitespace-pre-line font-mono text-gray-800 leading-relaxed">
          {displayedText}
          {!isFinished && (
            <span className="inline-block w-2 h-5 bg-black animate-pulse align-bottom ml-0.5"></span>
          )}
        </p>
      </motion.div>

      {/* Анимация переливающегося фона */}
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        .text-gradient {
          background: linear-gradient(to right, #3b82f6, #9333ea, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
}
