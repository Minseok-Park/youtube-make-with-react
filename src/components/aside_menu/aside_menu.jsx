import React from "react";
import styles from "./aside_menu.module.css";

const AsideMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.list}>
        <i className="fas fa-home"></i>
        <span className={styles.text}>홈</span>
      </li>

      <li className={styles.list}>
        <i className="fas fa-compass"></i>
        <span className={styles.text}>구독</span>
      </li>

      <li className={styles.list}>
        <i className="fas fa-box-open"></i>
        <span className={styles.text}>보관함</span>
      </li>
    </ul>
  );
};

export default AsideMenu;
