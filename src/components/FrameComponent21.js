import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`width-inner ${className}`}>
      <section className="work-status-parent">
        <Button
          className="work-status"
          startIcon={<img width="8px" height="8px" src="/vector-1.svg" />}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#34383c",
            borderRadius: "76px",
            "&:hover": { background: "#34383c" },
            width: 236,
            height: 48,
          }}
        >
          Available for work
        </Button>
        <p className="im-lucas-hagfoss-container1">
          <span>I'm Lucas Hagfoss a</span>
          <span className="user-experience1">{` user experience & interface designer `}</span>
          <span>
            from Norway, focusing on building functional websites that will
          </span>
          <span className="increase-conversation1">{` increase conversation `}</span>
          <span>and help</span>
          <span className="reach-customers1"> reach customers.</span>
        </p>
      </section>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
