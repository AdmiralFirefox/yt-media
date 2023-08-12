import styles from "@/styles/loaders/LoadingVideoSpinner.module.scss";

interface LoadingSpinnerProps {
  isLoading: boolean;
  loadingRef: (node?: Element | null | undefined) => void;
}

const LoadingVideoSpinner = ({
  isLoading,
  loadingRef,
}: LoadingSpinnerProps) => {
  return (
    <div className={isLoading ? styles["loader"] : ""} ref={loadingRef}>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingVideoSpinner;
