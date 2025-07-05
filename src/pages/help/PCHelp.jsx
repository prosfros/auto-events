import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HelpBackground from "../../components/HelpBackground";
import Loader from "../../components/Loader";

export default function Help() {
  const rawTopics = {
    "Регистрация в боте": `1. Откройте Telegram и перейдите по ссылке в бота.\n2. Нажмите кнопку "Начать"("Start").\n3. Введите своё имя и фамилию.\n4. Подтвердите регистрацию.`,
    "Регистрация автомобиля": `1. Перейдите в меню "Мои автомобили".\n2. Нажмите "Добавить авто".\n3. Введите марку, модель и год выпуска.\n4. Загрузите фотографии автомобиля.\n5. Сохраните изменения.`,
    "Создание мероприятия": `1. Откройте раздел "Мои мероприятия".\n2. Нажмите "Создать мероприятие".\n3. Заполните данные: название, город, дата, описание.\n4. Загрузите обложку мероприятия (по желанию).\n5. Нажмите "Создать" и поделитесь ссылкой.`,
  };

  const topics = Object.fromEntries(
    Object.entries(rawTopics).map(([title, content]) => [
      title.toLowerCase().replace(/\s+/g, "-"),
      { title, content },
    ])
  );

  const [selected, setSelected] = useState("регистрация-в-боте");
  const [isLoaded, setIsLoaded] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // При смене темы — сбрасываем индекс
  useEffect(() => {
    setCharIndex(0);
    const fullText = topics[selected].content;

    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [selected]);

  const fullText = topics[selected].content;
  const displayedText = fullText.slice(0, charIndex);
  const isTyping = charIndex < fullText.length;

  return (
    <section className="relative min-h-screen flex items-center justify-center text-gray-900 py-20 px-4 md:px-10">
      <HelpBackground onLoaded={() => setIsLoaded(true)} />
      {!isLoaded && <Loader />}
      {isLoaded && (
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 relative z-10 rounded-xl p-6 bg-white bg-opacity-90">
          {/* Список тем */}
          <div className="md:w-1/3 space-y-4">
            {Object.entries(topics).map(([slug, { title }]) => (
              <button
                key={slug}
                onClick={() => setSelected(slug)}
                className={`w-full text-left px-5 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selected === slug
                    ? "border-blue-500 text-black shadow-md"
                    : "border-gray-600 hover:bg-gray-300"
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Контент инструкции */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="leading-relaxed border border-gray-600 p-6 rounded-xl shadow-lg whitespace-pre-line relative italic"
              >
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  {topics[selected].title}
                </h2>
                <p>
                  {displayedText}
                  {isTyping && (
                    <span className="inline-block w-2 h-5 bg-black animate-pulse align-bottom ml-0.5"></span>
                  )}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </section>
  );
}
