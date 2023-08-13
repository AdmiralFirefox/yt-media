import styles from "@/styles/loaders/LoadingSearchSpinner.module.scss";

interface LoadingSpinnerProps {
  loadingRef: (node?: Element | null | undefined) => void;
}

const LoadingSearchSpinner = ({ loadingRef }: LoadingSpinnerProps) => {
  return (
    <div className={styles["loader"]} ref={loadingRef}>
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
