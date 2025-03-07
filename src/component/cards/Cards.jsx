import styles from "./Cards.module.scss";
//import {itemsData} from '../../cardData/CardData';


function Cards(item) {
  //const itemsSlides =  itemsData.slice(1, 2);
  return (
  //
  //itemsSlides.map((item, index) => (
    <>  

      <div className={styles.cardForm}>
      <div>              
                {item.idnum}             
            </div>
        <div className={styles.cardHead}>
          <div className={styles.clientBlock}>
            <button
              className={`${styles.topButton} ${styles.clientButton}`}
            ></button>
            <button
              className={`${styles.warrantyButton} ${styles.clientButton}`}
            ></button>
            <button
              className={`${styles.discountButton} ${styles.clientButton}`}
            ></button>
            <button
              className={`${styles.presentButton} ${styles.clientButton}`}
            ></button>
            <button
              className={`${styles.hitButton} ${styles.clientButton}`}
            ></button>
          </div>
          <div className={styles.productImageBlock}>
            <img
              //src='src\assets\img\tires70.png'
             src={item.img_product}
              className={styles.productImage}
              alt='Tires img'
            />
          </div>
        </div>
        <div className={styles.textForm}>
          <div className={styles.productDescription}>
            <div className={styles.productSpecifications}>
              <span>
                {item.specifications}              
              </span>
            </div>
            <div className={styles.productRating}>
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
                  src='src\assets\icon\winter.png'
                  className={styles.winterImage}
                  alt='Winter img'
                />
                <div className={styles.winterText}>Зимняя</div>
              </div>

              <div className={`${styles.spikeType} ${styles.productTypeItem}`}>
                <img
                  src='src\assets\icon\spike.png'
                  className={styles.spikeImage}
                  alt='Spike img'
                />
                <div className={styles.spikeText}>Шипованная</div>
              </div>

              <div className={`${styles.dirtType} ${styles.productTypeItem}`}>
                <img
                  src='src\assets\icon\dirt.png'
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
            <div className={styles.productQuantityBlock}>
              <button
                className={`${styles.minusButton} ${styles.quantityButton}`}
              >
                
              </button>
              <input className={styles.quantityProduct} type='text' value='4' />
              <button
                className={`${styles.plusButton} ${styles.quantityButton}`}
              >
                
              </button>
            </div>
            <div className={styles.cartButtonBlock}>
              <button className={styles.cartButton}>В корзину</button>
            </div>
            <div className={styles.likeButtonBlock}>
              <button className={styles.likeButton}></button>
            </div>
          </div>

          <div className={styles.oneClickBlock}>
            <button className={styles.oneClickButton}>Купить в 1 клик</button>
          </div>
        </div>
      </div>
    
    </>
 // ))
  );
}

export default Cards;
