import { FunctionComponent } from "react";
import styles from "./Exterior.module.css";

export type ExteriorType = {
  className?: string;
};

const Exterior: FunctionComponent<ExteriorType> = ({ className = "" }) => {
  return (
    <div className={[styles.exterior, className].join(" ")}>
      <div className={styles.latestInsights}>
        <h1 className={styles.latestInsights1}>
          <span>Latest</span>
          <span className={styles.insights}> Insights</span>
        </h1>
        <div className={styles.twitter}>(3)</div>
      </div>
      <div className={styles.youtube}>
        <div className={styles.team}>
          <div className={styles.reception}>
            <img
              className={styles.eparrowUpBoldIcon}
              alt=""
              src="/eparrowupbold-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.aboutUs}>
          <div className={styles.instagram}>
            <img
              className={styles.eparrowUpBoldIcon1}
              alt=""
              src="/eparrowupbold-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exterior;
