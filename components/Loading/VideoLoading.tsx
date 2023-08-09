import styles from "@/styles/loading/VideoLoading.module.scss";

const VideoLoading = () => {
  return (
    <main className={styles["container"]}>
      <div className={styles["description"]}>
        <div className={styles["video"]}></div>
        <div className={styles["description-wrapper"]}>
          <div className={styles["channel"]}></div>
          <div className={styles["description-content"]}></div>
        </div>
      </div>
      <ul className={styles["suggestion"]}>
        {[...Array(4)].map((_e, i) => (
          <li className={styles["card"]} key={i}>
            <div className={styles["thumbnail"]}></div>
            <div className={styles["content"]}>
              <div className={styles["content-1"]}></div>
              <div className={styles["content-2"]}></div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default VideoLoading;
