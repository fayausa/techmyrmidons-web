import styles from "./DomainDetails.module.css";
import { useParams } from "react-router-dom";

import Card from "../../Components/DomainDetails/Card/Card";
import SectionBtn from "../../Components/DomainDetails/SectionBtn/SectionBtn";

import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";

import Domains from "../../data/home.json";

const DomainDetails = () => {
  let { id } = useParams();
  const [domain, setDomain] = useState();
  const [years, setYears] = useState();
  const [year, setYear] = useState();
  const [localyear, setLocalYear] = useState();
  const [tools, setTools] = useState();
  const [localtools, setLocalTools] = useState();

  const [search, setSearch] = useState("");

  const [blogs, setBlogs] = useState();
  const [people, setPeople] = useState();

  useEffect(() => {
    setDomain(
      Domains.home.filter(function (domain) {
        return domain.folderName === id;
      })
    );

    import(`../../data/${id}/years.json`).then((response) =>
      setYears(response.years)
    );

    import(`../../data/${id}/blog.json`).then((response) => {
      setBlogs(response["blog"]);
    });

    import(`../../data/${id}/follow.json`).then((response) => {
      setPeople(response["follow"]);
    });
  }, []);

  useEffect(() => {
    let result =
      tools &&
      tools.filter((f) =>
        f.title.toLowerCase().startsWith(search.toLowerCase())
      );
    setLocalTools(result);
    console.log(result);
  }, [search]);

  useEffect(() => {
    setYear(years && years[0].year);
  }, [years]);

  useEffect(() => {
    setLocalYear(year);
  }, [year]);

  useEffect(() => {
    setSearch("");
    import(`../../data/${id}/${year}.json`).then((response) =>
      setTools(response[year])
    );
    import(`../../data/${id}/${year}.json`).then((response) =>
      setLocalTools(response[year])
    );
  }, [year]);

  if (domain) {
    return (
      <>
        <div className={styles.navbar_container}>
          <Navbar />
        </div>
        <header>
          <div className={styles.container}>
            <h1>{domain && domain[0].technology} Myrmidon</h1>
            <p className={styles.tagline}>
              The best guide for you to start the next world Search Now
            </p>

            <input
              className={styles.search}
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Now"
            />
          </div>
        </header>

        <main>
          <section id="topics">
            <div className={styles.container}>
              <div className={styles.years}>
                {years &&
                  years.map((year) => (
                    <p
                      onClick={() => setYear(year.year)}
                      className={
                        localyear === year.year
                          ? styles.year_active
                          : styles.year
                      }
                    >
                      {year.year}
                    </p>
                  ))}
              </div>
              <div className={styles.cards_wrapper}>
                {localtools &&
                  localtools.map((tool) => (
                    <Card
                      title={tool.title}
                      desc={tool.description}
                      link={tool.url}
                    />
                  ))}
              </div>
              {/* <SectionBtn /> */}
            </div>
          </section>
          <section id="blogs">
            <div className={styles.container}>
              <h2 className={styles.section_title}>Blogs to follow</h2>
              <div className={styles.cards_wrapper}>
                {blogs &&
                  blogs.map((blog) => (
                    <Card title={blog.author} linkText={blog.link} />
                  ))}
              </div>
              {/* <SectionBtn /> */}
            </div>
          </section>
          <section id="people">
            <div className={styles.container}>
              <h2 className={styles.section_title}>People to follow</h2>
              <div className={styles.cards_wrapper}>
                {people &&
                  people.map((person) => (
                    <Card
                      id={id}
                      photo={person.photo}
                      linkText={person.name}
                      link={person.followLink}
                    />
                  ))}
              </div>
            </div>
          </section>
        </main>

        <div className={styles.cw_text}>© Copyright 2022 Tech Myrmidons</div>
      </>
    );
  } else {
    return <p>Domain Not Found!</p>;
  }
};

export default DomainDetails;
