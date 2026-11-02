import './Terms.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import image90 from '../assets/image90.webp';
import image91 from '../assets/image91.webp';
import image92 from '../assets/image92.webp';
import image93 from '../assets/image93.webp';
import image94 from '../assets/image94.webp';
import image95 from '../assets/image95.webp';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import video5 from '../assets/video5.mp4';
import image23 from '../assets/line.png';
import image24 from '../assets/arrow.png';
import image2 from '../assets/globe.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image66 from '../assets/loc.png';

function Terms() {
  const [showAbout, setShowAbout] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  const [carouselPage, setCarouselPage] = useState(1);
  return (
    <div className="terms_page">
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
      <section className="terms_hero_section">
        <div className="left_terms">
          <h2>Lock in a little peace of mind with Reserve</h2>
          <p>Get anywhere, stress-free, with flexible pickups and upfront pricing on most trips.¹ Book up to 90 days ahead.</p>
          <div className="terms_input_box">
            <div className="terms_input_row">
              <img className="image23" src={image23} alt="line" width="35px" />
              <input type="search" placeholder="Where from?"  className="from" />
              <img className="image24" src={image24} alt="arrow" height="18px" />
            </div>
            <div className="terms_input_row">
              <input type="search" placeholder="Where to?" className="to" />
            </div>
          </div>
          <Link to="/Login"><button className="price_button">Next</button></Link>
        </div>
        <div className="right_term">
          <video src={video1} autoPlay muted loop width="500" />
        </div>
      </section>
      <section className="terms_feature_section terms_section_when">
        <div className="terms_section_when_header">
          <h1>When you know you’ll need a ride, Reserve</h1>
          <p>Whether you’re preparing for takeoff, need a pickup at a crowded event, or want assurance you’ll have a ride when they’re hard to come by, reserving takes uncertainty out of getting where you need to go.</p>
        </div>
        <div className="terms_two_col">
          <div className="left_term2">
            <video src={video2} autoPlay muted loop width="500" />
          </div>
          <div className="right_term2">
            <h2>Lock it in¹</h2>
            <p>With upfront pricing, you receive an estimated fare. Just reserve your ride and prepare for pickup.</p>
          </div>
        </div>
      </section>
      <section className="terms_feature_section">
        <div className="terms_two_col terms_reverse_mobile">
          <div className="left_term3">
            <h2>Get picked up when you need it</h2>
            <p>Uber technology helps ensure that you’re picked up on time for a stress-free ride.²</p>
          </div>
          <div className="right_term3">
            <video src={video3} autoPlay muted loop width="500" />
          </div>
        </div>
      </section>
      <section className="terms_feature_section">
        <div className="terms_two_col">
          <div className="left_term4">
            <video src={video4} autoPlay muted loop width="500" />
          </div>
          <div className="right_term4">
            <h2>Ride on your time, whenever that may be</h2>
            <p>Plans changed? Cancel at no charge up to one hour in advance.³</p>
          </div>
        </div>
      </section>
      <section className="terms_feature_section">
        <div className="terms_two_col terms_reverse_mobile">
          <div className="left_card5">
            <h2>From doorstep to departure</h2>
            <p>Reserving a ride to the airport? Select your airline, find your flight, and confirm your pickup time.</p>
          </div>
          <div className="right_term_5">
            <video src={video5} autoPlay muted loop width="500" />
          </div>
        </div>
      </section>
      <section className="terms_carousel_section">
        {carouselPage === 1 ? (
          <div className="terms_carousel_grid">
            <div className="terms_carousel_card">
              <img src={image90} alt="Rides to the airport" />
              <h3>Rides to the airport</h3>
            </div>
            <div className="terms_carousel_card">
              <img src={image91} alt="Business meetings" />
              <h3>Business meetings</h3>
            </div>
            <div className="terms_carousel_card">
              <img src={image92} alt="Dinner reservations" />
              <h3>Dinner reservations</h3>
            </div>
          </div>
        ) : (
          <div className="terms_carousel_grid">
            <div className="terms_carousel_card">
              <img src={image93} alt="Commutes" />
              <h3>Commutes</h3>
            </div>
            <div className="terms_carousel_card">
              <img src={image94} alt="Pickups in suburbs" />
              <h3>Pickups in suburbs</h3>
            </div>
            <div className="terms_carousel_card">
              <img src={image95} alt="Appointments" />
              <h3>Appointments</h3>
            </div>
          </div>
        )}
        <div className="terms_carousel_controls">
          <span className="terms_carousel_page_num">{carouselPage}/2</span>
          <button className="terms_carousel_btn" onClick={() => setCarouselPage(1)}disabled={carouselPage === 1}>‹</button>
          <button className="terms_carousel_btn"onClick={() => setCarouselPage(2)}disabled={carouselPage === 2}>›</button>
        </div>
      </section>
      <div className="terms_disclaimer_container">
        <p>¹Your upfront price may change due to factors such as adding stops, updating your destination, significant changes to the route or duration of the trip, or passing through a toll that was not factored into the upfront price. Upfront price not available on meter taxi trips. Refer to the app for pricing applicable to your trip.<br /><br />²Uber doesn’t guarantee that a driver will accept your ride request. Your ride is confirmed once you receive your driver details. Uber Reserve is available in select cities.<br /><br />³Cancellation fees for Uber Reserve are higher than with on-demand. You may be charged a cancellation fee if you cancel a Reserve trip, depending on the circumstances. Policies vary by location and ride type. Refer to the Uber Reserve Terms of Use and policy in your Uber app for details.<br /><br />Some features are only available in select cities, and the trips applicable for Uber Reserve will vary per city. Be sure to check the app for availability.</p>
      </div>
 <footer className="terms_footer_custom">
               <div className="footer_top_custom">
                 <Link to="/Uber" className="footer_logo_custom">Uber</Link>
                 <Link to="/Help" className="footer_help_center_custom">Visit Help Center</Link>
               </div>
               <div className="footer_columns_custom">
                 <div>
                   <h3>Company</h3>
                   <Link to='https://www.uber.com/in/en/about/?uclick_id=f48d5754-c691-4360-8e5f-d39831f221d0'>  <p>About us</p></Link>
                   <Link to='https://www.uber.com/in/en/about/uber-offerings/?uclick_id=f48d5754-c691-4360-8e5f-d39831f221d0'> <p>Our offerings</p></Link>
                   <Link to='uber.com/in/en/newsroom/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'><p>Newsroom</p></Link>
                      <Link to='https://investor.uber.com/home/default.aspx'> <p>Investors</p></Link>
                         <Link to='https://www.uber.com/in/en/blog/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'><p>Blog</p></Link>
                            <Link to='https://jobs.uber.com/en/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'>     <p>Careers</p></Link>
                               <Link to='https://www.uber.com/in/en/uber-one/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'> <p>Uber One</p></Link>
                               
                 
                  
                  
                   
              
                  
                 </div>
                 <div>
                   <h3>Products</h3>
                   <Link to='/Home'><p>Ride</p></Link>
                   <Link to='https://www.uber.com/in/en/drive/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'> <p>Drive</p></Link>
                   <Link to='https://www.ubereats.com/in?marketing_vistor_id=b61e759d-0c16-4e33-840d-6c06772a052d&uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'> <p>Eat</p></Link>
                   <Link to='https://www.uber.com/in/en/business/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'> <p>Uber for Business</p></Link>
                   <Link to='https://www.uberfreight.com/en-US?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'> <p>Uber Freight</p></Link>
                   <Link to='https://www.uber.com/in/en/gift-cards/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'>    <p>Gift cards</p></Link>
                   <Link to='https://www.uberhealth.com/in/en/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e&marketing_vistor_id=b61e759d-0c16-4e33-840d-6c06772a052d'> <p>Uber Health</p></Link>
                   <Link to='https://www.uber.com/in/en/advertising/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'>                 
                   <p>Uber Advertising</p></Link>
                   </div>
 
                 <div>
                    <h3>Global citizenship</h3>
                   <Link to='https://www.uber.com/in/en/safety/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'>  <p>Safety</p></Link>
                  <Link to='https://www.uber.com/in/en/about/sustainability/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'> <p>Sustainability</p></Link>
                 
                  
                 </div>
                 <div>
                   <h3>Travel</h3>
                   <Link to='/Login'><p>Reserve</p></Link>
                     <Link to='https://www.uber.com/in/en/airports/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'>   <p>Airports</p></Link>
                       <Link to='https://www.uber.com/in/en/hotels/?uclick_id=ac649601-7ff6-4967-b355-ec3296699c3e'><p>Hotels</p></Link>
                         <Link to='Search_cities'>  <p>Cities</p></Link>
 
                   
                
           
                 
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
                   <Link to='En'><button type="button" className="footer_pill_btn"><img src={image2} alt="globe" width="18px" height="auto" />EN</button></Link>
                   
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

export default Terms;
