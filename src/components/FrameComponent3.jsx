import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  image7,
  vALORANT,
  tacticalShooter,
  june22020,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
}) => {
  const vALORANTStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tacticalShooterStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const june2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`frame-wrapper5 ${className}`}>
      <div className="frame-parent2">
        <div className="image-7-parent">
          <img className="image-7-icon" loading="lazy" alt="" src={image7} />
          <div className="valorant-parent">
            <b className="valorant" style={vALORANTStyle}>
              {vALORANT}
            </b>
            <div className="tactical-shooter" style={tacticalShooterStyle}>
              {tacticalShooter}
            </div>
          </div>
        </div>
        <div className="june-2-" style={june2Style}>
          {june22020}
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  image7: PropTypes.string,
  vALORANT: PropTypes.string,
  tacticalShooter: PropTypes.string,
  june22020: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default FrameComponent3;
