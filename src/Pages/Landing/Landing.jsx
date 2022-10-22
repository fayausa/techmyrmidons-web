import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.first_view_container}>
        <div className={styles.first_view}>
          <div className={styles.image_container}>
            <img
              src="/assets/landing/fvimg.png"
              alt=""
              className={styles.fvimage}
            />
          </div>
          <div className={styles.fv_texts}>
            <p className={styles.fv_heading}>Does Technology Amaze you?</p>
            <p className={styles.fv_tagline}>
              Follow the Techmyrmidons and stay updated in the latest Technology
            </p>
            <button className={styles.get_started}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
