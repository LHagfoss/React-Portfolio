import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent ${className}`}>
      <div className="rectangle-div" />
      <div className="frame-parent10">
        <div className="version-parent">
          <div className="version">Version</div>
          <b className="lhagfoss1">{`2024 © LHagfoss `}</b>
        </div>
        <div className="local-time-parent">
          <div className="local-time">Local Time</div>
          <b className="utc1-kristiansand-norway">{`25:15 UTC+1 Kristiansand, Norway `}</b>
        </div>
        <div className="socials-parent">
          <div className="socials">Socials</div>
          <div className="frame-parent11">
            <div className="vector-parent1">
              <img className="vector-icon5" alt="" src="/vector-7.svg" />
              <b className="twitch">Twitch</b>
            </div>
            <div className="vector-parent2">
              <img className="vector-icon6" alt="" src="/vector-8.svg" />
              <b className="youtube1">YouTube</b>
            </div>
            <div className="vector-parent3">
              <img className="vector-icon7" alt="" src="/vector-9.svg" />
              <b className="snapchat">Snapchat</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
