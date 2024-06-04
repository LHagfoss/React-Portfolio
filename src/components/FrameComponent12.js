import PropTypes from "prop-types";
import "./FrameComponent12.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={`frame-footer ${className}`}>
      <footer className="contact-container-wrapper">
        <div className="contact-container">
          <div className="contact-details">
            <div className="contact-call-to-action">
              <h1 className="lets-talk-about-container1">
                <p className="lets-talk-about1">
                  <span className="lets-talk1">{`Let’s talk `}</span>
                  <span>about</span>
                </p>
                <p className="your-project2">
                  <span>
                    <span className="your-project3">your project</span>
                  </span>
                </p>
              </h1>
              <div className="contact-form">
                <div className="form-details">
                  <img
                    className="form-details-child"
                    alt=""
                    src="/rectangle-2-2.svg"
                  />
                  <div className="form-submission">
                    <div className="fill-the-form1">Fill the form</div>
                    <img
                      className="icon-park-outlinesend1"
                      loading="lazy"
                      alt=""
                      src="/iconparkoutlinesend.svg"
                    />
                  </div>
                </div>
                <div className="email-option">
                  <b className="or-copy-an1">
                    or copy an email: lucash.1707@gmail.com
                  </b>
                  <img className="email-icon" alt="" src="/vector-5.svg" />
                </div>
              </div>
            </div>
            <div className="current-activity">
              <div className="activity-details">
                <div className="activity-type">
                  <div className="played">Played</div>
                  <div className="media-status">
                    <img className="status-icon" alt="" src="/vector-51.svg" />
                    <div className="offline">Offline</div>
                  </div>
                </div>
                <div className="media-image">
                  <img
                    className="image-8-icon1"
                    alt=""
                    src="/image-8-11@2x.png"
                  />
                  <div className="media-title">
                    <b className="valorant3">VALORANT</b>
                    <b className="riot-games1">Riot Games</b>
                  </div>
                </div>
              </div>
              <div className="activity-details1">
                <div className="listening-group">
                  <div className="listening1">Listening</div>
                  <div className="vector-parent5">
                    <img className="vector-icon9" alt="" src="/vector-61.svg" />
                    <div className="currently">Currently</div>
                  </div>
                </div>
                <div className="image-11-group">
                  <img
                    className="image-11-icon1"
                    loading="lazy"
                    alt=""
                    src="/image-111@2x.png"
                  />
                  <div className="just-the-two-of-us-parent">
                    <div className="just-the-two-container">
                      <p className="just-the">Just the</p>
                      <p className="two-of-us">Two of Us</p>
                    </div>
                    <div className="grover-washintong-jr-container">
                      <p className="grover-washintong-jr">
                        Grover Washintong, jr.,
                      </p>
                      <p className="bill-withers">Bill Withers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-background" />
            <div className="footer-info">
              <div className="footer-details">
                <div className="version1">Version</div>
                <b className="lhagfoss3">{`2024 © LHagfoss `}</b>
              </div>
              <div className="footer-details1">
                <div className="local-time1">Local Time</div>
                <b className="utc1-kristiansand-norway1">{`25:15 UTC+1 Kristiansand, Norway `}</b>
              </div>
              <div className="socials-container">
                <div className="socials1">Socials</div>
                <div className="social-links">
                  <div className="social-icons">
                    <img className="platform-icon" alt="" src="/vector-7.svg" />
                    <b className="twitch1">Twitch</b>
                  </div>
                  <div className="social-icons1">
                    <img className="vector-icon10" alt="" src="/vector-8.svg" />
                    <b className="youtube2">YouTube</b>
                  </div>
                  <div className="social-icons2">
                    <img className="vector-icon11" alt="" src="/vector-9.svg" />
                    <b className="snapchat1">Snapchat</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
