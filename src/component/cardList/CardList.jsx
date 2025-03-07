
import React, { useContext } from "react";
import Card from "../card/Card";
import { SliderContext } from '../../slider/Slider';
//import styles from './CardList.module.css'

function CardList() {
    const { slideNumber, items } = useContext(SliderContext);

    return (
      <>
      
 <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Card key={index} data={slide} />
      ))}
    </div>
      </>
    )
  }
  
  export default CardList;