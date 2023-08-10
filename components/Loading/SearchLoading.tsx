import styles from "@/styles/loading/SearchLoading.module.scss";

const SearchLoading = () => {
  return (
    <main className={styles["container"]}>
      <ul className={styles["videos"]}>
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

export default SearchLoading;
