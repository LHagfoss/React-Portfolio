import { FunctionComponent } from "react";
import FrameComponent7 from "./FrameComponent7";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.abousUsInner, className].join(" ")}>
      <div className={styles.whatICanDoToConsistentlyParent}>
        <h1 className={styles.whatICanContainer}>
          <p className={styles.whatICanDoToConsistently}>
            <span className={styles.whatICan}>What I can do to </span>
            <span>consistently and effectively</span>
            <span className={styles.span}> </span>
          </p>
          <p className={styles.supportYourBusiness}>support your business?</p>
        </h1>
        <div className={styles.mainPic}>
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

export default FrameComponent6;
