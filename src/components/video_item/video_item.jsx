import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({
  video,
  video: { snippet, statistics, channelItem },
  onVideoClick,
  display,
}) => {
  const displayType = display === "list" ? styles.list : "";

  const hitCount = () => {
    const count = statistics.viewCount;

    if (count >= 10000) {
      return count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return count;
  };
  return (
    <li
      className={`${styles.video} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <figure className={`${styles.video_img} ${displayType}`}>
        <img
          src={snippet.thumbnails.medium.url}
          alt="유튜브 비디오"
          className={`${styles.video_thumbnail} ${displayType}`}
        />
      </figure>

      <div className={`${styles.video_container} ${displayType}`}>
        <ul className={styles.video_text}>
          <li>
            <img
              src={channelItem.thumbnails.medium.url}
              alt="채널 썸네일"
              className={`${styles.channel_thumbnail} ${displayType}`}
            />
          </li>

          <li className={styles.video_description}>
            <p className={`${styles.video_title} ${displayType}`}>
              {snippet.title}
            </p>
            <p className={`${styles.video_channelTitle} ${displayType}`}>
              {snippet.channelTitle}
            </p>
            <p className={styles.video_hit}>조회수 {hitCount()}회</p>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default VideoItem;
