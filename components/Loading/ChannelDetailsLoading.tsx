import styles from "@/styles/loading/ChannelDetailsLoading.module.scss";

const ChannelDetailsLoading = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["thumbnail"]}></div>

      <div className={styles["details"]}>
        <div className={styles["image"]}></div>
        <div className={styles["info-wrapper"]}>
          <div className={styles["channel-name"]}></div>
          <ul className={styles["statistics"]}>
            <li className={styles["statistics-content"]}></li>
            <li className={styles["statistics-content"]}></li>
            <li className={styles["statistics-content"]}></li>
            <li className={styles["statistics-content"]}></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChannelDetailsLoading;
