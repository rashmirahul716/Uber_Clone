import './Help.css'
import image4 from '../assets/uber.png';
import image2 from '../assets/globe.png';
import { Link } from 'react-router-dom';
import image35 from '../assets/help_rider.png';
import image36 from '../assets/help_driving.png';
import image37 from '../assets/help_eat.png';
import image38 from '../assets/help_merchants.png';
import image39 from '../assets/help_bikes.png';
import image40 from '../assets/help_business.png';
import image41 from '../assets/help_health.png';
import image42 from '../assets/help_freight.png';
import image43 from '../assets/help_fleet.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import { useState } from 'react';
import image50 from '../assets/loc.png'
import image66 from '../assets/loc.png';

function Help() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
  return (
    <div className='help'>
           <header className="home_top_nav">
  <div className="uber_nav_left">
    <Link to="/Uber" className="uber_brand_logo">Uber</Link>

    {/* Desktop navigation */}
    <div className="uber_nav_links">
      <Link to="/Ride" className="uber_nav_link">Ride</Link>
      <Link to="/Login" className="uber_nav_link">Drive</Link>
      <Link to="https://www.uber.com/in/en/business/" className="uber_nav_link">
        Business
      </Link>

      <div className="about_menu">
        <button
          className="uber_nav_linkabout"
          onClick={() => setShowAbout(!showAbout)}
        >
          About <span>{showAbout ? '⌃' : '⌄'}</span>
        </button>

        {showAbout && (
          <div className="about_dropdown">
            <Link to="/Uber_works"><p>How Uber works</p></Link>
            <Link to="https://investor.uber.com/home/default.aspx">
              <p>Investor relations</p>
            </Link>
            <Link to="https://www.uber.com/in/en/blog/"><p>Blog</p></Link>
            <Link to="https://jobs.uber.com/en/"><p>Careers</p></Link>
          </div>
        )}
      </div>

      <Link to="/Daily" className="uber_nav_link">Pass</Link>
    </div>
  </div>

  {/* Desktop right navigation */}
  <div className="home_nav_right">
    <Link to="/En" className="uber_nav_en">
      <img src={image2} alt="globe" width="18px" /> EN
    </Link>
    <Link to="/Help" className="uber_nav_text_link">Help</Link>
    <Link to="/Login" className="uber_nav_text_link">Log in</Link>
    <Link to="/Signup" className="uber_nav_signup_btn">Sign up</Link>
  </div>

  {/* Mobile hamburger button */}
  <button
    className="menu_toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle navigation menu"
  >
    {menuOpen ? '✕' : '☰'}
  </button>

  {/* Mobile dropdown menu */}
  {menuOpen && (
    <div className="mobile_menu">
      <Link to="/Ride" onClick={() => setMenuOpen(false)}>Ride</Link>
      <Link to="/Login" onClick={() => setMenuOpen(false)}>Drive</Link>
      <Link to="https://www.uber.com/in/en/business/"
        onClick={() => setMenuOpen(false)}>Business</Link>

      <button
        className="mobile_about_btn"
        onClick={() => setShowAbout(!showAbout)}
      >
        About <span>{showAbout ? '⌃' : '⌄'}</span>
      </button>

      {showAbout && (
        <div className="mobile_about_dropdown">
          <Link to="/Uber_works" onClick={() => {
            setMenuOpen(false);
            setShowAbout(false);
          }}>How Uber works</Link>

          <Link to="https://investor.uber.com/home/default.aspx"
            onClick={() => setMenuOpen(false)}>Investor relations</Link>

          <Link to="https://www.uber.com/in/en/blog/"
            onClick={() => setMenuOpen(false)}>Blog</Link>

          <Link to="https://jobs.uber.com/en/"
            onClick={() => setMenuOpen(false)}>Careers</Link>
        </div>
      )}

      <Link to="/Daily" onClick={() => setMenuOpen(false)}>Pass</Link>
      <Link to="/En" onClick={() => setMenuOpen(false)}>EN</Link>
      <Link to="/Help" onClick={() => setMenuOpen(false)}>Help</Link>
      <Link to="/Login" onClick={() => setMenuOpen(false)}>Log in</Link>
      <Link to="/Signup" onClick={() => setMenuOpen(false)}>Sign up</Link>
    </div>
  )}
</header>
      <div className='sub_help'>
        <h2>Help</h2>
      </div>
      <h1>Welcome to Uber Support</h1>
      <p className="help_subtitle">We’re here to help. Looking for customer service contact information? Explore support resources for the relevant products below to find the best way to reach out about your issue.</p>
      <div className='image_card_top'>
        <img src={image35} alt="rider" style={{ cursor: "pointer" }}/>
        <img src={image36} alt="driving" style={{ cursor: "pointer" }} />
        <img src={image37} alt="eat" style={{ cursor: "pointer" }}/>
        <img src={image38} alt="merchants" style={{ cursor: "pointer" }}/>
        <img src={image39} alt="bikes" style={{ cursor: "pointer" }}/>
        <img src={image40} alt="business" style={{ cursor: "pointer" }}/>
        <img src={image41} alt="health" style={{ cursor: "pointer" }}/>
        <img src={image42} alt="freight" style={{ cursor: "pointer" }}/>
      </div>
      <div className='image_card_bottom'>
        <img src={image43} alt="fleet" style={{ cursor: "pointer" }}/>
      </div>
                 
      <footer className="help_footer_custom">
                    <div className="footer_top_custom">
                      <Link to="/Uber" className="footer_logo_custom">Uber</Link>
                      <Link to="/Help" className="footer_help_center_custom">Visit Help Center</Link>
                    </div>
                    <div className="footer_columns_custom">
                      <div>
                        <h3>Company</h3>
                        <p>About us</p>
                        <p>Our offerings</p>
                        <p>Newsroom</p>
                        <p>Investors</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Uber One</p>
                      </div>
                      <div>
                        <h3>Products</h3>
                        <p>Ride</p>
                        <p>Drive</p>
                        <p>Eat</p>
                        <p>Uber for Business</p>
                        <p>Uber Freight</p>
                        <p>Gift cards</p>
                        <p>Uber Health</p>
                        <p>Uber Advertising</p>
                      </div>
                      <div>
                        <h3>Global citizenship</h3>
                        <p>Safety</p>
                        <p>Sustainability</p>
                      </div>
                      <div>
                        <h3>Travel</h3>
                        <p>Reserve</p>
                        <p>Airports</p>
                        <p>Hotels</p>
                        <p>Cities</p>
                      </div>
                    </div>
                    <div className="footer_social_location">
                      <div className="footer_social_help">
                        <Link to='https://www.linkedin.com/company/uber/'> <img src={image46} alt="linkedin" /></Link>
                        <Link to="https://www.youtube.com/user/uber">  <img src={image47} alt="youtube" /></Link>
                        <Link to="https://www.instagram.com/uber/"><img src={image48} alt="instagram" /></Link>
                        <Link to="https://x.com/uber"> <img src={image49} alt="twitter" /></Link>
                      </div>
                      <div className="footer_location_help">
                        <button type="button" className="footer_pill_btn"><img src={image2} alt="globe" width="18px" height="auto" />EN</button>
                        <button type="button" className="footer_pill_btn"><img src={image66} alt="location" width="18px" height="auto" />Kochi</button>
                      </div>
                    </div>
                    <div className="footer_apps_help">
                      <Link to="https://play.google.com/store/apps/details?id=com.ubercab"><img src={image44} alt="google_play" className="footer_app_badge" /></Link>
                      <Link to="https://apps.apple.com/app/uber/id368677368"> <img src={image45} alt="app_store" className="footer_app_badge" /></Link>
                    </div>
                    <div className="footer_bottom_help">
                      <p className="footer_copyright_help">© 2026 Uber Technologies Inc.</p>
                      <div className="footer_legal_help">
                        <Link to="https://www.uber.com/legal/privacy/">Privacy</Link>
                        <Link to="https://www.uber.com/accessibility/">Accessibility</Link>
                        <Link to="https://www.uber.com/legal/">Terms</Link>
                      </div>
                    </div>
                  </footer>
    </div>
  );
}

export default Help;
