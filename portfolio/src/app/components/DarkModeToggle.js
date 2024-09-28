"use client";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "nuit") {
          setIsNight(true);
          document.body.classList.add("nuit");
        } else {
          document.body.classList.remove("nuit");
        }
      } catch (error) {
        console.error("Erreur d'accès localStorage", error);
      }
    }
  }, []);

  useEffect(() => {
    const logo = document.querySelector(".logo");

    if (logo) {
      logo.src = isNight ? "/assets/ald-white.webp" : "/assets/ald-black.webp";
    }

    document.body.classList.toggle("nuit", isNight);
    localStorage.setItem("theme", isNight ? "nuit" : "jour");
  }, [isNight]);

  const handleToggle = () => {
    setIsNight(!isNight); // Toggle between day and night modes
  };

  return (
    <div className="container">
      <h2 className="titre_mode">{isNight ? "Mode Nuit" : "Mode Jour"}</h2>
      <input
        className="checkbox"
        type="checkbox"
        id="toggle"
        checked={isNight}
        onChange={handleToggle}
        role="switch"
        aria-checked={isNight}
      />
      <label
        htmlFor="toggle"
        className="mode_nuit toggle"
        aria-label="Activer le mode sombre"
      >
        <svg
          className="svg sun--jour"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
        </svg>
        <svg
          className="svg moon--nuit"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path>
        </svg>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
