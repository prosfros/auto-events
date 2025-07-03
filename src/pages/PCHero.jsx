import React from "react";
import { motion } from "framer-motion";
import HubBackground from "../components/HubBackground"

export default function Hero() {
  const features = [
    {
      title: "Создание мероприятий",
      desc: "Создайте встречу, укажите город, дату и описание — и дайте старт новому событию в пару шагов.",
    },
    {
      title: "Регистрация автомобилей",
      desc: "Участники добавляют авто и подают заявки за секунды, без лишней бюрократии и ожиданий.",
    },
    {
      title: "Управление заявками",
      desc: "Организаторы получают заявки, просматривают карточки участников и принимают решения мгновенно.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start text-center px-6 py-20">
      <HubBackground />
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-12"
      >
        <h1
          className="
            block
            font-extrabold
            italic
            text-6xl
            text-center
            px-4
            bg-gradient-to-r
            from-red-500
            via-red-600
            to-red-700
            bg-clip-text
            text-transparent
            animate-gradient-x
            leading-relaxed
            mt-8
          "
          style={{
            textShadow: "0 0 10px rgba(0,0,0,0.2)"
          }}
        >
          Автомероприятия с Telegram-ботом
        </h1>
      </motion.div>

      {/* Добро пожаловать */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <div className="relative rounded-2xl p-[2px] overflow-hidden shadow-lg">
          <div className="relative z-10 bg-white/90 text-black rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Добро пожаловать!</h2>
            <p className="text-gray-700 text-center">
              Наш Telegram-бот поможет вам легко создавать мероприятия, регистрировать автомобили и управлять заявками. Всё просто, удобно и интуитивно понятно.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Карточки */}
      <div className="mb-10 w-full max-w-6xl px-4 flex flex-col md:flex-row justify-center gap-6">
        {features.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white/85 rounded-2xl shadow-lg p-6 w-full md:w-1/3 transform transition duration-300 hover:-translate-y-2"
          >
            <h3 className="neon-blue text-lg font-bold text-blue-900 mb-2">{card.title}</h3>
            <p className="neon-blue text-black">{card.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div>
        <p className="mt-7 text-lg max-w-2xl mx-auto text-white text-center">
          Создавайте уникальные события, объединяйте автолюбителей и управляйте встречами — всё прямо из Telegram.
          <br />
          <span className="block">
            Запустите своё первое автомобильное событие вместе с нашим Telegram-ботом уже сегодня.
          </span>
          ↓↓↓
        </p>

        <a
          href="https://t.me/your_autobot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Перейти в бота
        </a>
      </motion.div>
    </section>
  );
}