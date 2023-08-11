import Warning from "../Icons/Warning";
import styles from "@/styles/error/ErrorFetchingRequests.module.scss";

const ErrorFetchingRequests = () => {
  return (
    <main className={styles["container"]}>
      <section>
        <Warning width="5em" height="5em" />
        <h1>Something went wrong...</h1>
        <p>
          There seems to be a problem with the API since the API can only handle
          limited requests. Please try to refresh the browser or try again
          later.
        </p>
      </section>
    </main>
  );
};

export default ErrorFetchingRequests;
