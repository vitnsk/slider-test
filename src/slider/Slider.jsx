import { useState, useEffect, useRef } from "react";
import Cards from "../component/cards/Cards";
import ArrowButton from "../component/arrowButton/ArrowButton";
import { itemsData } from "../cardData/CardData";
import useMedia from "../hooks/useMedia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
//import Swiper from 'react-id-swiper';
import "swiper/swiper-bundle.css";
import styles from "./Slider.module.scss";

function Slider() {
  const [_, setInit] = useState();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  // const [count, setCount] = useState(0);
  // const [startSlide, setStartSlide] = useState(0);
  const [allSlides, setAllSlides] = useState(true);
  // //const [animation, setAnimation] = useState(true);

  // let numSlide;
   let params;


  if (!allSlides) {
    params = {

      slidesPerView: 7,

    spaceBetween: 20,
    loop: true,
    modules: [Navigation],

    navigation: {
      nextEl: rightRef.current,
      prevEl: leftRef.current,
    },
    onInit: () => setInit(true),
  };
  }
else{
   params = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        width: 320,
      },
      480: {
        slidesPerView: 2,
        width: 480,
      },
      768: {
        slidesPerView: 3,
        width: 768,
      },
      1024: {
        slidesPerView: 3,
        width: 1024,
      },
      1280: {
        slidesPerView: 4,
        width: 1280,
      },
      1440: {
        slidesPerView: 4,
        width: 1440,
      },
      1920: {
        slidesPerView: 5,
        width: 1920,
      },
    },

    centeredSlides:false,
    spaceBetween: 20,
    loop: true,
    modules: [Navigation],

    navigation: {
      nextEl: rightRef.current,
      prevEl: leftRef.current,
    },
    onInit: () => setInit(true),
  };
  }
  // useEffect(() => {
  //   setInit();
  // });
  return (
    <>
      <div className={`${styles.sliderMain} ${styles.sliderMainMedia}`}>
        <div className={`${styles.sliderTitle} ${styles.sliderTitleMedia}`}>
          Хиты продаж
        </div>
        <div className={styles.cardsList}>
          <Swiper
            {...params}
            className={`${styles.sliderSwiper} ${styles.sliderSwiperMedia}`}
          >
            {itemsData.map((item, index) => (
              <SwiperSlide key={index} className={styles.swiperSlideMedia}>
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
              </SwiperSlide>
            ))}

            {/* <ArrowButton           
            className={styles.arrowsButtonsBlock}
          /> */}
          </Swiper>
        </div>

        <div className={styles.slideMoveButtons}>
          <div className={styles.arrowsButtonsBlock}>
            <button
              ref={leftRef}
              className={`${styles.arrowButtonLeft} ${styles.arrowsButtons}`}
            ></button>
            <button
              ref={rightRef}
              className={`${styles.arrowButtonRight} ${styles.arrowsButtons}`}
            ></button>
          </div>
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
