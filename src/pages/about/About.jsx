import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const text = `Мы — команда энтузиастов, объединившая автолюбителей и цифровые технологии. Наш Telegram-бот создан для того, чтобы упростить организацию автособытий, упростить регистрацию участников и сделать процесс взаимодействия удобным и прозрачным.

Мы верим, что автосообщество — это не просто хобби, а стиль жизни. Присоединяйтесь к нам и убедитесь сами, как легко можно наладить взаимодействие между организаторами и участниками.`;

  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setCharIndex(0); // Сброс при маунте
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
  }, [text.length]);

  const displayedText = text.slice(0, charIndex);
  const isFinished = charIndex >= text.length;

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-10 overflow-hidden">
      {/* Переливающийся светлый фон */}
      <div className="absolute inset-0 animated-gradient opacity-30 z-0" />

      {/* Полупрозрачный белый слой для светлости */}
      <div className="absolute inset-0 bg-white opacity-10 z-0" />

      {/* Контейнер с текстом */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl bg-white/25 backdrop-blur-md border border-gray-300 rounded-xl shadow-xl p-8"
      >
        <h1 className="
            block
            font-extrabold
            italic
            text-4xl
            text-center
            px-4
            bg-gradient-to-r
            from-red-500
            via-orange-500
            to-yellow-500
            bg-clip-text
            text-transparent
            animate-gradient-x
            leading-relaxed
            mb-6
            drop-shadow-[0_0_15px_rgba(255,100,0,0.5)]
        ">
          О нас:
        </h1>
        <p className="whitespace-pre-line font-mono text-3x2 text-white leading-relaxed">
          {displayedText}
          {!isFinished && (
            <span className="inline-block w-2 h-5 bg-gray-900 animate-pulse align-bottom ml-0.5"></span>
          )}
        </p>
      </motion.div>

      {/* Стили анимации градиента и текста */}
      <style>{`
        @keyframes gradientMove {
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
        .animated-gradient {
          background: linear-gradient(270deg, #60a5fa, #a78bfa, #f472b6);
          background-size: 600% 600%;
          animation: gradientMove 15s ease infinite;
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

