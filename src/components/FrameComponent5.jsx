import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  image6,
  howDoesModernWebsiteDesig,
  moreClients,
  webdesign,
  propTextDecoration,
}) => {
  const webdesignStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`image-6-parent ${className}`}>
      <img className="image-6-icon" alt="" src={image6} />
      <div className="frame-wrapper">
        <div className="frame-container">
          <div className="how-does-modern-website-design-parent">
            <div className="how-does-modern-container">
              <p className="how-does-modern">{howDoesModernWebsiteDesig}</p>
              <p className="more-clients">{moreClients}</p>
            </div>
            <a className="webdesign" style={webdesignStyle}>
              {webdesign}
            </a>
          </div>
          <img className="vector-icon1" alt="" src="/vector-2.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  image6: PropTypes.string,
  howDoesModernWebsiteDesig: PropTypes.string,
  moreClients: PropTypes.string,
  webdesign: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default FrameComponent5;
