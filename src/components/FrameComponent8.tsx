import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.mdiimagefiltercenterfocusstronWrapper, className].join(
        " "
      )}
    >
      <div className={styles.mdiimagefiltercenterfocusstron}>
        <div className={styles.parent}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/rectangle-3@2x.png"
          />
          <img
            className={styles.socialIcon}
            loading="lazy"
            alt=""
            src="/rectangle-4@2x.png"
          />
        </div>
        <div className={styles.mdiimagefiltercenterfocusstron1}>
          <div className={styles.div}>
            <img
              className={styles.child}
              loading="lazy"
              alt=""
              src="/rectangle-6@2x.png"
            />
            <div className={styles.bxbxlfacebookParent}>
              <img
                className={styles.bxbxlfacebookIcon}
                loading="lazy"
                alt=""
                src="/rectangle-5@2x.png"
              />
              <img
                className={styles.frameChild}
                alt=""
                src="/rectangle-6-1@2x.png"
              />
            </div>
          </div>
          <img
            className={styles.mdiimagefiltercenterfocusstronChild}
            alt=""
            src="/rectangle-5-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
