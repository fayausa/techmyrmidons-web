import styles from "./DomainDetails.module.css";

import Card from "../../Components/DomainDetails/Card/Card";
import SectionBtn from "../../Components/DomainDetails/SectionBtn/SectionBtn";

import Topics2021 from "../../data/android/2021.json";
import People from "../../data/android/follow.json";

const DomainDetails = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <h1>Android Myrmidon</h1>
          <p className={styles.tagline}>
            The best guide for you to start the next world Search Now
          </p>
          <form action="" className={styles.search}>
            <button type="submit"></button>
            <input type="text" placeholder="Search Now" />
          </form>
        </div>
      </header>

      <main>
        <section id={styles.topics}>
          <div className={styles.container}>
            <div className={styles.cards_wrapper}>
              {Topics2021["2021"].map((topic) => (
                <Card
                  title={topic.title}
                  desc={topic.description}
                  link={topic.url}
                />
              ))}
            </div>
            <SectionBtn />
          </div>
        </section>

        <section id={"blogs"}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>Blogs to follow</h2>
            <div className={styles.cards_wrapper}>
              <Card
                title="We've officially released our new app. meh!"
                linkText="Read Now"
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText="Read Now"
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText="Read Now"
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText="Read Now"
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText="Read Now"
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText="Read Now"
              />
            </div>
            <SectionBtn />
          </div>
        </section>
        <section id={styles.people}>
          <div className={styles.container}>
            <h2 className={styles.section_title}>People to follow</h2>
            <div className={styles.cards_wrapper}>
              {People.follow.map((person) => (
                <Card
                  photo={person.photo}
                  linkText={person.name}
                  link={person.followLink}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DomainDetails;
