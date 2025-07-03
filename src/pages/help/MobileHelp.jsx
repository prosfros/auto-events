import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rawTopics = {
  "Регистрация в боте": `1. Откройте Telegram и перейдите по ссылке в бота.\n2. Нажмите кнопку "Начать" ("Start").\n3. Введите своё имя и фамилию.\n4. Подтвердите регистрацию.`,
  "Регистрация автомобиля": `1. Перейдите в меню "Мои автомобили".\n2. Нажмите "Добавить авто".\n3. Введите марку, модель и год выпуска.\n4. Загрузите фотографии автомобиля.\n5. Сохраните изменения.`,
  "Создание мероприятия": `1. Откройте раздел "Мои мероприятия".\n2. Нажмите "Создать мероприятие".\n3. Заполните данные: название, город, дата, описание.\n4. Загрузите обложку мероприятия (по желанию).\n5. Нажмите "Создать" и поделитесь ссылкой.`,
};

const topics = Object.fromEntries(
  Object.entries(rawTopics).map(([title, content]) => [
    title.toLowerCase().replace(/\s+/g, "-"),
    { title, content },
  ])
);

export default function MobileHelp() {
  const [selected, setSelected] = useState("регистрация-в-боте");

  const handleSelect = (slug) => {
    setSelected(slug);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white text-gray-900 py-10 px-4"
    >
      <div className="w-full max-w-4xl flex flex-col gap-6 relative z-10 rounded-xl p-4 bg-white shadow-lg">
        {/* Список тем */}
        <div className="flex flex-col space-y-3">
          {Object.entries(topics).map(([slug, { title }]) => (
            <button
              key={slug}
              onClick={() => handleSelect(slug)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-300 text-base ${
                selected === slug
                  ? "border-blue-500 text-black shadow"
                  : "border-gray-400 hover:bg-blue-100"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Контент инструкции */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="border border-gray-300 p-5 rounded-lg bg-white shadow whitespace-pre-line"
            >
              <h2 className="text-xl font-bold mb-3 text-blue-500">{topics[selected].title}</h2>
              <p className="text-sm">{topics[selected].content}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
