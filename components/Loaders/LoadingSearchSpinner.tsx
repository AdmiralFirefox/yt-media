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

export default LoadingSearchSpinner;
