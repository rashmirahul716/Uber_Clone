import './Learnmore.css';
import image2 from '../assets/globe.png';
import image85 from '../assets/image85.webp';
import image86 from '../assets/image86.webp';
import image87 from '../assets/image87.webp';
import image88 from '../assets/image88.webp';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image66 from '../assets/loc.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Learnmore() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [answer1, setAnswer1] = useState('');
const [answer2, setAnswer2] = useState('');
const [answer3, setAnswer3] = useState('');
const [answer4, setAnswer4] = useState('');
const [answer5, setAnswer5] = useState('');
const [answer6, setAnswer6] = useState('');
  function frequently(question) {
    if (question === 'q1') {
      setAnswer1(
        answer1
          ? ''
          : 'You can ride with up to 3 friends, so a total of 4 riders including yourself.'
      );
    } else if (question === 'q2') {
      setAnswer2(
        answer2 ? '' : 'You can add as many as 5 total stops (including the final destination) on any ride, whether it’s an UberX or UberXL trip.'
      );
    } else if (question === 'q3') {
      setAnswer3(
        answer3
          ? ''
          : 'When you start a group ride, the app will create an invite link that you can send to your friends. They’ll be added to your ride as soon as they tap the link in their invite.'
      );
    } else if (question === 'q4') {
  setAnswer4(
    answer4
      ? ''
      : 'After starting your trip with the Uber app, you can use a feature to split the cost equally with friends who are sharing the ride with you. A button will appear in the app once you’ve been matched with the driver. This feature can be used midway through the trip and incurs a small fee per rider.'
  );
} else if (question === 'q5') {
      setAnswer5(
        answer5
          ? ''
          : 'Not yet, but we’re working on it. At this time, the feature divides the total cost evenly between all the riders'
      );
    }else if (question === 'q6') {
  setAnswer6(
    answer6
      ? ''
      : 'This feature is currently available to a limited number of users in certain cities.'
  );
}
    
  }

  return (
    <div className="learnmore_page">
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
      <div className="learnmore_subnav_wrapper">
        <h2 className="learnmore_ride_head">Ride</h2>
        <div className="learn_navbar_2">
          <Link to="/Ride"><h4>Request a ride</h4></Link>
          <Link to="/Login"><h4>Reserve a ride</h4></Link>
          <Link to="/Ride"><h4>See prices</h4></Link>
          <Link to="/Explore"><h4 className="learnmore_subnav_active">Explore ride options</h4></Link>
          <Link to="https://www.uber.com/in/en/airports/?uclick_id=7fe18018-d114-4b02-972e-94218fa07391"><h4>Airport rides</h4></Link>
        </div>
      </div>
      <section className="learnmore_hero_section">
        <div className="learn_left">
          <h1>Ride with friends seamlessly</h1>
          <p>Riding with friends just got easier: set up a group ride in the Uber app,invite your friends, and arrive at your destination. Friends who ride together save together.</p>
        </div>
        <div className="learn_right">
          <img src={image85} alt="Friends in car" />
        </div>
      </section>
      <section className="learnmore_features_container">
        <div className="learnmore_features_header">
          <h1>Ride with friends seamlessly</h1>
          <p>Riding with friends just got easier: set up a group ride in the Uber app,invite your friends, and arrive at your destination. Friends who ride together save together.</p>
        </div>
        <div className="learnmore_feature_row">
          <div className="learn_feature_text">
            <h2>Invite friends in a few taps</h2>
            <p>Set up a group ride and invite your friends to join. The Uber app will create a text you can easily share.</p>
          </div>
          <div className="learn_feature_img_wrap">
            <img src={image86} alt="Invite friends phone screen" />
          </div>
        </div>
        <div className="learnmore_feature_row learnmore_feature_reverse">
          <div className="learn_feature_text">
            <h2>Arrive at your destination together</h2>
            <p>Each person you invite will add their pickup or dropoff spot, and your driver will pick them up along the way to your destination.</p>
          </div>
          <div className="learn_feature_img_wrap">
            <img src={image87} alt="Set pickup order screen" />
          </div>
        </div>
        <div className="learnmore_feature_row">
          <div className="learn_feature_text">
            <h2>Save as a group</h2>
            <p> After starting your ride, your group can split the price equally—so in addition to arriving together, you’ll spend less than you would on individual rides. Each rider could save 30% on average by sharing a ride instead of requesting their own.*</p>
          </div>
          <div className="learn_feature_img_wrap">
            <img src={image88} alt="Save as a group split fare" />
          </div>
        </div>
        </section>
        <div className="freq_learn">
          <div className='freq_home'>
          <h2>Frequently asked questions</h2>
           <p
    className="q1" style={{ cursor: "pointer" }}
    onClick={() => frequently("q1")}
>
   How many friends can I ride with?<br></br><br />
    <span>{answer1}</span>
    
</p>
<br/>

<p
    className="q2" style={{ cursor: "pointer" }}
    onClick={() => frequently("q2")}
>
   How many stops can I add?<br></br><br />
  <span>{answer2}</span>
</p>
<br/>

<p
    className="q3" style={{ cursor: "pointer" }}
    onClick={() => frequently("q3")}
>
   How do I invite friends?<br></br><br />
  <span>{answer3}</span>
</p>
<br/>

<p
    className="q4" style={{ cursor: "pointer" }}
    onClick={() => frequently("q4")}
>
    How do I split the cost?<br></br><br />
  <span>{answer4}</span>
</p>
<br/>

<p
    className="q5" style={{ cursor: "pointer" }}
    onClick={() => frequently("q5")}
>
   Does splitting the price take time and distance into account for each person?
    <br></br><br />
  <span>{answer5}</span>
</p><br/>
<p
    className="q6" style={{ cursor: "pointer" }}
    onClick={() => frequently("q6")}
>
 Where can I find the group rides option?
    <br></br><br />
  <span>{answer6}</span>
</p>
<div className='learnmore_disclaimer'>
  <p>
    *Average savings of 30% per rider is based on the average per-rider
    price of a group ride split between 2 riders, compared with the
    average per-rider price of an UberX ride. Savings are not guaranteed.
  </p>
</div>
</div>
</div>

      <footer className="learn_footer_custom">
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

export default Learnmore;
