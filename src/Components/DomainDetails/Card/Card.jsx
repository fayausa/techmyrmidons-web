import { useState, useEffect } from "react";
import ReadMore from "../ReadMore/ReadMore";
import "./Card.css";

const Card = ({
  id,
  title,
  desc,
  photo,
  link = "#",
  linkText = "Read More",
}) => {
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className='topic-card'>
      {photo && (
        <div className='img-wrapper'>
          <img
            src={require(`../../../data/${id}/images/${photo}`)}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = require("../../../assets/common/avatar.jpg");
            }}
          />
        </div>
      )}
      {title && <h2>{title}</h2>}
      {desc && <p>{desc}</p>}
      {desc && (
        <div>
          <span onClick={() => setModal(true)} className='link-text'>
            {linkText}
          </span>

          <svg
            className='svg-image'
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
        </div>
      )}
      {!desc && link && (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <div>
            <span onClick={() => setModal(true)} className='link-text'>
              {linkText}
            </span>
            <svg
              className='svg-image'
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
          </div>
        </a>
      )}
      {title && link && desc && modal && (
        <ReadMore
          heading={title}
          description={desc}
          link={link}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

export default Card;
