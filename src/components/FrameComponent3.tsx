import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  image7?: string;
  vALORANT?: string;
  tacticalShooter?: string;
  june22020?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  image7,
  vALORANT,
  tacticalShooter,
  june22020,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propMinWidth2,
}) => {
  const vALORANTStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tacticalShooterStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propDisplay, propMinWidth1]);

  const june2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.image7Parent}>
          <img
            className={styles.image7Icon}
            loading="lazy"
            alt=""
            src={image7}
          />
          <div className={styles.valorantParent}>
            <b className={styles.valorant} style={vALORANTStyle}>
              {vALORANT}
            </b>
            <div
              className={styles.tacticalShooter}
              style={tacticalShooterStyle}
            >
              {tacticalShooter}
            </div>
          </div>
        </div>
        <div className={styles.june2} style={june2Style}>
          {june22020}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
