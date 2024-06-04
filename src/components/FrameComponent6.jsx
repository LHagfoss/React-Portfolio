import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="what-i-can-do-to-consistently-parent">
        <h1 className="what-i-can-container">
          <p className="what-i-can-do-to-consistently">
            <span className="what-i-can">What I can do to </span>
            <span>consistently and effectively</span>
            <span className="span"> </span>
          </p>
          <p className="support-your-business">support your business?</p>
        </h1>
        <div className="main-pic">
          <FrameComponent7
            image2="/image-2@2x.png"
            branding="Branding"
            iLoveCreatingBrandingEspe="I love creating branding, especially logos, icons and key visuals. I designed branding elements for e.g. for Lidl, Anna Lewandowska, Kindekraft, John Dog and many other brands."
          />
          <FrameComponent7
            image2="/image-3@2x.png"
            branding="UX Design"
            iLoveCreatingBrandingEspe="I create lo-fi mock-ups, conduct internal workshops, analyze data, create personas, and propose A/B test hypotheses to improve sales effectiveness."
            propPadding="var(--padding-11xl) var(--padding-14xl) var(--padding-55xl) var(--padding-7xl)"
            propMinWidth="100px"
            propHeight="93px"
            propDisplay="inline-block"
          />
          <FrameComponent7
            image2="/image-4@2x.png"
            branding="UI Design"
            iLoveCreatingBrandingEspe="I am proficient in Figma, Adobe XD, and Atomic Design for design systems. I review developer implementations, analyze data, and apply my years of graphic design experience to create modern, aesthetic User Interfaces."
            propPadding="var(--padding-11xl) var(--padding-13xl) var(--padding-55xl) var(--padding-8xl)"
            propMinWidth="92px"
            propHeight="93px"
            propDisplay="inline-block"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
