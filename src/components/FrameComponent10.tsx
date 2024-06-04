import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.navbarWrapper, className].join(" ")}>
      <header className={styles.navbar}>
        <a className={styles.lhagfoss}>LHagfoss</a>
        <div className={styles.messageFromOwner}>
          <nav className={styles.services}>
            <a className={styles.about}>About</a>
            <div className={styles.owner}>
              <a className={styles.work}>Work</a>
              <div className={styles.div}>(6)</div>
            </div>
            <div className={styles.ownerName}>
              <a className={styles.insight}>Insight</a>
              <div className={styles.dreamLounge}>(3)</div>
            </div>
            <a className={styles.contact}>Contact</a>
          </nav>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-2.svg" />
            <div className={styles.interiorPic}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <a className={styles.hellolhagfoss}>Hello@LHagfoss</a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent10;
