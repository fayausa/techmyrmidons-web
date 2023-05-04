import React, { useState, useEffect } from "react";
import "./ScrollButton.css";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    visibleScroll();
    window.addEventListener("scroll", visibleScroll);
    return () => window.removeEventListener("scroll", visibleScroll);
  }, []);

  const visibleScroll = () => {
    const current_scroll_pixels = document.documentElement.scrollTop; // retrieves the vertical scroll position of the webpage
    if (current_scroll_pixels > 300) {
      setVisible(true);
    } else if (current_scroll_pixels <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-button">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "flex" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
