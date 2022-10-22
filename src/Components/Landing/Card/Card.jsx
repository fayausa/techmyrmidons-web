import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={image} alt="" className={styles.card_img} />
      </div>
      <p className={styles.card_heading}>{name}</p>
      <p className={styles.card_description}>
        Designed to give you a comprehensive understanding of the current
        Android ecosystem, resouces & learning paths.
      </p>
      <p className={styles.explore_more}>Explore More</p>
    </div>
  );
};

export default Card;
