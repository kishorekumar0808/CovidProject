import './index.css'

const Footer = () => (
  <footer className="footer">
    <h1 className="logo-title">
      COVID19<span className="highlight-word">INDIA</span>
    </h1>
    <p className="about-footer-line">
      we stand with everyone fighting on the front lines
    </p>
    <div className="social-apps-logo-container">
      <img
        className="git-logo"
        src="https://res.cloudinary.com/dhbyltxcl/image/upload/v1626071013/Vector_becljp.png"
        alt="git-logo"
      />
      <img
        className="instagram-logo"
        src="https://res.cloudinary.com/dhbyltxcl/image/upload/v1626071114/instagram_ihyb2h.png"
        alt="git-logo"
      />
      <img
        className="twitter-logo"
        src="https://res.cloudinary.com/dhbyltxcl/image/upload/v1626070907/Twitter_bird_logo_2012_1_xhqqjq.png"
        alt="git-logo"
      />
    </div>
  </footer>
)

export default Footer
