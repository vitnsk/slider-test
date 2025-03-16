import {useState} from "react";
import styles from "./Cards.module.scss";
//import {itemsData} from '../../cardData/CardData';


function Cards(item) {

  let [counter, setCounter]= useState(4);
  let plusCounter =()=>{
     if(counter<100)
     {
    setCounter(Number(counter)+1);
   }
  };
  let minusCounter = () => {
     if(counter>0)
     {
      setCounter(counter - 1);
     }
  }
 let counterChange = (e)=>{
   setCounter(e.target.value);
  }
  //const itemsSlides =  itemsData.slice(1, 2);

  return (

  //
  //itemsSlides.map((item, index) => (
    <>  

      <div className={`${styles.cardForm} ${styles.cardFormMedia}`}>
      <div>              
                {item.idnum}             
            </div>
        <div className={styles.cardHead}>
          <div className={styles.clientBlock}>
            <div
              className={`${styles.topIcon} ${styles.goodsIcon}`}
            ></div>
            <div
              className={`${styles.warrantyIcon} ${styles.goodsIcon}`}
            ></div>
            <div
              className={`${styles.discountIcon} ${styles.goodsIcon}`}
            ></div>
            <div
              className={`${styles.presentIcon} ${styles.goodsIcon}`}
            ></div>
            <div
              className={`${styles.hitIcon} ${styles.goodsIcon}`}
            ></div>
          </div>
          <div className={styles.productImageBlock}>
            <img
             
             src={item.img_product}
              className={styles.productImage}
              alt='Tires img'
            />
          </div>
        </div>
        <div className={styles.textForm}>
          <div className={styles.productDescription}>
            <div className= {`${styles.productSpecifications} ${styles.productSpecificationsMedia}`}>
              <span>
                {item.specifications}              
              </span>
            </div>
            <div className= {`${styles.productRating} ${styles.productRatingMedia}`}>
              <div className={styles.starRating}>
                <img
                  src={item.star_rating}
                  className={styles.starImage}
                  alt='Star img'
                />
              </div>
             
              <div className={styles.numberReviews}>
                <span>{item.reviews}</span> 
                <span> отзывов</span>
              </div>
            </div>
            <div className={styles.productType}>
              <div className= {`${styles.seasonType} ${styles.productTypeItem}`}>
                <img
                  src='src\assets\icon\winter.svg'
                  className={styles.winterImage}
                  alt='Winter img'
                />
                <div className={styles.winterText}>Зимняя</div>
              </div>

              <div className={`${styles.spikeType} ${styles.productTypeItem}`}>
                <img
                  src='src\assets\icon\spike.svg'
                  className={styles.spikeImage}
                  alt='Spike img'
                />
                <div className={styles.spikeText}>Шипованная</div>
              </div>

              <div className={`${styles.dirtType} ${styles.productTypeItem}`}>
                <img
                  src='src\assets\icon\dirt.svg'
                  className={styles.dirtImage}
                  alt='Dirt img'
                />
                <div className={styles.dirtText}>Грязевая</div>
              </div>
            </div>

            <div className={styles.productPrice}>
              <div className={styles.fistPrice}>{item.price_1}</div>
              <div className={styles.mainPrice}>{item.price_main}</div>
              

            </div>
          </div>

          <div className={styles.productCart}>
            <div  className={`${styles.productQuantityBlock} ${styles.productQuantityBlockMedia}`} >
              <button
                className={`${styles.minusButton} ${styles.quantityButton}`}
                type="button" onClick={minusCounter}
             >
                
              </button>
              <input className={styles.quantityProduct} value={counter} onChange={counterChange} />
              <button
                className={`${styles.plusButton} ${styles.quantityButton}`}
                type="button" onClick={plusCounter}
              >
                
              </button>
            </div>
            <div className={styles.cartButtonBlock}>
              <button className={`${styles.cartButton} ${styles.cartButtonMedia}`}>В корзину</button>
            </div>
            <div className={styles.likeButtonBlock}>
              <button className={styles.likeButton}></button>
            </div>
          </div>

          <div className={styles.oneClickBlock}>
            <button className={`${styles.oneClickButton} ${styles.oneClickButtonMedia}`}>Купить в 1 клик</button>
          </div>
        </div>
      </div>
    
    </>
 // ))
  );
}

export default Cards;
