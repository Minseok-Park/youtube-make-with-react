import React, { useRef } from "react";
import styles from "./navbar.module.css";

const Navbar = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    value && onSearch(value);
    inputRef.current.value = "";
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <ul className={styles.header}>
      <li className={styles.navbar}>
        <i className="fas fa-bars"></i>
        <a className={styles.logo} href="#">
          <img src="images/logo.png" alt="유튜브 로고" />
          <span className={styles.name}>Youtube</span>
        </a>
        <input
          ref={inputRef}
          type="search"
          placeholder="검색"
          className={styles.input}
          onKeyPress={onKeyPress}
        />
        <button type="submit" className={styles.search} onClick={onClick}>
          <i className="fas fa-search"></i>
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
