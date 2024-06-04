import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ServiceCategories.css";

const ServiceCategories = ({
  className = "",
  image2,
  branding,
  iLoveCreatingBrandingEspe,
  propPadding,
  propHeight,
  propHeight1,
}) => {
  const serviceCategoriesStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const serviceNameAndDescriptionStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const iLoveCreating1Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className={`service-categories ${className}`}
      style={serviceCategoriesStyle}
    >
      <div className="image-2-parent">
        <img className="image-2-icon1" loading="lazy" alt="" src={image2} />
        <div
          className="service-name-and-description"
          style={serviceNameAndDescriptionStyle}
        >
          <b className="branding1">{branding}</b>
          <p className="i-love-creating1" style={iLoveCreating1Style}>
            {iLoveCreatingBrandingEspe}
          </p>
        </div>
      </div>
    </div>
  );
};

ServiceCategories.propTypes = {
  className: PropTypes.string,
  image2: PropTypes.string,
  branding: PropTypes.string,
  iLoveCreatingBrandingEspe: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default ServiceCategories;
