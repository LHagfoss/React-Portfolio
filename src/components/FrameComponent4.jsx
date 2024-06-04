import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <div className="frame-wrapper1">
        <FrameComponent5
          image6="/image-6@2x.png"
          howDoesModernWebsiteDesig="How does modern website design attract "
          moreClients="more clients?"
          webdesign="Webdesign"
        />
      </div>
      <div className="frame-wrapper2">
        <FrameComponent5
          image6="/spotifysmartshufflethumbnail-1@2x.png"
          howDoesModernWebsiteDesig="Discover New Music with Spoitify’s Smart "
          moreClients="Shuffle!"
          webdesign="Tech News"
          propTextDecoration="unset"
        />
      </div>
      <div className="frame-wrapper3">
        <div className="image-5-parent">
          <img className="image-5-icon" alt="" src="/image-5@2x.png" />
          <div className="frame-wrapper4">
            <div className="frame-parent1">
              <div className="what-does-a-prperly-designer-f-parent">
                <p className="what-does-a-container">
                  <span className="what-does-a">{`What does a prperly designer filtration `}</span>
                  <span className="system-look-like">
                    system look like? - Kinderkraft e-commerce
                  </span>
                </p>
                <div className="case-study">Case Study</div>
              </div>
              <img className="vector-icon2" alt="" src="/vector-2.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
