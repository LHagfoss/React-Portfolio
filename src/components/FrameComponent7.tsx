import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
  image2?: string;
  branding?: string;
  iLoveCreatingBrandingEspe?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
  image2,
  branding,
  iLoveCreatingBrandingEspe,
  propPadding,
  propMinWidth,
  propHeight,
  propDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const brandingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const iLoveCreatingStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={[styles.mainThemeWrapper, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.mainTheme}>
        <img className={styles.image2Icon} loading="lazy" alt="" src={image2} />
        <div className={styles.services}>
          <b className={styles.branding} style={brandingStyle}>
            {branding}
          </b>
          <p className={styles.iLoveCreating} style={iLoveCreatingStyle}>
            {iLoveCreatingBrandingEspe}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
