import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={`mdiimagefiltercenterfocusstron-wrapper ${className}`}>
      <div className="mdiimagefiltercenterfocusstron">
        <div className="parent">
          <img
            className="icon"
            loading="lazy"
            alt=""
            src="/rectangle-3@2x.png"
          />
          <img
            className="social-icon"
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
        <div className="mdiimagefiltercenterfocusstron1">
          <div className="div1">
            <img
              className="child"
              loading="lazy"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className="bxbxlfacebook-parent">
              <img
                className="bxbxlfacebook-icon"
                loading="lazy"
                alt=""
                src="/rectangle-5@2x.png"
              />
              <img className="frame-inner" alt="" src="/rectangle-6-1@2x.png" />
            </div>
          </div>
          <img
            className="mdiimagefiltercenterfocusstron-child"
            alt=""
            src="/rectangle-5-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
