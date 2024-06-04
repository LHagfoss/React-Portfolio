import PropTypes from "prop-types";
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`navbar-wrapper ${className}`}>
      <header className="navbar">
        <a className="lhagfoss">LHagfoss</a>
        <div className="message-from-owner">
          <nav className="services">
            <a className="about">About</a>
            <div className="owner">
              <a className="work">Work</a>
              <div className="div">(6)</div>
            </div>
            <div className="owner-name">
              <a className="insight">Insight</a>
              <div className="dream-lounge">(3)</div>
            </div>
            <a className="contact">Contact</a>
          </nav>
          <div className="vector-parent">
            <img className="frame-child" alt="" src="/rectangle-21.svg" />
            <div className="interior-pic">
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <a className="hellolhagfoss">Hello@LHagfoss</a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
