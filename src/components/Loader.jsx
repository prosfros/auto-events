import React, { useEffect, useState } from "react";

export default function Loader() {
  const fullText = "Подождите пока сайт загрузится...";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setCharIndex(0); // если вдруг что-то перезагрузится
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 30); // скорость печати в мс

    return () => clearInterval(interval);
  }, []);

  const displayedText = fullText.slice(0, charIndex);
  const isTyping = charIndex < fullText.length;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-50" />
      <p className="mt-4 font-mono text-lg flex items-center">
        {displayedText}
        {isTyping && (
          <span className="inline-block w-2 h-5 bg-white animate-pulse ml-1" />
        )}
      </p>
    </div>
  );
}
