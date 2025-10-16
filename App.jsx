import React, { useState, useEffect } from "react";

export default function ThemeToggle() {
  // Load saved theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme to document body and store in localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        transition: "0.5s ease",
      }}
    >
      <h1>Student Theme Preference</h1>
      <p>Current Theme: {theme.toUpperCase()}</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: theme === "light" ? "#333" : "#ddd",
          color: theme === "light" ? "#fff" : "#000",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}