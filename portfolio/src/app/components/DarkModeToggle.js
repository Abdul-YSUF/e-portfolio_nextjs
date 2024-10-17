"use client";
import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isNight, setIsNight] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/assets/ald-black.webp");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "nuit") {
      setIsNight(true);
      document.body.classList.add("nuit");
    } else {
      document.body.classList.remove("nuit");
    }
  }, []);

  useEffect(() => {
    setLogoSrc(isNight ? "/assets/ald-white.webp" : "/assets/ald-black.webp");
    document.body.classList.toggle("nuit", isNight);
    localStorage.setItem("theme", isNight ? "nuit" : "jour");
  }, [isNight]);

  const toggleTheme = () => {
    setIsNight((prevIsNight) => !prevIsNight);
  };

  return { isNight, logoSrc, toggleTheme };
}
