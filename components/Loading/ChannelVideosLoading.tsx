import styles from "@/styles/loading/ChannelVideosLoading.module.scss";

const ChannelVideosLoading = () => {
  return (
    <ul className={styles["container"]}>
      {[...Array(5)].map((_e, i) => (
        <li className={styles["videos"]} key={i}>
          <div className={styles["thumbnail"]}></div>
          <div className={styles["info-wrapper"]}>
            <div className={styles["title"]}></div>
            <div className={styles["date"]}></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChannelVideosLoading;
