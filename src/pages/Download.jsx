import './Download.css';
import image2 from '../assets/globe.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image66 from '../assets/loc.png';
import image80 from '../assets/qr_uber.webp';
import image81 from '../assets/2_girls.webp';
import image82 from '../assets/uber_app.webp';
import image83 from '../assets/uber_driver.webp';
import image84 from '../assets/uber_eats.webp';
import image9 from '../assets/car.jpg';
import image10 from '../assets/calender.jpg';
import image11 from '../assets/intercity.png';
import image12 from '../assets/rental_car.jpg';
import image13 from '../assets/bike.jpg';
import image24 from '../assets/arrow.png';
import image23 from '../assets/line.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Download() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="download_page">
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
      <section className="download_hero_section">
        <div className="download_hero_left">
          <h1>Get the ride you want</h1>
          <p> Uber is always available. Whether you’re heading to your usual destination or exploring new places, just open the Uber app and a nearby driver will take you there. Let’s download and get started.</p>
          <div className="download_app_badges">
            <Link to="https://apps.apple.com/app/uber/id368677368"><img src={image45} alt="app_store" className="download_badge_img" /></Link>
            <Link to="https://play.google.com/store/apps/details?id=com.ubercab"><img src={image44} alt="google_play" className="download_badge_img" /></Link>
          </div>
        </div>
        <div className="download_hero_right">
          <img src={image80} alt="QR Uber" className="download_hero_qr_img" />
        </div>
      </section>
      <section className="download_book_section">
        <div className="left_uber_download">
          <h2>Book a ride now</h2>
          <p>Request a ride, hop in, and go.</p>
          <div className="download_route_inputs">
            <div className="download_input_row">
              <img className='image_line' src={image23}alt='line'height='98px'/>
              <input type="search" placeholder="Pickup location" className='pickup_loc' />
              <img className="image24" src={image24} alt="arrow" height="18px" />
            </div>
            <div className="download_input_row">
              <input type="search" placeholder="Dropoff location" className="drop" />
            </div>
          </div>
          <div className="download_buttons_row">
            <Link to="/Ride"><button className="price_button_download">See prices</button></Link>
            <Link to="/Login"><button className="download_schedule_btn">Schedule for later</button></Link>
          </div>
        </div>
        <div className="right_uber_download">
          <img src={image81} alt="Riders in car" className="download_car_image" />
        </div>
      </section>
      <section className="explore_suggestions_section download_suggestions">
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
              <Link to="/Ride"><button className="explore_details_btn">Details</button></Link>
            </div>
            <div className="explore_sug_image">
              <img src={image10} alt="Reserve calendar" />
            </div>
          </div>
          <div className="explore_sug_card">
            <div className="explore_sug_text">
              <h3>Ride</h3>
              <p>Go anywhere with Uber. Request a ride, hop in, and go.</p>
              <Link to="/Ride"><button className="explore_details_btn">Details</button></Link>
            </div>
            <div className="explore_sug_image">
              <img src={image9} alt="Ride car" />
            </div>
          </div>
        </div>
      </section>
      <section className="download_do_more_section">
        <h2>Do more in the apps</h2>
        <p>Open the Uber app to book a ride, place an order, or request a delivery.</p>
        <div className="qr_card">
          <div className="qr_1">
            <img src={image82} alt="Uber app QR" />
            <h3>Download the Uber app</h3>
          </div>
          <div className="qr_2">
            <img src={image83} alt="Driver app QR" />
            <h3>Download the Driver app</h3>
          </div>
          <div className="qr_3">
            <img src={image84} alt="Uber Eats QR" />
            <h3>Download the Uber Eats app</h3>
          </div>
        </div>
      </section>
     <footer className="uber_footer_custom">
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

export default Download;
