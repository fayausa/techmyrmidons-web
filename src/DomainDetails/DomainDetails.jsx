import "./DomainDetails.css";

import TopicCard from "../components/TopicCard/TopicCard";
import SectionBtn from "../components/SectionBtn/SectionBtn";

const DomainDetails = () => {
  return (
    <>
      <header>
        <div className='container'>
          <h1>Android Myrmidon</h1>
          <p className='tagline'>
            The best guide for you to start the next world Search Now
          </p>
          <form action='' className='search'>
            <button type='submit'></button>
            <input type='text' placeholder='Search Now' />
          </form>
        </div>
      </header>
      <main>
        <section id='topics'>
          <div className='container'>
            <div className='cards-wrapper'>
              <TopicCard />
              <TopicCard />
              <TopicCard />
              <TopicCard />
              <TopicCard />
              <TopicCard />
            </div>
            <SectionBtn />
          </div>
        </section>
        <sectoin className='blogs'>
          <div className='container'>
            <h2>Blogs to follow</h2>
          </div>
        </sectoin>
      </main>
    </>
  );
};

export default DomainDetails;
