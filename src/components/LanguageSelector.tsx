import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function LanguageSelector({
  bgColor,
}: {
  bgColor: "black" | "white";
}) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "EN", label: "English" },
    { code: "FR", label: "Français" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 text-lg font-medium transition-colors ${
          bgColor === "black" ? "text-white hover:text-gray-300" : "text-black hover:text-gray-700"
        }`}
      >
        <span>{language}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 right-0 z-50 rounded-md shadow-lg ${
            bgColor === "black"
              ? "bg-black border border-white"
              : "bg-white border border-black"
          }`}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as "EN" | "FR");
                setIsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                language === lang.code
                  ? bgColor === "black"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : bgColor === "black"
                    ? "text-white hover:bg-gray-800"
                    : "text-black hover:bg-gray-100"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
