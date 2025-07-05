import React, { useEffect, useState } from "react";

export default function Loader() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Загрузка...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 80); // скорость печати в мс

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-50" />
      <p className="mt-4 font-mono text-lg">{displayedText}</p>
    </div>
  );
}
