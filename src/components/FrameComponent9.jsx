import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`frame-group ${className}`}>
      <div className="shisha-parent">
        <div className="shisha">
          <img className="shisha-child" alt="" src="/rectangle-21.svg" />
          <div className="vi-wrapper">
            <img className="vi-icon" alt="" src="/vector-1.svg" />
          </div>
          <div className="available-for-work">Available for work</div>
        </div>
        <p className="im-lucas-hagfoss-container">
          <span>{`I'm Lucas `}</span>
          <span className="hagfoss">Hagfoss</span>
          <span> a</span>
          <span className="user-experience">{` user experience & interface designer `}</span>
          <span>
            from Norway, focusing on building functional websites that will
          </span>
          <span className="increase-conversation">{` increase conversation `}</span>
          <span>and help</span>
          <span className="reach-customers"> reach customers.</span>
        </p>
      </div>
      <h1 className="worked-with1">
        <span>{`Worked `}</span>
        <span className="with1">with:</span>
      </h1>
      <div className="latest-projects-parent">
        <div className="latest-projects">
          <h1 className="latest-projects1">
            <span>Latest</span>
            <span className="projects1"> Projects</span>
          </h1>
        </div>
        <Button
          className="frame-item"
          endIcon={<img width="20px" height="20px" src="/eparrowupbold.png" />}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "25",
            borderColor: "#fff",
            borderRadius: "88px",
            "&:hover": { borderColor: "#fff" },
            width: 248,
            height: 86,
          }}
        >
          Check out all
        </Button>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
