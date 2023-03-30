import styles from  "./Loading.module.css";

function Loading () {
  return (
    <div className={styles.loadingContainer}>
      <div className={`${styles.loadingDot} ${styles.firstDot}`}></div>
      <div className={`${styles.loadingDot} ${styles.secondDot}`}></div>
      <div className={`${styles.loadingDot} ${styles.threeDot}`}></div>
    </div>
  );
};

export default Loading;
