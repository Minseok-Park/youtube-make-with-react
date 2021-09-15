import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AsideMenu from "./components/aside_menu/aside_menu";
import Navbar from "./components/navbar/navar";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    setSelectedVideo(null);
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
        {selectedVideo ? (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        ) : (
          <aside className={styles.aside}>
            <AsideMenu />
          </aside>
        )}
        <div className={styles.content}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
