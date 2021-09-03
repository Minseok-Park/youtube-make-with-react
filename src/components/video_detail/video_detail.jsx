import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({
  video,
  video: { snippet, channelItem, statistics },
}) => {
  const firstView = channelItem.publishedAt.slice(0, 10);

  const hitCount = () => {
    const count = statistics.viewCount;

    if (count >= 10000) {
      return count.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    return count;
  };
  return (
    <section className={styles.detail}>
      <div className={styles.video_container}>
        <iframe
          type="text/html"
          width="100%"
          height="600px"
          title="youtube video"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.detail_title}>
        <h3>{snippet.title}</h3>
        <div className={styles.detail_content}>
          <span>
            조회수 {hitCount()}회 최초 공개 {firstView}
          </span>
          <span className={styles.detail_menu}>
            <i className={`${styles.detail_icon} far fa-thumbs-up`}></i>
            <i className={`${styles.detail_icon} far fa-thumbs-down`}></i>
            <i className={`${styles.detail_icon} fas fa-share`}></i>
            <i className={`${styles.detail_icon} fas fa-ellipsis-h`}></i>
          </span>
        </div>

        <ul className={styles.channel}>
          <li>
            <img
              className={styles.channel_thumbnail}
              src={channelItem.thumbnails.medium.url}
              alt="채널 썸네일"
            />
          </li>
          <li>
            <strong>{channelItem.title}</strong>
            <p>{statistics.subscriberCount}</p>
            <p>{channelItem.description}</p>
          </li>
        </ul>
      </div>

      <div></div>
    </section>
  );
};

export default VideoDetail;
