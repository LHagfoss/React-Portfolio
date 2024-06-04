import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <FrameComponent5
        image6="/image-6@2x.png"
        howDoesModernWebsiteDesig="How does modern website design attract "
        moreClients="more clients?"
        webdesign="Webdesign"
      />
      <FrameComponent5
        image6="/spotifysmartshufflethumbnail-1@2x.png"
        howDoesModernWebsiteDesig="Discover New Music with Spoitify’s Smart "
        moreClients="Shuffle!"
        webdesign="Tech News"
        propTextDecoration="unset"
      />
      <div className={styles.image5Parent}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.whatDoesAPrperlyDesignerFParent}>
              <p className={styles.whatDoesAContainer}>
                <span
                  className={styles.whatDoesA}
                >{`What does a prperly designer filtration `}</span>
                <span className={styles.systemLookLike}>
                  system look like? - Kinderkraft e-commerce
                </span>
              </p>
              <div className={styles.caseStudy}>Case Study</div>
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
