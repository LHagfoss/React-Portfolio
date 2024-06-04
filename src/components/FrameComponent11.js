import ServiceCategories from "./ServiceCategories";
import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`project-grid-wrapper ${className}`}>
      <div className="project-grid">
        <div className="services2">
          <div className="what-i-can-do-to-consistently-group">
            <p className="what-i-can-container1">
              <span className="what-i-can-do-to-consistently1">
                <span className="what-i-can1">What I can do to </span>
                <span>consistently and effectively</span>
                <span> </span>
              </span>
              <span className="support-your-business1">
                <span>support your business?</span>
              </span>
            </p>
            <ServiceCategories
              image2="/image-21@2x.png"
              branding="Branding"
              iLoveCreatingBrandingEspe="I love creating branding, especially logos, icons and key visuals. I designed branding elements for e.g. for Lidl, Anna Lewandowska, Kindekraft, John Dog and many other brands."
            />
            <ServiceCategories
              image2="/image-31@2x.png"
              branding="UX Design"
              iLoveCreatingBrandingEspe="I create lo-fi mock-ups, conduct internal workshops, analyze data, create personas, and propose A/B test hypotheses to improve sales effectiveness."
              propPadding="var(--padding-11xl) var(--padding-14xl) var(--padding-8xl) var(--padding-7xl)"
              propHeight="unset"
              propHeight1="153px"
            />
            <ServiceCategories
              image2="/image-41@2x.png"
              branding="UI Design"
              iLoveCreatingBrandingEspe="I am proficient in Figma, Adobe XD, and Atomic Design for design systems. I review developer implementations, analyze data, and apply my years of graphic design experience to create modern, aesthetic User Interfaces."
              propPadding="var(--padding-11xl) var(--padding-16xl) var(--padding-17xl) var(--padding-8xl)"
              propHeight="238px"
              propHeight1="222px"
            />
          </div>
        </div>
        <div className="insights-content">
          <div className="insight-container">
            <div className="latest-insights2">
              <div className="insight-title">
                <h1 className="latest-insights3">
                  <span>
                    <span>Latest</span>
                    <span className="insights2"> Insights</span>
                  </span>
                </h1>
                <div className="placeholder">(3)</div>
              </div>
            </div>
            <div className="insight-navigation">
              <div className="insight-navigation-icons-wrapper">
                <div className="insight-navigation-icons">
                  <img
                    className="eparrow-up-bold-icon2"
                    alt=""
                    src="/eparrowupbold-11@2x.png"
                  />
                </div>
              </div>
              <div className="insight-navigation-inner">
                <div className="eparrow-up-bold-wrapper">
                  <img
                    className="eparrow-up-bold-icon3"
                    alt=""
                    src="/eparrowupbold-21@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="insight-content">
            <img
              className="image-6-icon1"
              loading="lazy"
              alt=""
              src="/image-61@2x.png"
            />
            <div className="insight-preview">
              <div className="insight-details">
                <img
                  className="spotify-smart-shuffle-thumbnai-icon"
                  alt=""
                  src="/spotifysmartshufflethumbnail-1@2x.png"
                />
              </div>
              <div className="insight-preview-container-wrapper">
                <div className="insight-preview-container">
                  <div className="insight-preview-elements">
                    <div className="discover-new-music-container">
                      <p className="discover-new-music">{`Discover New Music with Spoitify’s Smart `}</p>
                      <p className="shuffle">Shuffle!</p>
                    </div>
                    <div className="tech-news">Tech News</div>
                  </div>
                  <img
                    className="insight-direction-icons"
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="insight-preview1">
              <div className="image-5-wrapper">
                <img className="image-5-icon1" alt="" src="/image-5@2x.png" />
              </div>
              <div className="insight-preview-inner">
                <div className="frame-parent12">
                  <div className="what-does-a-prperly-designer-f-group">
                    <p className="what-does-a-container1">
                      <span className="what-does-a1">{`What does a prperly designer filtration `}</span>
                      <span className="system-look-like1">
                        system look like? - Kinderkraft e-commerce
                      </span>
                    </p>
                    <div className="case-study1">Case Study</div>
                  </div>
                  <img className="vector-icon8" alt="" src="/vector-2.svg" />
                </div>
              </div>
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
