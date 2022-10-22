import "./Card.css";
import ArrowTopRight from "../../assets/common/arrow-top-right.svg";

const Card = ({ title, desc, img, link = "#", linkText = "Read More" }) => {
  return (
    <div className='topic-card'>
      {img && (
        <div className='img-wrapper'>
          <img src={img} alt='' />
        </div>
      )}
      {title && <h2>{title}</h2>}
      {desc && <p>{desc}</p>}
      <a href={link}>
        <span className='link-text'>{linkText}</span>
        <span className='link-icon'></span>
      </a>
    </div>
  );
};

export default Card;
