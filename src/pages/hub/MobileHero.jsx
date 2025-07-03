// src/pages/MobileHero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MobileHero() {
  const features = [
    {
      title: "Создание мероприятий",
      desc: "Создавайте встречи за пару шагов прямо с телефона.",
    },
    {
      title: "Регистрация авто",
      desc: "Участники подают заявки быстро и удобно.",
    },
    {
      title: "Управление заявками",
      desc: "Принимайте решения по участникам мгновенно.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start text-center px-4 py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mb-8"
      >
        <h1
          className="
            block
            font-extrabold
            text-4xl
            text-center
            px-2
            bg-gradient-to-r
            from-red-500
            via-red-600
            to-red-700
            bg-clip-text
            text-transparent
            leading-snug
            mt-4
          "
        >
          Автомероприятия в Telegram
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 w-full"
      >
        <div className="bg-white/90 text-black rounded-xl p-5 shadow-md mx-auto max-w-md">
          <h2 className="text-2xl font-bold mb-2">Добро пожаловать!</h2>
          <p className="text-gray-700 text-sm">
            Создавайте мероприятия, регистрируйте автомобили и управляйте заявками — всё с мобильного.
          </p>
        </div>
      </motion.div>

      <div className="mb-10 w-full max-w-md flex flex-col gap-4">
        {features.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
            className="bg-white/85 rounded-xl shadow p-4 transform transition duration-300 hover:-translate-y-1"
          >
            <h3 className="text-base font-bold text-blue-900 mb-1">{card.title}</h3>
            <p className="text-sm text-black">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div>
        <p className="mt-6 text-base max-w-md mx-auto text-white text-center">
          Начните создавать события и управляйте ими в Telegram.
        </p>

        <a
          href="https://t.me/your_autobot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Перейти в бота
        </a>
      </motion.div>
    </section>
  );
}
