import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.versionParent}>
          <div className={styles.version}>Version</div>
          <b className={styles.lhagfoss}>{`2024 © LHagfoss `}</b>
        </div>
        <div className={styles.localTimeParent}>
          <div className={styles.localTime}>Local Time</div>
          <b
            className={styles.utc1KristiansandNorway}
          >{`25:15 UTC+1 Kristiansand, Norway `}</b>
        </div>
        <div className={styles.socialsParent}>
          <div className={styles.socials}>Socials</div>
          <div className={styles.frameGroup}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
              <b className={styles.twitch}>Twitch</b>
            </div>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon1} alt="" src="/vector-8.svg" />
              <b className={styles.youtube}>YouTube</b>
            </div>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon2} alt="" src="/vector-9.svg" />
              <b className={styles.snapchat}>Snapchat</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
