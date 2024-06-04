import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  const onFrameContainer1Click = useCallback(() => {
    window.location.href = "mailto:lucash.1707@gmail.com";
  }, []);

  return (
    <div className={`frame-parent5 ${className}`}>
      <div className="lets-talk-about-your-project-parent">
        <h1 className="lets-talk-about-container">
          <p className="lets-talk-about">
            <span className="lets-talk">{`Let’s talk `}</span>
            <span>about</span>
          </p>
          <p className="your-project">
            <span>
              <span className="your-project1">your project</span>
            </span>
          </p>
        </h1>
        <div className="frame-parent6">
          <div className="vector-group">
            <img className="rectangle-icon" alt="" src="/rectangle-2-2.svg" />
            <div className="fill-the-form-parent">
              <div className="fill-the-form">Fill the form</div>
              <img
                className="icon-park-outlinesend"
                loading="lazy"
                alt=""
                src="/iconparkoutlinesend.svg"
              />
            </div>
          </div>
          <div
            className="or-copy-an-email-lucash1707-parent"
            onClick={onFrameContainer1Click}
          >
            <b className="or-copy-an">
              or copy an email: lucash.1707@gmail.com
            </b>
            <img className="vector-icon3" alt="" src="/vector-5.svg" />
          </div>
        </div>
      </div>
      <div className="frame-parent7">
        <div className="frame-parent8">
          <div className="playing-parent">
            <div className="playing">Playing</div>
            <div className="vector-container">
              <img className="vector-icon4" alt="" src="/vector-6.svg" />
              <div className="online">Online</div>
            </div>
          </div>
          <div className="image-8-parent">
            <img className="image-8-icon" alt="" src="/image-8-1@2x.png" />
            <div className="valorant-group">
              <b className="valorant1">VALORANT</b>
              <b className="riot-games">Riot Games</b>
            </div>
          </div>
        </div>
        <div className="frame-parent9">
          <div className="listening-parent">
            <div className="listening">Listening</div>
            <div className="hours-ago-wrapper">
              <div className="hours-ago">3 hours ago</div>
            </div>
          </div>
          <div className="image-11-parent">
            <img
              className="image-11-icon"
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
            <div className="hikari-parent">
              <b className="hikari">Hikari</b>
              <div className="clovis-reyes-vdycd">Clovis Reyes, VDYCD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
