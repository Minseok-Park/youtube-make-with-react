import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AsideMenu from "./components/aside_menu/aside_menu";
import Navbar from "./components/navbar/navar";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Navbar onSearch={search} />
      </header>
      <section className={styles.container}>
        <aside className={styles.aside}>
          <AsideMenu />
        </aside>
        <div className={styles.content}>
          <VideoList videos={videos} />
        </div>
      </section>
    </div>
  );
}

export default App;
