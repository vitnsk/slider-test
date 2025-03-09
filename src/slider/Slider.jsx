import { useState, useEffect } from "react";
import Cards from "../component/cards/Cards";
import ArrowButton from "../component/arrowButton/ArrowButton";
import { itemsData } from "../cardData/CardData";
import useMedia from "../hooks/useMedia";
import styles from "./Slider.module.scss";

function Slider() {
  const [count, setCount] = useState(0);
  const [startSlide, setStartSlide] = useState(0);
  const [allSlides, setAllSlides] = useState(true);

  let numSlide;
  let tp;
  const isDesktop_1920 = useMedia("(min-width: 1920px)");
  const isDesktop_1025 = useMedia("(min-width: 1025px)");
  const isDesktop_481 = useMedia("(min-width: 481px)");
  const isDesktop_321 = useMedia("(min-width: 321px)");

  if (!allSlides) {  
    numSlide = itemsData.length;
    tp=true;
  } else {
    if (isDesktop_1920) {
      numSlide = 5;
    } else if (isDesktop_1025) {
      numSlide = 4;
    } else if (isDesktop_481) {
      numSlide = 3;
    } else if (isDesktop_321) {
      numSlide = 2;
    } else {
      numSlide = 1;
    }
  }

  // const isDesktop_1920 = useMedia("(min-width: 1920px)");
  // const isDesktop_1440 = useMedia("(min-width: 1440px)");
  // const isDesktop_1024 = useMedia("(min-width: 1024px)");
  // const isDesktop_480 = useMedia("(min-width: 480px)");

  // if (!allSlides) {
  //   numSlide = itemsData.length;
  // } else {
  //   if (isDesktop_1920) {
  //     numSlide = 5;
  //   } else if (isDesktop_1440) {
  //     numSlide = 4;
  //   } else if (isDesktop_1024) {
  //     numSlide = 3;
  //   } else if (isDesktop_480) {
  //     numSlide = 2;
  //   } else {
  //     numSlide = 1;
  //   }
  // }


  const moveSlide = (num) => {
    setCount(num);
    if(!tp){
    if (count == -1) {
      if (startSlide > 0) {
        setStartSlide(startSlide - 1);
      } else {
        setStartSlide(0);
      }
    } else if (count == 1) {
      if (startSlide + numSlide < itemsData.length) {
        setStartSlide(startSlide + 1);
      } else {
        setStartSlide(itemsData.length - numSlide);
      }
    }
  }
  else{
    setStartSlide(false);
  }
  };

  useEffect(() => {
    moveSlide();
  });

  const itemsSlides = itemsData.slice(startSlide, startSlide + numSlide);

  return (
    <>
      <div className={styles.sliderMain}>
        <div className={`${styles.sliderTitle} ${styles.sliderTitleMedia}`}>Хиты продаж</div>
        <div className={styles.cardsList}>
          {itemsSlides.map((item, index) => (
            <Cards
              className={styles.cardsForm}
              key={index}
              idnum={item.idnum}
              img_product={item.img_product}
              specifications={item.specifications}
              star_rating={item.star_rating}
              reviews={item.reviews}
              price_1={item.price_1}
              price_main={item.price_main}
            />
          ))}
        </div>

        <div className={styles.slideMoveButtons}>
          <ArrowButton
            chosenSlide={moveSlide}
            className={styles.arrowsButtonsBlock}
          />
          <div className={styles.blockButton}></div>
          <button
            onClick={() => setAllSlides(!allSlides)}
            className={`${styles.lookAllButton} ${styles.lookAllButtonMedia}`}
          >
            {allSlides ? "Смотреть все" : "Сброс"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
