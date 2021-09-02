import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AsideMenu from "./components/aside_menu/aside_menu";
import Navbar from "./components/navbar/navar";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <section className={styles.container}>
        <aside className={styles.aside}>
          <AsideMenu />
        </aside>
        <div className={styles.content}>
          <VideoList videos={videos} />
        </div>
      </section>
    </>
  );
}

export default App;
