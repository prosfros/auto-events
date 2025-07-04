import { Link } from "react-router-dom";
import logo from "./logo.png"; // путь к твоему логотипу

export default function Header() {
  const navItems = [
    { label: "Главная", to: "/" },
    { label: "Инструкция", to: "/help" },
    { label: "О нас", to: "/about" },
    { label: "Профиль", to: "/profile" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur text-white shadow flex justify-between items-start">
      {/* Логотип слева сверху */}
      <div className="p-3">
        <img
          src={logo}
          alt="Логотип"
          className="h-10 w-auto"
        />
      </div>

      {/* Кнопки справа */}
      <nav className="flex gap-2 p-3">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="px-4 py-2 rounded-lg border border-transparent hover:border-white hover:bg-white/10 transition-all"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
