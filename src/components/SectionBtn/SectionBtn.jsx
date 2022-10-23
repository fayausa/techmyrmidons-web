import "./SectionBtn.css";
import ArrowTopRight from "../../assets/common/arrow-top-right.svg";

const SectionBtn = ({ onClick }) => {
  return (
    <a className='section-btn' href={onClick}>
      <span>See All</span>
      <img src={ArrowTopRight} alt='' />
    </a>
  );
};

export default SectionBtn;
