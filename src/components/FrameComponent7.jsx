import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  image2,
  branding,
  iLoveCreatingBrandingEspe,
  propPadding,
  propMinWidth,
  propHeight,
  propDisplay,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const brandingStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const iLoveCreatingStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className={`main-theme-wrapper ${className}`} style={frameDivStyle}>
      <div className="main-theme">
        <img className="image-2-icon" loading="lazy" alt="" src={image2} />
        <div className="services1">
          <b className="branding" style={brandingStyle}>
            {branding}
          </b>
          <p className="i-love-creating" style={iLoveCreatingStyle}>
            {iLoveCreatingBrandingEspe}
          </p>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  image2: PropTypes.string,
  branding: PropTypes.string,
  iLoveCreatingBrandingEspe: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent7;
