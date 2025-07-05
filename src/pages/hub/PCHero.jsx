import React, { useState } from "react";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
import HubBackground from "../../components/HubBackground";
import pngIcon from "./tg-icon.png";
import gifIcon from "./tg-icon.gif";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
    <>
      {!isLoaded && <Loader />}

      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-start text-center px-6 py-20"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        <HubBackground onLoaded={() => setIsLoaded(true)} />

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
              via-orange-500
              to-yellow-500
              bg-clip-text
              text-transparent
              animate-gradient-x
              leading-relaxed
              mt-8
              drop-shadow-[0_0_15px_rgba(255,100,0,0.5)]
            "
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
          <div className="
            max-w-3xl
            mx-auto
            p-1
            rounded-2xl
            bg-gradient-to-r
            from-red-500
            via-orange-500
            to-yellow-500
            shadow-lg
            "
          >
            <div className="
              bg-white/90
              text-black
              rounded-2xl
              p-8
              "
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Добро пожаловать!</h2>
              <p className="text-Black text-center">
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
              className="    
                bg-gradient-to-br
                from-pink-100
                to-purple-200
                rounded-2xl
                shadow-xl
                p-6
                w-full
                md:w-1/3
                transform
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                  mb-2
                  text-gray-800
                  hover:text-blue-600
                  transition
                  duration-300
                "

              >
                {card.title}
              </h3>
              <p className="text-black">{card.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div>
          <p className="
            mt-7
            text-lg
            max-w-2xl
            mx-auto
            text-center
            text-white
            drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]
            drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]
            drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]
          ">
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
            className="    
              mt-3
              inline-flex
              items-center
              px-6
              py-3
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              font-semibold
              rounded-lg
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              hover:scale-105
              select-none
              relative
              text-center
            "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={hovered ? gifIcon : pngIcon}
              alt="Telegram"
              className={`mr-3 transition-all duration-300 ${
                hovered ? "w-10 h-10" : "w-5 h-5"
              }`}
            />
               Перейти в бота   
          </a>
        </motion.div>
      </section>
    </>
  );
}
