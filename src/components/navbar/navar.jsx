import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <ul className={styles.header}>
      <li className={styles.navbar}>
        <i className="fas fa-bars"></i>
        <a className={styles.logo} href="#">
          <img src="images/logo.png" alt="유튜브 로고" />
          <span className={styles.name}>Youtube</span>
        </a>
        <input type="search" placeholder="검색" className={styles.input} />
        <button type="submit" className={styles.search}>
          <i className="fas fa-search"></i>
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
