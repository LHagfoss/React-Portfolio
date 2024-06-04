import PropTypes from "prop-types";
import "./Exterior.css";

const Exterior = ({ className = "" }) => {
  return (
    <div className={`exterior ${className}`}>
      <div className="latest-insights">
        <h1 className="latest-insights1">
          <span>Latest</span>
          <span className="insights"> Insights</span>
        </h1>
        <div className="twitter">(3)</div>
      </div>
      <div className="youtube">
        <div className="team">
          <div className="reception">
            <img
              className="eparrow-up-bold-icon"
              alt=""
              src="/eparrowupbold-1@2x.png"
            />
          </div>
        </div>
        <div className="about-us">
          <div className="instagram">
            <img
              className="eparrow-up-bold-icon1"
              alt=""
              src="/eparrowupbold-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Exterior.propTypes = {
  className: PropTypes.string,
};

export default Exterior;
