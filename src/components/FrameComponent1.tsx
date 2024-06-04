import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const onFrameContainer1Click = useCallback(() => {
    window.location.href = "mailto:lucash.1707@gmail.com";
  }, []);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.letsTalkAboutYourProjectParent}>
        <h1 className={styles.letsTalkAboutContainer}>
          <p className={styles.letsTalkAbout}>
            <span className={styles.letsTalk}>{`Let’s talk `}</span>
            <span>about</span>
          </p>
          <p className={styles.yourProject}>
            <span>
              <span className={styles.yourProject1}>your project</span>
            </span>
          </p>
        </h1>
        <div className={styles.frameGroup}>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-2-2.svg"
            />
            <div className={styles.fillTheFormParent}>
              <div className={styles.fillTheForm}>Fill the form</div>
              <img
                className={styles.iconParkOutlinesend}
                loading="lazy"
                alt=""
                src="/iconparkoutlinesend.svg"
              />
            </div>
          </div>
          <div
            className={styles.orCopyAnEmailLucash1707Parent}
            onClick={onFrameContainer1Click}
          >
            <b className={styles.orCopyAn}>
              or copy an email: lucash.1707@gmail.com
            </b>
            <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.playingParent}>
            <div className={styles.playing}>Playing</div>
            <div className={styles.vectorGroup}>
              <img className={styles.vectorIcon1} alt="" src="/vector-6.svg" />
              <div className={styles.online}>Online</div>
            </div>
          </div>
          <div className={styles.image8Parent}>
            <img className={styles.image8Icon} alt="" src="/image-8-1@2x.png" />
            <div className={styles.valorantParent}>
              <b className={styles.valorant}>VALORANT</b>
              <b className={styles.riotGames}>Riot Games</b>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.listeningParent}>
            <div className={styles.listening}>Listening</div>
            <div className={styles.hoursAgoWrapper}>
              <div className={styles.hoursAgo}>3 hours ago</div>
            </div>
          </div>
          <div className={styles.image11Parent}>
            <img
              className={styles.image11Icon}
              loading="lazy"
              alt=""
              src="/image-11@2x.png"
            />
            <div className={styles.hikariParent}>
              <b className={styles.hikari}>Hikari</b>
              <div className={styles.clovisReyesVdycd}>Clovis Reyes, VDYCD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
