import "./DomainDetails.css";

import Card from "../components/Card/Card";
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
              <Card
                title='Android Studio 3.0'
                desc='Designed to give you a comprehensive understanding of the current Android ecosystem, resources & learning paths.'
              />
              <Card
                title='Android Studio 3.0'
                desc='Designed to give you a comprehensive understanding of the current Android ecosystem, resources & learning paths.'
              />
              <Card
                title='Android Studio 3.0'
                desc='Designed to give you a comprehensive understanding of the current Android ecosystem, resources & learning paths.'
              />
              <Card
                title='Android Studio 3.0'
                desc='Designed to give you a comprehensive understanding of the current Android ecosystem, resources & learning paths.'
              />
              <Card
                title='Android Studio 3.0'
                desc='Designed to give you a comprehensive understanding of the current Android ecosystem, resources & learning paths.'
              />
              <Card
                title='Android Studio 3.0'
                desc='Designed to give you a comprehensive understanding of the current Android ecosystem, resources & learning paths.'
              />
            </div>
            <SectionBtn />
          </div>
        </section>
        <section id='blogs'>
          <div className='container'>
            <h2 className='section-title'>Blogs to follow</h2>
            <div className='cards-wrapper'>
              <Card
                title="We've officially released our new app. meh!"
                linkText='Read Now'
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText='Read Now'
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText='Read Now'
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText='Read Now'
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText='Read Now'
              />
              <Card
                title="We've officially released our new app. meh!"
                linkText='Read Now'
              />
            </div>
            <SectionBtn />
          </div>
        </section>
        <section id='people'>
          <div className='container'>
            <h2 className='section-title'>People to follow</h2>
            <div className='cards-wrapper'>
              <Card
                linkText='Tony Stark'
                img='https://www.lanacion.com.ar/resizer/iQFInaJdSTVs9IgWMbaR4Sdq_sE=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/H6ETMQNEORB6RE6JHEKAZL52HE.jpg'
              />
              <Card
                linkText='Tony Stark'
                img='https://www.lanacion.com.ar/resizer/iQFInaJdSTVs9IgWMbaR4Sdq_sE=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/H6ETMQNEORB6RE6JHEKAZL52HE.jpg'
              />
              <Card
                linkText='Tony Stark'
                img='https://www.lanacion.com.ar/resizer/iQFInaJdSTVs9IgWMbaR4Sdq_sE=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/H6ETMQNEORB6RE6JHEKAZL52HE.jpg'
              />
              <Card
                linkText='Tony Stark'
                img='https://www.lanacion.com.ar/resizer/iQFInaJdSTVs9IgWMbaR4Sdq_sE=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/H6ETMQNEORB6RE6JHEKAZL52HE.jpg'
              />
              <Card
                linkText='Tony Stark'
                img='https://www.lanacion.com.ar/resizer/iQFInaJdSTVs9IgWMbaR4Sdq_sE=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/H6ETMQNEORB6RE6JHEKAZL52HE.jpg'
              />
              <Card
                linkText='Tony Stark'
                img='https://www.lanacion.com.ar/resizer/iQFInaJdSTVs9IgWMbaR4Sdq_sE=/309x206/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/H6ETMQNEORB6RE6JHEKAZL52HE.jpg'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DomainDetails;
