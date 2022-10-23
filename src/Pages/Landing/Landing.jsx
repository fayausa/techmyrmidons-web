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
            <a href="#cards">
              <span className={styles.get_started}>Get Started </span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.explore_view_container}>
        <div className={styles.explore_view}>
          <p className={styles.ev_heading}>Domains To Explore</p>
          <p className={styles.ev_tagline}>
            The best guide for you to start the next world
          </p>
          {/* <button className={styles.search_button}>Search Now</button> */}
        </div>
      </div>

      <div className={styles.cards_view_container}>
        <div id="cards" className={styles.cards_view}>
          <Card
            image="/assets/landing/android.png"
            name="Android"
            link="/android"
          />
          <Card image="/assets/landing/ios.png" name="iOS" link="/ios" />
          <Card
            image="/assets/landing/devops.png"
            name="DevOps"
            link="/android"
          />
          <Card
            image="/assets/landing/frontend.png"
            name="Front-End"
            link="/frontend"
          />
          {/* <Card
            image="/assets/landing/backend.png"
            name="Back-End"
            link="/android"
          /> */}
          <Card
            image="/assets/landing/blockchain.png"
            name="Blockchain"
            link="/blockchain"
          />
          <Card
            image="/assets/landing/ai.png"
            name="Articial Intelligence"
            link="/ai"
          />
          <Card image="/assets/landing/arvr.png" name="AR/VR" link="/arvr" />
          <Card
            image="/assets/landing/google.png"
            name="Actions On Google"
            link="/actions-on-google"
          />
          <Card image="/assets/landing/qa.png" name="QA" link="/qa" />
        </div>
      </div>

      <div className={styles.cw_text}>© Copyright 2022 Tech Myrmidons</div>
    </div>
  );
};

export default Landing;
