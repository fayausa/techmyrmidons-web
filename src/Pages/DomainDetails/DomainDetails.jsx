import styles from "./DomainDetails.module.css";
import { useParams } from "react-router-dom";

import Card from "../../Components/DomainDetails/Card/Card";
import SectionBtn from "../../Components/DomainDetails/SectionBtn/SectionBtn";

import Topics2021 from "../../data/android/2021.json";
import People from "../../data/android/follow.json";
import { useEffect, useState } from "react";

import Domains from "../../data/home.json";

const DomainDetails = () => {
  let { id } = useParams();
  const [domain, setDomain] = useState();
  const [years, setYears] = useState();

  useEffect(() => {
    setDomain(
      Domains.home.filter(function (domain) {
        return domain.folderName === id;
      })
    );
    import(`../../data/${id}/years.json`).then((response) =>
      setYears(response.years)
    );
  }, []);

  if (domain) {
    return (
      <>
        <header>
          <div className={styles.container}>
            <h1>{domain && domain[0].technology} Myrmidon</h1>
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
              <div className={styles.years}>
                {years &&
                  years.map((year) => (
                    <p className={styles.year}>{year.year}</p>
                  ))}
              </div>
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
  } else {
    return <p>Domain Not Found!</p>;
  }
};

export default DomainDetails;
