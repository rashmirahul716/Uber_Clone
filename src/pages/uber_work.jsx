import './uber_work.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import image2 from '../assets/globe.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image66 from '../assets/loc.png';

import image9 from '../assets/car.jpg';
import image10 from '../assets/calender.jpg';
import image11 from '../assets/intercity.png';
import image12 from '../assets/rental_car.jpg';
import image13 from '../assets/bike.jpg';
import image24 from '../assets/arrow.png'; 
import image23 from '../assets/line.png';  

// Uploaded step images & illustrations
import heroWorksImg from '../assets/uber_works.webp';
import workStep1 from '../assets/uber_work_1.webp';
import workStep2 from '../assets/uber_work_2.webp';
import workStep3 from '../assets/uber_work_3.webp';
import workStep4 from '../assets/uber_work4.webp';
import workStep5 from '../assets/uber_work_5.webp';
import requestOnlineImg from '../assets/request_online.webp';
import qrUberApp from '../assets/download_uber_app.webp';
import qrDriverApp from '../assets/download_driver_app.jpg';

function UberWork() {
  const [pickup, setPickup] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
  const [dropoff, setDropoff] = useState('');
    const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="uber_work_page">
      {/* Top Black Navbar */}
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

      {/* Hero: How Uber works */}
      <section className="uber_work_hero_section">
        <div className="uber_work_hero_left">
          <h1>How Uber works</h1>
          <p>
            Understanding how Uber connects riders and drivers can enhance your experience.
            Scroll to learn how the app and website work, or request a ride now by entering your
            pickup and dropoff locations below.
          </p>

          <div className="uber_work_inputs_box">
            <div className="uber_work_input_row">
              <input
                type="text"
                placeholder="Enter location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
          <img src={image24} alt="arrow"  width='25px'/>
            </div>
            <img src={image23} alt="line" width='40px' />
            <div className="uber_work_input_row">
              <input
                type="text"
                placeholder="Enter destination"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              />
            </div>
          </div>

          <Link to={`/Ride?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`}>
            <button className="uber_work_price_btn">See prices</button>
          </Link>
        </div>
        <div className="uber_work_hero_right">
          <img src={heroWorksImg} alt="How Uber works" className="uber_work_hero_img" />
        </div>
      </section>

      {/* Quick Guide Timeline Section */}
      <section className="uber_work_timeline_section">
        <h2>A quick guide to Uber</h2>
        <p className="uber_work_timeline_subtitle">
          Here's how the Uber app and Uber.com connect drivers and riders on demand, step by step:
        </p>

        <div className="uber_work_steps_container">
          {/* Step 1 */}
          <div className="uber_work_step_item">
            <div className="uber_work_step_img_col">
              <img src={workStep1} alt="1. Getting started" />
            </div>
            <div className="uber_work_timeline_bar">
              <span className="uber_work_node">■</span>
              <div className="uber_work_vert_line"></div>
            </div>
            <div className="uber_work_step_content">
              <h3>1. Getting started</h3>
              <p>
                The rider enters their destination into the "Where to?" or "Dropoff location" box,
                reviews each ride option, makes their selection, and confirms the pickup.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="uber_work_step_item">
            <div className="uber_work_step_img_col">
              <img src={workStep2} alt="2. Matching rider and driver" />
            </div>
            <div className="uber_work_timeline_bar">
              <span className="uber_work_node">■</span>
              <div className="uber_work_vert_line"></div>
            </div>
            <div className="uber_work_step_content">
              <h3>2. Matching rider and driver</h3>
              <p>
                A nearby driver accepts the rider's ride request. The rider is automatically notified
                as the driver gets close.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="uber_work_step_item">
            <div className="uber_work_step_img_col">
              <img src={workStep3} alt="3. Picking up" />
            </div>
            <div className="uber_work_timeline_bar">
              <span className="uber_work_node">■</span>
              <div className="uber_work_vert_line"></div>
            </div>
            <div className="uber_work_step_content">
              <h3>3. Picking up</h3>
              <p>
                The driver and the rider verify each other's names and the destination. Then the driver
                starts the ride.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="uber_work_step_item">
            <div className="uber_work_step_img_col">
              <img src={workStep4} alt="4. Taking the trip" />
            </div>
            <div className="uber_work_timeline_bar">
              <span className="uber_work_node">■</span>
              <div className="uber_work_vert_line"></div>
            </div>
            <div className="uber_work_step_content">
              <h3>4. Taking the trip</h3>
              <p>
                The app gives the driver the option to access turn-by-turn directions.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="uber_work_step_item">
            <div className="uber_work_step_img_col">
              <img src={workStep5} alt="5. Leaving ratings and reviews" />
            </div>
            <div className="uber_work_timeline_bar">
              <span className="uber_work_node">■</span>
            </div>
            <div className="uber_work_step_content">
              <h3>5. Leaving ratings and reviews</h3>
              <p>
                At the end of each trip, drivers and riders can <u>rate</u> each other from 1 to 5 stars.
                Riders also have the option to <u>tip</u> directly in the app or online. And in some
                countries, riders can choose to give their <u>driver compliments</u>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suggestions Section */}
      <section className="explore_suggestions_section uber_work_suggestions">
        <h2 className="explore_section_heading">Suggestions</h2>
        <div className="explore_suggestions_grid">
          <div className="explore_sug_card">
            <div className="explore_sug_text">
              <h3>Bike</h3>
              <p>Get affordable motorbike rides in minutes at your doorstep.</p>
              <Link to="/Ride"><button className="explore_details_btn">Details</button></Link>
            </div>
            <div className="explore_sug_image">
              <img src={image13} alt="Bike" />
            </div>
          </div>
          <div className="explore_sug_card">
            <div className="explore_sug_text">
              <h3>Intercity</h3>
              <p>Get convenient, affordable outstation cabs anytime at your door.</p>
              <Link to="/Ride"><button className="explore_details_btn">Details</button></Link>
            </div>
            <div className="explore_sug_image">
              <img src={image11} alt="Intercity" />
            </div>
          </div>
          <div className="explore_sug_card">
            <div className="explore_sug_text">
              <h3>Rentals</h3>
              <p>Request a trip for a block of time and make multiple stops.</p>
              <Link to="/Ride"><button className="explore_details_btn">Details</button></Link>
            </div>
            <div className="explore_sug_image">
              <img src={image12} alt="Rentals" />
            </div>
          </div>
          <div className="explore_sug_card">
            <div className="explore_sug_text">
              <h3>Reserve</h3>
              <p>Reserve your ride in advance so you can relax on the day of your trip.</p>
              <Link to="/Terms"><button className="explore_details_btn">Details</button></Link>
            </div>
            <div className="explore_sug_image">
              <img src={image10} alt="Reserve calendar" />
            </div>
          </div>
        </div>
      </section>

      {/* Request a ride online */}
      <section className="uber_work_online_section">
        <div className="uber_work_online_left">
          <h2>Request a ride online</h2>
          <p>
            You can find a ride online without needing the app. Simply head to the <u>Uber website</u>,
            and you're ready to enjoy the convenience of requesting from your computer or tablet.
          </p>
          <Link to="/Ride">
            <button className="uber_work_online_btn">Learn how to request without the app</button>
          </Link>
        </div>
        <div className="uber_work_online_right">
          <img src={requestOnlineImg} alt="Request a ride online" />
        </div>
      </section>

      {/* It's easier in the apps */}
      <section className="uber_work_apps_section">
        <h2>It's easier in the apps</h2>
        <div className="uber_work_qr_dual_grid">
          <div className="uber_work_qr_box">
            <img src={qrUberApp} alt="Download the Uber app" />
            <div className="uber_work_qr_text">
              <h3>Download the Uber app</h3>
              <p>Scan to download</p>
            </div>
            <span className="uber_work_qr_arrow">→</span>
          </div>
          <div className="uber_work_qr_box">
            <img src={qrDriverApp} alt="Download the Driver app" />
            <div className="uber_work_qr_text">
              <h3>Download the Driver app</h3>
              <p>Scan to download</p>
            </div>
            <span className="uber_work_qr_arrow">→</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="uberworks_footer_custom">
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

export default UberWork;

