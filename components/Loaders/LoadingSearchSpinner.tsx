import styles from "@/styles/loaders/LoadingSearchSpinner.module.scss";

interface LoadingSpinnerProps {
  isLoading: boolean;
  loadingRef: (node?: Element | null | undefined) => void;
}

const LoadingSearchSpinner = ({
  isLoading,
  loadingRef,
}: LoadingSpinnerProps) => {
  return (
    <>
      <div style={{ paddingTop: "1em" }} ref={loadingRef}></div>

      <div className={isLoading ? styles["loader"] : ""}>
        <div className={styles["lds-ring"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default LoadingSearchSpinner;
