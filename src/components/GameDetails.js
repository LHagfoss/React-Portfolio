import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GameDetails.css";

const GameDetails = ({
  className = "",
  image7,
  vALORANT,
  tacticalShooter,
  june22020,
  propMinWidth,
  propMinWidth1,
  propDisplay,
  propMinWidth2,
}) => {
  const vALORANT1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tacticalShooter1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      display: propDisplay,
    };
  }, [propMinWidth1, propDisplay]);

  const june21Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`game-details ${className}`}>
      <div className="game-info">
        <div className="game-icons-and-names">
          <img className="image-7-icon1" loading="lazy" alt="" src={image7} />
          <div className="game-names-and-genres">
            <b className="valorant2" style={vALORANT1Style}>
              {vALORANT}
            </b>
            <div className="tactical-shooter1" style={tacticalShooter1Style}>
              {tacticalShooter}
            </div>
          </div>
        </div>
        <div className="june-2-1" style={june21Style}>
          {june22020}
        </div>
      </div>
    </div>
  );
};

GameDetails.propTypes = {
  className: PropTypes.string,
  image7: PropTypes.string,
  vALORANT: PropTypes.string,
  tacticalShooter: PropTypes.string,
  june22020: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth2: PropTypes.any,
};

export default GameDetails;
