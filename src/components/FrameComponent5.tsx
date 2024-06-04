import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
  image6?: string;
  howDoesModernWebsiteDesig?: string;
  moreClients?: string;
  webdesign?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
  image6,
  howDoesModernWebsiteDesig,
  moreClients,
  webdesign,
  propTextDecoration,
}) => {
  const webdesignStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={[styles.image6Parent, className].join(" ")}>
      <img className={styles.image6Icon} alt="" src={image6} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.howDoesModernWebsiteDesignParent}>
            <div className={styles.howDoesModernContainer}>
              <p className={styles.howDoesModern}>
                {howDoesModernWebsiteDesig}
              </p>
              <p className={styles.moreClients}>{moreClients}</p>
            </div>
            <a className={styles.webdesign} style={webdesignStyle}>
              {webdesign}
            </a>
          </div>
          <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
