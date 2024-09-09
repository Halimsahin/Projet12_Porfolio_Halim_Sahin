import { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header">
      <div className="header__title">
        <Link to="/" className="no-link-style">
          <h2>halimsahin.com</h2>
        </Link>
      </div>
      <div className="header__button">
        <button onClick={toggleDarkMode}>
          <Sun className="sun__icone" />
        </button>
      </div>
    </header>
  );
};

export default Header;
