import './Explore.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import image2 from '../assets/globe.png';
import image23 from '../assets/line.png';
import image24 from '../assets/arrow.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image66 from '../assets/loc.png';
import image31 from '../assets/smile.webp';
import image9 from '../assets/car.jpg';
import image10 from '../assets/calender.jpg';
import image11 from '../assets/intercity.png';
import image12 from '../assets/rental_car.jpg';
import image13 from '../assets/bike.jpg';
import image70 from '../assets/yellow_car.webp';
import image71 from '../assets/uberx.webp';
import image72 from '../assets/explore_globe_image1.webp';
import image73 from '../assets/explore_image_globe_2.webp';
import image74 from '../assets/go_grren.webp';
import image75 from '../assets/out_door.webp';
import image76 from '../assets/go_further.webp';
import image100 from '../assets/image100.webp';
import image101 from '../assets/uber_shuttle.webp'
import image102 from '../assets/uber_share.webp'
import image103 from '../assets/uber_green.webp'

function Explore() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
  const [activeTab, setActiveTab] = useState('Featured');
  return (
    <div className="explore_page_container">
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
      <div className="explore_subnav_wrapper">
        <h2 className="ride_head">Ride</h2>
        <div className="navbar_2">
    <Link to="/Ride"><h4>Request a ride</h4></Link>
    <Link to="/Login"><h4>Reserve a ride</h4></Link>
    <Link to="/Ride"><h4>See prices</h4></Link>
    <Link to="/Explore"><h4>Explore ride options</h4></Link>
    <Link to="https://www.uber.com/in/en/airports/?uclick_id=7fe18018-d114-4b02-972e-94218fa07391"><h4>Airport rides</h4></Link>
  </div>
      </div>
      <main className="explore_main_content">
        <section className="explore_hero_section">
          <div className="explore_hero_left">
            <h1 className="explore_hero_title">Go with Uber</h1>
            <p className="explore_hero_subtitle">Find a ride for every road with access in more than 15,000 cities worldwide.</p>
            <p className="explore_hero_caption">Because the best adventures come to you.</p>
            <div className="explore_route_inputs">
              <img  className='image24'src={image24} alt="arrow" height='20px' />
                      <input  type="search" placeholder=" Pickup location" className='pickup_location_explore'/>
                      <br></br>
                      <img  className ='image23'src={image23} alt="line" height='100px' />
                      <input type="search"placeholder="Dropoff location" className='drop'/>
                      <br></br>
            </div>
            <div className="explore_hero_cta_row">
              <button className="explore_see_prices_btn">See prices</button>
              <button className="explore_download_app_link">Download the Uber app</button>
            </div>
          </div>
          <div className="explore_hero_right">
            <img src={image31} alt="Rider smiling" className="explore_hero_img" />
          </div>
        </section>
        <section className="explore_suggestions_section">
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
        <section className="explore_world_rides_section">
          <h2 className="explore_section_heading">Rides around the world</h2>
          <p className="explore_world_desc">
            There's more than one way to move with Uber, no matter where you are or where you're headed next.<br />
            Check the app to see which ride options are available near you.*
          </p>

          <div className="explore_tabs_header">
            <button className='featured'onClick={() => setActiveTab('Featured')}>Featured</button>
            <button className='wheel'onClick={() => setActiveTab('2 or 3 wheels')}>2 or 3 wheels</button>
            <button className='extra_room'onClick={() => setActiveTab('Extra room')}>Extra room</button>
          </div>

          <div className="explore_vehicle_cards_row">
            <div className="explore_vehicle_col">
              <div className="explore_vehicle_img_box">
                <img src={image10} alt="Uber Reserve" className="explore_vehicle_cal_img" />
              </div>
              <h3>Uber Reserve</h3>
              <p>Book a ride in advance</p>
              <Link to="/Ride" className="explore_learn_more_link">Learn more about Uber Reserve</Link>
            </div>
            <div className="explore_vehicle_col">
              <div className="explore_vehicle_img_box">
                <img src={image70} alt="Uber Taxi" />
              </div>
              <h3>Uber Taxi</h3>
              <p>Local taxi cabs at the tap of a button</p>
              <Link to="/Ride" className="explore_learn_more_link">Learn more about Uber Taxi</Link>
            </div>
            <div className="explore_vehicle_col">
              <div className="explore_vehicle_img_box">
                <img src={image71} alt="UberX" />
              </div>
              <h3>UberX</h3>
              <p>Affordable rides, all to yourself</p>
              <Link to="/Ride" className="explore_learn_more_link">Learn more about UberX</Link>
            </div>
          </div>
              </section>
          <section class="rides-section">
    <div class="container">
    
      <div class="rides-header">
        <h2 class="rides-title">Rides around the world</h2>
        <p class="rides-subtitle">
          There’s more than one way to move with Uber, no matter where you are or where you’re headed next. Check the app to see which ride options are available near you.*
        </p>
      </div>

  
      <div class="tabs-wrapper">
        <ul class="tabs-list">
          <li class="tab-item active">Featured</li>
          <li class="tab-item">2 or 3 wheels</li>
          <li class="tab-item">Extra room</li>
        </ul>
      </div>

     
      <div class="cards-grid">

        <div class="card">
          <div class="card-image-bg">
            <img 
              src={image101}
              alt="Uber Shuttle"
             
            />
          </div>
          <h3 class="card-title">Uber Shuttle</h3>
          <p class="card-description">Shared A/C rides at affordable prices</p>
        <p>Learn more about Uber Shuttle</p>
        </div>

        <div class="card">
          <div class="card-image-bg">
            <img 
              src={image102}
              alt="UberX Share"
             
            />
          </div>
          <h3 class="card-title">UberX Share</h3>
          <p class="card-description">Share the ride with up to one co-rider at a time</p>
          <p>Learn more about UberX Share</p>
        </div>
        <div class="card">
          <div class="card-image-bg">
            <img 
              src={image103}
              alt="Uber Green"
              />
          </div>
          <h3 class="card-title">Uber Green</h3>
          <p class="card-description">Sustainable rides in electric vehicles</p>
          <p>Learn more about Uber Green</p>
        </div>

      </div>

    </div>
  </section>
    
        <section class="shuttle-section">
    <div class="container">
      <div class="shuttle-grid">
        
        <div class="shuttle-content">
          <h1 class="shuttle-title">Commute in Comfort with Uber Shuttle</h1>
          <p class="shuttle-text">
            Uber Shuttle is a new way to enjoy a comfortable, safe, and convenient commute in Delhi. There’s no need to wait to hail down and squeeze onto a crowded bus, spend hours in the metro or drive in peak traffic.
          </p>
          <Link to='/Uber'className='btn-black'>Explore Uber Shuttle</Link>

        </div>

        <div class="shuttle-image-wrapper">
          <img 
            src={image100}
            alt="Uber Shuttle Commute"/>
        </div>

      </div>
    </div>
  </section>
        <section className="explore_globe_section">
          <h2 className="explore_section_heading">Explore the globe with Uber</h2>

          <div className="explore_globe_cards_grid">
            <div className="explore_globe_card">
              <div className="explore_globe_img_wrap">
                <img src={image72} alt="cities" />
              </div>
              <h3>Ride with Uber in 15,000+ cities</h3>
              <p>Travel around cities worldwide, with access to rides almost everywhere.</p>
              <Link to="/Ride" className="explore_learn_more_link">See all cities</Link>
            </div>
            <div className="explore_globe_card">
              <div className="explore_globe_img_wrap">
                <img src={image73} alt="airports" />
              </div>
              <h3>Get a ride at 700+ airports</h3>
              <p>The world is ready for your arrival. Start your travels with a ride to the airport. In most regions you'll also have the option to schedule an airport pickup or dropoff in advance.</p>
              <Link to="/Airport" className="explore_learn_more_link">See all airports</Link>
            </div>
          </div>
        </section>
        <section className="explore_info_three_cards">
          <div className="explore_info_card">
            <div className="explore_info_img_wrap">
              <img src={image74} alt="Go green" />
            </div>
            <h3>Go green</h3>
            <p>Move toward a greener future with eco-friendly ride options. It's the perfect way to be a more conscious traveler.</p>
            <Link to="/Ride" className="explore_learn_more_link">Learn more</Link>
          </div>
          <div className="explore_info_card">
            <div className="explore_info_img_wrap">
              <img src={image75} alt="Our Door-to-Door Safety Standard" />
            </div>
            <h3>Our Door-to-Door Safety Standard</h3>
            <p>We've introduced new policies and features to help keep everyone safe, including a mandatory mask policy and free disinfectant supplies for drivers.</p>
            <Link to="/Ride" className="explore_learn_more_link">Learn more</Link>
          </div>
          <div className="explore_info_card">
            <div className="explore_info_img_wrap">
              <img src={image76} alt="further" />
            </div>
            <h3>Go further, get more with Uber One</h3>
            <p>See and do it all with one membership that lets you save on all your rides and eats.</p>
            <Link to="/Ride" className="explore_learn_more_link">Learn more</Link>
          </div>
        </section>
        <section className="explore_two_action_cards">
          <Link to="/Signup" className="explore_action_banner">
            <span className="explore_action_title">Sign up to ride</span>
            <span className="explore_action_arrow">→</span>
          </Link>
          <Link to="/Help" className="explore_action_banner">
            <span className="explore_action_title">Read our Community Guidelines</span>
            <span className="explore_action_arrow">→</span>
          </Link>
        </section>
        <section className="explore_disclaimer_section">
          <p>
            *Join the millions of riders who trust Uber for their everyday travel needs. Get doorstep pickup and dropoff to your chosen destination at the tap of a button. Select from a wide range of affordable options, such as Uber Auto, Uber Moto, and Cabs.
          <br />
            Limited-period offer: Discount on first 5 trips (cab, auto or moto) completed within 14 days of signing up. The offer is valid only for first-time users. The promotion shall apply automatically to eligible rides. Download the Uber app now to request your first ride.
          <br />
            Discounts applicable - (i) For cab rides- 100% discount (maximum discount of INR 100 per ride) (ii) For moto rides- 100% discount (maximum discount of INR 45 per ride)
         <br />
            (iii) For auto rides- 100% discount (maximum discount of INR 70 per ride)
          <br />
            This offer cannot be combined with any other offers or promo codes.
         <br />
            The offer is non-transferable and limited to one per user/account.
          <br />
            Uber reserves the right to alter, suspend or withdraw the promotion offer in the future at its sole discretion without any prior notice. Terms and conditions apply.
          </p>
        </section>
      </main><footer className="explore_footer_custom">
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

export default Explore;
