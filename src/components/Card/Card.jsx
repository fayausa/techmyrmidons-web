import "./Card.css";
import ArrowTopRight from "../../assets/common/arrow-top-right.svg";

const Card = ({ title, desc, img, link = "#", linkText = "Read More" }) => {
  return (
    <div className='topic-card'>
      {img && (
        <div className='img-wrapper'>
          <img
            src={img}
            alt=''
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              // currentTarget.src = "../../assets/common/avatar.svg";
            }}
          />
        </div>
      )}
      {title && <h2>{title}</h2>}
      {desc && <p>{desc}</p>}
      <a href={link}>
        <span className='link-text'>{linkText}</span>
        <svg
          width='12'
          height='12'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.1711 3.983L2.12965 14.0245L0.47998 12.3748L10.5203 2.33333H1.67115V0H14.5045V12.8333H12.1711V3.983Z'
            fill='#000738'
          />
        </svg>
      </a>
    </div>
  );
};

export default Card;
