import React from "react";
import Card from "../../Components/Landing/Card/Card";
import styles from "./Landing.module.css";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.first_view_container} style={{height: "100vh"}}>
          <nav>
            <Link to="/">
              <img
                src="/assets/tm-logo.png"
                className="Navbar_image"
                alt="logo"
              ></img>
            </Link>
            <ul>
              <li>
                <a href="#cards">Domains</a>
              </li>
            </ul>
          </nav>
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
                Follow the Techmyrmidons and stay updated in the latest
                Technology
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
              description="Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software."
            />
            <Card
              image="/assets/landing/ios.png"
              name="iOS"
              link="/ios"
              description="iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware."
            />
            <Card
              image="/assets/landing/devops.png"
              name="DevOps"
              link="/devops"
              description="DevOps is a set of practices that combines software development and IT operations."
            />
            <Card
              image="/assets/landing/frontend.png"
              name="Front-End"
              link="/frontend"
              description="
            The term Front-End mainly referes to the User Interface which an user view and interacts with and its working"
            />
            <Card
              image="/assets/landing/blockchain.png"
              name="Blockchain"
              link="/blockchain"
              description="
            A blockchain is a digital ledger or database where encrypted blocks of digital asset data are stored and chained together."
            />
            <Card
              image="/assets/landing/ai.png"
              name="Articial Intelligence"
              link="/ai"
              description="AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks."
            />
            <Card
              image="/assets/landing/arvr.png"
              name="AR/VR"
              link="/arvr"
              description="
            Augmented and virtual reality (AR/VR) are immersive technologies that enable users to experience digitally rendered content."
            />
            <Card
              image="/assets/landing/google.png"
              name="Actions On Google"
              link="/actions-on-google"
              description="
            The Actions console is the web-based tool used for developing Actions for registration, deployment, configuration, and analytics."
            />
            <Card
              image="/assets/landing/qa.png"
              name="QA"
              link="/qa"
              description="Quality assurance (QA) is any systematic process of determining whether a product or service meets specified requirements."
            />
          </div>
        </div>

        <div className={styles.cw_text}>© Copyright 2022 Tech Myrmidons</div>
      </div>
    </>
  );
};

export default Landing;
