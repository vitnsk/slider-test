
import { useSwiper } from 'swiper/react';
import styles from "./ArrowButton.module.scss";

function ArrowButton() {
  const swiper = useSwiper();
  return (
    <>
      <div className={styles.arrowsButtonsBlock}>
        <button
          onClick={() => swiper.slideLeft()}
          className={`${styles.arrowButtonLeft} ${styles.arrowsButtons}`}
        ></button>
        <button
         onClick={() => swiper.slideRight()}
          className={`${styles.arrowButtonRight} ${styles.arrowsButtons}`}
        ></button>
      </div>
    </>
  );
}

export default ArrowButton;
