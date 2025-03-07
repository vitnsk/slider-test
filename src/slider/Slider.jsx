import { useState, useEffect } from "react";
import Cards from "../component/cards/Cards";
import ArrowButton from "../component/arrowButton/ArrowButton";
import { itemsData } from "../cardData/CardData";
import useMedia from "../hooks/useMedia";
import styles from "./Slider.module.css";

function Slider() {
  const [count, setCount] = useState(0);
  const [startSlide, setStartSlide] = useState(0);

  const isDesktop_1920 = useMedia("(min-width: 1920px)");
  const isDesktop_1024 = useMedia("(min-width: 1024px)");
  const isDesktop_480 = useMedia("(min-width: 480px)");
  const isDesktop_320 = useMedia("(min-width: 320px)");

  let numSlide;

  if (isDesktop_1920) {
    numSlide = 5;
  } else if (isDesktop_1024) {
    numSlide = 4;
  } else if (isDesktop_480) {
    numSlide = 3;
  } else if (isDesktop_320) {
    numSlide = 2;
  } else {
    numSlide = 1;
  }

  const moveSlide = (num) => {
    setCount(num);
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
  };
  console.log("count1=");
  console.log(count);
  useEffect(() => {
    moveSlide();
  }, [count]);

  console.log("count=");
  console.log(count);
  console.log("startSlide=");
  console.log(startSlide);
  console.log("endSlide=");
  console.log(startSlide + numSlide);

  const itemsSlides = itemsData.slice(startSlide, startSlide + numSlide);

  return (
    <>
      <div className={styles.sliderMain}>
        <div className={styles.sliderTitle}>Хиты продаж</div>
        <div className={styles.cardsList}>
          {itemsSlides.map((item, index) => (
            <Cards
              className={styles.cardsForm}
              key={index}
              idnum={item.idnum}
              img_product={item.img_product}
              specification={item.specifications}
              star_rating={item.star_rating}
              reviews={item.reviews}
              price_1={item.price_1}
              price_main={item.price_main}
            />
          ))}
        </div>

        <ArrowButton chosenSlide={moveSlide} />
      </div>

     
    </>
  );
}

export default Slider;
