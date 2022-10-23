import "./DomainDetails.css";

import Card from "../components/Card/Card";
import SectionBtn from "../components/SectionBtn/SectionBtn";

import Topics2021 from "../data/android/2021.json";
import People from "../data/android/follow.json";

const DomainDetails = () => {
  return (
    <>
      <header>
        <div className="container">
          <h1>Android Myrmidon</h1>
          <p className="tagline">
            The best guide for you to start the next world Search Now
          </p>
          <form action="" className="search">
            <button type="submit"></button>
            <input type="text" placeholder="Search Now" />
          </form>
        </div>
      </header>

      <main>
        <section id="topics">
          <div className="container">
            <div className="cards-wrapper">
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

        <section id="blogs">
          <div className="container">
            <h2 className="section-title">Blogs to follow</h2>
            <div className="cards-wrapper">
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
        <section id="people">
          <div className="container">
            <h2 className="section-title">People to follow</h2>
            <div className="cards-wrapper">
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
