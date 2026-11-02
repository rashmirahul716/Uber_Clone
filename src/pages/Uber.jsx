import './Uber.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import image21 from '../assets/img_uber.png';
import image2 from '../assets/globe.png';
import image3 from '../assets/clock.png';
import image64 from '../assets/suitcase.png';
import image65 from '../assets/man.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image24 from '../assets/arrow.png';
import image23 from '../assets/line.png';
import image9 from '../assets/car.jpg';
import image10 from '../assets/calender.jpg';
import image13 from '../assets/bike.jpg';
import image11 from '../assets/intercity.png';
import image66 from '../assets/loc.png';

// Carousel & New Section Assets
import startedImg from '../assets/started.webp';
import getMatchImg from '../assets/get_match.webp';
import meetDriverImg from '../assets/meet_driver.webp';
import enjoyRideImg from '../assets/enjoy the ride.webp';
import rateTipImg from '../assets/rate_tip.webp';
import girlLegVideo from '../assets/girl_leg.mp4';
import planAdvanceImg from '../assets/plan_advance.webp';
import rideStyleImg from '../assets/ride_style.webp';
import sendPackageImg from '../assets/send_package.webp';
import autoManImg from '../assets/auto_man.webp';
import driveScheduleImg from '../assets/drive_schedule.webp';
import specializedSkillImg from '../assets/specialized_skill.webp';
import benefitGirlImg from '../assets/benefit_girl.png';
import manWithCarImg from '../assets/man_with_car.webp';
import downloadUberQr from '../assets/download_uber_app.webp';
import downloadDriverQr from '../assets/download_driver_app.jpg';

function Uber() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [howToPage, setHowToPage] = useState(1);

  return (
    <div className="uber_page">
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

      {/* Hero: Go anywhere */}
      <section className="uber_hero_section">
        <div className="uber_hero_left">
          <div className="uber_location_header">
            <img src={image66} alt="loc" width="16px" height="auto" />Kochi, IN
            <button type="button">Change city</button>
          </div>
          <h1>Go anywhere</h1>
          <div className="uber_pickup">
            <h2 className="uber_pickup_title"><img src={image3} alt="clock" width="18px" />Pickup now ▾</h2>
          </div>
          <div className="uber_input_box">
            <div className="uber_input_wrapper">
             
              <input
                type="text"
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="input_field"/>
              <img src={image24} alt="arrow" width="18px" className="uber_arrow_icon" />
            </div>
             <img className="uber_line_icon" src={image23} alt="line" width="38px"></img>
            <div className="uber_input_wrapper">
              <input
                type="text"
                placeholder="Dropoff location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="input_field"
              />
            </div>
          </div>
          <div className="uber_hero_actions">
            <Link to={`/Ride?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`} className="uber_seeprice">
              See prices
            </Link>
            <Link to="/Login" className="uber_loginactivity">Log in to check your activity</Link>
          </div>
        </div>
        <div className="uber_hero_right">
          <div className="uber_collage_wrapper">
            <img src={image21} alt="Travel" width="500px" />
            <div className="uber_schedule">
              <p>Ready to travel?</p>
              <Link to="/Terms" className="uber_schedule_btn">Schedule ahead</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore what you can do with Uber (6 Dark Cards) */}
      <section className="uber_suggestions_section">
        <h2>Explore what you can do with Uber</h2>
        <div className="uber_suggestions_grid_6">
          {/* Card 1: Ride */}
          <div className="uber_sug_card">
            <div className="uber_sug_content">
              <h3>Ride</h3>
              <p>Go anywhere with Uber. Request a ride, hop in, and go.</p>
              <Link to="/Ride"><button>Details</button></Link>
            </div>
            <img src={image9} alt="Ride" className="uber_sug_img" />
          </div>

          {/* Card 2: Reserve */}
          <div className="uber_sug_card">
            <div className="uber_sug_content">
              <h3>Reserve</h3>
              <p>Reserve your ride in advance so you can relax on the day of your trip.</p>
              <Link to="/Terms"><button>Details</button></Link>
            </div>
            <img src={image10} alt="Reserve" className="uber_sug_img" />
          </div>

          {/* Card 3: Bike */}
          <div className="uber_sug_card">
            <div className="uber_sug_content">
              <h3>Bike</h3>
              <p>Get affordable motorbike rides in minutes at your doorstep.</p>
              <Link to="/Ride"><button>Details</button></Link>
            </div>
            <img src={image13} alt="Bike" className="uber_sug_img" />
          </div>

          {/* Card 4: Intercity */}
          <div className="uber_sug_card">
            <div className="uber_sug_content">
              <h3>Intercity</h3>
              <p>Get convenient, affordable outstation cabs anytime at your door.</p>
              <Link to="/Ride"><button>Details</button></Link>
            </div>
            <img src={image11} alt="Intercity" className="uber_sug_img" />
          </div>

          {/* Card 5: Airport */}
          <div className="uber_sug_card">
            <div className="uber_sug_content">
              <h3>Airport</h3>
              <p>Request a ride to or from the airport with room for your luggage.</p>
              <Link to="/Airport"><button>Details</button></Link>
            </div>
            <img src={image64} alt="Airport" className="uber_sug_img" />
          </div>

          {/* Card 6: Teens */}
          <div className="uber_sug_card">
            <div className="uber_sug_content">
              <h3>Teens</h3>
              <p>Teen accounts offer top-rated drivers and built-in safety tools.</p>
              <Link to="/Ride"><button>Details</button></Link>
            </div>
            <img src={image65} alt="Teens" className="uber_sug_img" />
          </div>
        </div>
      </section>

      {/* How to request a ride (Interactive Carousel) */}
      <section className="uber_how_to_section">
        <h2>How to request a ride</h2>

        <div className="uber_how_to_cards_row">
          {howToPage === 1 ? (
            <>
              <div className="uber_how_to_card">
                <img src={startedImg} alt="Get started" className="uber_how_to_photo" />
                <h3>Get started</h3>
                <p>Enter your destination on Uber.com or in the Uber app. Choose a ride and confirm.</p>
              </div>

              <div className="uber_how_to_card">
                <img src={getMatchImg} alt="Get matched with a driver" className="uber_how_to_photo" />
                <h3>Get matched with a driver</h3>
                <p>A nearby driver accepts your request. You'll be notified when they're close.</p>
              </div>

              <div className="uber_how_to_card">
                <img src={meetDriverImg} alt="Meet your driver" className="uber_how_to_photo" />
                <h3>Meet your driver</h3>
                <p>Verify your driver's name, vehicle details and your destination, then enter the vehicle.</p>
              </div>
            </>
          ) : (
            <>
              <div className="uber_how_to_card">
                <img src={enjoyRideImg} alt="Enjoy the ride" className="uber_how_to_photo" />
                <h3>Enjoy the ride</h3>
                <p>Your driver has turn-by-turn directions for the fastest route.</p>
              </div>

              <div className="uber_how_to_card">
                <img src={rateTipImg} alt="Rate and tip" className="uber_how_to_photo" />
                <h3>Rate and tip</h3>
                <p>Please leave feedback about your trip, and you'll also be able to tip your driver.</p>
              </div>
            </>
          )}
        </div>

        <div className="uber_how_to_controls">
          <span className="uber_how_to_page_indicator">{howToPage}/2</span>
          <button
            type="button"
            className="uber_carousel_btn"
            disabled={howToPage === 1}
            onClick={() => setHowToPage(1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="uber_carousel_btn"
            disabled={howToPage === 2}
            onClick={() => setHowToPage(2)}
          >
            ›
          </button>
        </div>
      </section>

      {/* Planning your next getaway? (City Hub Video) */}
      <section className="uber_getaway_section">
        <div className="uber_getaway_left">
          <h2>Planning your next getaway?</h2>
          <p>
            From weekend road trip to international destination, we've got you covered.
            Explore transport options, points of interest, and more with our new City Hub.
          </p>
          <div className="uber_city_pill_btn"> Kochi ▾
          </div>
        </div>
        <div className="uber_getaway_right">
          <video src={girlLegVideo} autoPlay muted loop className="uber_getaway_video" />
        </div>
      </section>
      

      {/* More ways to use Uber (3 Column Photo Cards) */}
      <section className="uber_more_ways_section">
        <h2>More ways to use Uber</h2>
        <div className="uber_more_ways_grid">
          {/* Card 1 */}
          <div className="uber_more_way_card">
            <div className="uber_more_way_img_wrap">
              <img src={planAdvanceImg} alt="Plan your trip in advance" />
            </div>
            <h3>Plan your trip in advance</h3>
            <p>Book your ride up to 90 days ahead by choosing Reserve on Uber.com or in the app.</p>
            <Link to="/Terms" className="uber_more_way_link">Reserve now</Link>
          </div>

          {/* Card 2 */}
          <div className="uber_more_way_card">
            <div className="uber_more_way_img_wrap">
              <img src={rideStyleImg} alt="Ride in style" />
            </div>
            <h3>Ride in style</h3>
            <p>Travel in high-end vehicles with our top-rated drivers.</p>
            <Link to="/Ride" className="uber_more_way_link">See prices</Link>
          </div>

          {/* Card 3 */}
          <div className="uber_more_way_card">
            <div className="uber_more_way_img_wrap">
              <img src={sendPackageImg} alt="Send items within the day" />
            </div>
            <h3>Send items within the day</h3>
            <p>Get same-day local delivery of forgotten keys, care packages, and much more.</p>
            <Link to="/Ride" className="uber_more_way_link">Send a package</Link>
          </div>
        </div>
      </section>

      {/* Auto Rickshaw Wide Banner */}
      <section className="uber_auto_banner_section">
        <img src={autoManImg} alt="Uber Auto Driver" className="uber_auto_banner_img" />
      </section>

      {/* Earn with Uber */}
      <section className="uber_earn_section">
        <h2>Earn with Uber</h2>
        <div className="uber_earn_grid">
          <div className="uber_earn_card">
            <img src={driveScheduleImg} alt="Drive and earn on your schedule" />
            <h3>Drive and earn on your schedule</h3>
            <p>Make money with rides. Use your car or rent one.</p>
            <Link to="/Login" className="uber_earn_link">Sign up to drive</Link>
          </div>

          <div className="uber_earn_card">
            <img src={specializedSkillImg} alt="Earn with your specialized skills" />
            <h3>Earn with your specialized skills</h3>
            <p>Turn your expertise into a remote earning opportunity with Uber AI Solutions.</p>
            <Link to="/Login" className="uber_earn_link">Sign up</Link>
          </div>
        </div>
      </section>

      {/* All the benefits of Uber, reimagined for business */}
      <section className="uber_business_section">
        <div className="uber_business_left">
          <img src={benefitGirlImg} alt="Uber for Business" className="uber_business_img" />
        </div>
        <div className="uber_business_right">
          <h2>All the benefits of Uber, reimagined for business</h2>
          <p>
            Uber for Business gives your organization more control, deeper insights, and features
            built for enterprise users. Manage and track business travel, meal programs, and more
            on one dashboard.
          </p>
          <Link to="https://www.uber.com/in/en/business/?uclick_id=3beeca2b-a91f-4bf6-9775-c19834b75506">
            <button className="uber_business_btn">Learn more</button>
          </Link>
        </div>
      </section>

      {/* It's easier in the apps (Dual White QR Cards) */}
      <section className="uber_apps_qr_section">
        <h2>It's easier in the apps</h2>
        <div className="uber_apps_qr_grid">
          <div className="uber_app_qr_box">
            <img src={downloadUberQr} alt="Download the Uber app" />
            <div className="uber_app_qr_info">
              <h3>Download the Uber app</h3>
              <p>Scan to download</p>
            </div>
            <span className="uber_app_qr_arrow">→</span>
          </div>

          <div className="uber_app_qr_box">
            <img src={downloadDriverQr} alt="Download the Driver app" />
            <div className="uber_app_qr_info">
              <h3>Download the Driver app</h3>
              <p>Scan to download</p>
            </div>
            <span className="uber_app_qr_arrow">→</span>
          </div>
        </div>
      </section>

      {/* Make money by renting out your car */}
      <section className="uber_rent_car_section">
        <div className="uber_rent_car_left">
          <img src={manWithCarImg} alt="Make money by renting out your car" />
        </div>
        <div className="uber_rent_car_right">
          <h2>Make money by renting out your car</h2>
          <p>
            Connect with thousands of drivers and earn more per week with Uber’s free fleet
            management tools.
          </p>
          <Link to="/Login"><button className="uber_rent_car_btn">Get started</button></Link>
        </div>
      </section>

     <footer className="uber_footer">
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

export default Uber;
