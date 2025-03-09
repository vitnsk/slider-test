
import styles from "./ArrowButton.module.scss";

function ArrowButton({ chosenSlide }) {
  return (
    <>
      <div className={styles.arrowsButtonsBlock}>
        <button
          onClick={() => chosenSlide(-1)}
          className={`${styles.arrowButtonLeft} ${styles.arrowsButtons}`}
        ></button>
        <button
          onClick={() => chosenSlide(1)}
          className={`${styles.arrowButtonRight} ${styles.arrowsButtons}`}
        ></button>
      </div>
    </>
  );
}

export default ArrowButton;
