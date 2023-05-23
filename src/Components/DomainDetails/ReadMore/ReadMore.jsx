import React from "react";
import "./ReadMore.css";

export default function ReadMore({
  heading,
  description,
  link,
  modal,
  setModal,
}) {
  const toggleModal = () => {
    setModal(!modal);
    console.log(description)
  };

  return (
    <>
      <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2 className="heading">{heading}</h2>
          <p className="description">{description}</p>

          <a href={link} target="_blank" rel="noopener noreferrer">
            <p className="link">{link}</p>
          </a>

          <button className="close-modal" onClick={toggleModal}>
            &#x2716;
          </button>
        </div>
      </div>
    </>
  );
}
