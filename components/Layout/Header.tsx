import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Check if the user is on the home page
  const isHomePage = pathname === "/";

  // Function to toggle language
  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "pt-br" : "en";
    console.log("Current Locale:", locale);
    console.log("New Locale:", newLocale);

    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <header className="py-8">
      <div className={`flex items-center ${!isHomePage ? "justify-between" : "justify-end"}`}>
        {/* Go Back Button */}
        {!isHomePage && (
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go Back
          </button>
        )}

        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="mx-4 rounded-md px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {locale === "en" ? "PT-BR" : "EN"}
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
          type="button"
          className="rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
