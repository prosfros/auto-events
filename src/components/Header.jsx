import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { label: "Главная", to: "/" },
    { label: "Инструкция", to: "/help" },
    { label: "О нас", to: "/about" },
    { label: "Профиль", to: "/profile" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur text-white shadow">
      <div className="w-full py-4 pr-4 flex justify-end gap-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="px-4 py-2 rounded-lg border border-transparent hover:border-white hover:bg-white/10 transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
