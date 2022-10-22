import React from "react";
import Card from "../../Components/Landing/Card/Card";
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

      <div className={styles.explore_view_container}>
        <div className={styles.explore_view}>
          <p className={styles.ev_heading}>Domains To Explore</p>
          <p className={styles.ev_tagline}>
            The best guide for you to start the next world
          </p>
          <button className={styles.search_button}>Search Now</button>
        </div>
      </div>

      <div className={styles.cards_view_container}>
        <div className={styles.cards_view}>
          <Card image="/assets/landing/android.png" name="Android" />
          <Card image="/assets/landing/ios.png" name="iOS" />
          <Card image="/assets/landing/devops.png" name="DevOps" />
          <Card image="/assets/landing/backend.png" name="Back-End" />
          <Card image="/assets/landing/blockchain.png" name="Blockchain" />
          <Card image="/assets/landing/ai.png" name="Articial Intelligence" />
          <Card image="/assets/landing/arvr.png" name="AR/VR" />
          <Card image="/assets/landing/google.png" name="Actions On Google" />
          <Card image="/assets/landing/qa.png" name="QA" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
