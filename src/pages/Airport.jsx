import './Airport.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import image2 from '../assets/globe.png';
import image4 from '../assets/uber.png';
import image32 from '../assets/plane.webp'
import image23 from '../assets/line.png'
import image24 from '../assets/arrow.png'
import image51 from '../assets/plan_airport.webp'
import image52 from '../assets/ride_waiting.svg'
import image53 from '../assets/book_ahead.webp'
import image66 from '../assets/loc.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';


function Airport() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");

  function frequently(question) {
    if (question === "q1") {
      setAnswer1(
        answer1
          ? ""
          : "The cost of your trip depends on several factors, including the type of ride you request, tolls, the length/duration of the trip, and current demand. To get a price estimate before you request, you can go here and fill in your pickup and dropoff details. When you request a ride, your actual price will be updated in the app based on real-time factors."
      );
    } else if (question === "q2") {
      setAnswer2(
        answer2
          ? ""
          : "Available ride options depend on your location and airport regulations. The most accurate information can be found by going to uber.com/go and entering your pickup and dropoff points."
      );
    } else if (question === "q3") {
      setAnswer3(
        answer3
          ? ""
          : "The luggage capacity depends on the vehicle model, number of passengers, and the ride option that you request. For example, an UberX ride can usually hold 2 suitcases while an UberXL ride can usually hold 3 suitcases. Once you’re matched with a driver, you can contact them through the app to confirm."
      );
    } else if (question === "q4") {
      setAnswer4(
        answer4
          ? ""
          : "Scheduled dropoffs are available at most airports. Pickups reserved in advance, however, are subject to airport regulations. You can find more information by choosing your airport in the list below."
      );
    } else if (question === "q5") {
      setAnswer5(
        answer5
          ? ""
          : "For requesting on demand, we recommend requesting a ride only after you’ve deplaned, passed through customs (if necessary), and collected your luggage (if any). Avoid wait-time fees by selecting the correct arrivals gate and following instructions in the app to meet your driver."
      );
    } else if (question === "q6") {
      setAnswer6(
        answer6
          ? ""
          : "Different ride options have different grace periods. For rides requested on demand with UberX, Uber Comfort, and UberXL, meet your driver within 2 minutes of their arrival to avoid wait-time fees. For Uber Black, Uber Black SUV, Uber Premier, and Uber Premier SUV, you’ll have 5 minutes. Riders with a disability can request a wait-time fee waiver. When requesting with Uber Reserve, your driver will be informed of any schedule changes to your flight. For UberX, Uber Comfort, and UberXL rides, meet your driver up to 45 minutes after your flight’s arrival before late fees apply. For Uber Black, Uber Black SUV, Uber Premier, and Uber Premier SUV rides, meet your driver within 60 minutes. Learn more about Uber Reserve."
      );
    }
  }

  return (
    <div className="airport_page">
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

      <div>
        <div className='airport_left'>
          <button className='airport_button' style={{ cursor: "pointer" }}>Home ›</button>
          <Link to='/'> <button className='airport_button' style={{ cursor: "pointer" }}>Ride ›</button></Link>
          <p className='airports'>Airports</p>
          <h1>Airport rides are better with Uber</h1>
          <p>Request a ride to over 700 airports around the world. In most regions, you’ll also have the option to schedule an airport pickup or dropoff in advance.</p>
          <img className='image24' src={image24} alt="arrow" height='20px' />
          <input type="search" placeholder=" Pickup location" />
          <br></br>
          <img className='image23' src={image23} alt="line" height='100px' />
          <input type="search" placeholder="Dropoff location" className='drop' />
          <br></br>
          <Link to='/Ride'><button className="price_button" style={{ cursor: "pointer" }}>See prices</button></Link>
          <button style={{ cursor: "pointer" }} className='schedule'>Schedule for later</button>
        </div>

        <div>
          <img className='image32' src={image32} alt="plane" height='350px' />
        </div>

        <div className='airport_ride'>
          <h2>Reserve your airport ride in advance</h2>
          <p>Take the stress out of getting to or from the airport by scheduling a ride up to 90 days ahead of time.</p>
          <button>Request a ride today</button>
          <button>Learn more about Uber Reserve</button>
          <div className='airport_image_card'>
            <div className='airport_image_card1'>
              <img src={image51} alt="plan_airport" width='100px' />
              <h3>Plan your ride to the airport</h3>
              <p>Priority matching through Uber Reserve helps you get the ride you need when you need it.*</p>
            </div>
            <div className='airport_image_card2'>
              <img src={image52} alt="rie_waiting" width='100px' />
              <h3>Have a ride waiting for you when you land**</h3>
              <p>Our flight-tracking technology will let your driver know if your flight is delayed (or early) so they can adjust their pickup time accordingly.</p>
            </div>
            <div className='airport_image_card3'>
              <img src={image53} alt="book_ahead" width='100px' />
              <h3>Book ahead of time with flexible cancellation</h3>
              <p>Lock in your price when you reserve your ride. If your plans change, cancel for free up to one hour before your scheduled pickup time.</p>
            </div>
          </div>
        </div>
        <div className='top_questions'>
        <h2>Top questions about requesting a ride at the airport</h2>
        <div className='q1' style={{ cursor: "pointer" }} onClick={() => frequently("q1")}>
          <h3>How much will my airport ride cost?</h3>
          {answer1 && <p>{answer1}</p>}
        </div>
        <div className='q2' style={{ cursor: "pointer" }} onClick={() => frequently("q2")}>
          <h3>What vehicles are available for airport trips?</h3>
          {answer2 && <p>{answer2}</p>}
        </div>
        <div className='q3' style={{ cursor: "pointer" }} onClick={() => frequently("q3")}>
          <h3>Will all of my luggage fit in the car?</h3>
          {answer3 && <p>{answer3}</p>}
        </div>
        <div className='q4' style={{ cursor: "pointer" }} onClick={() => frequently("q4")}>
          <h3>Can I reserve a ride with Uber to and from the airport?</h3>
          {answer4 && <p>{answer4}</p>}
        </div>
        <div className='q5' style={{ cursor: "pointer" }} onClick={() => frequently("q5")}>
          <h3>At what point after I’ve landed should I request a ride?</h3>
          {answer5 && <p>{answer5}</p>}
        </div>
        <div className='q6' style={{ cursor: "pointer" }} onClick={() => frequently("q6")}>
          <h3>How long will my driver wait for me at the airport?</h3>
          {answer6 && <p>{answer6}</p>}
        </div>
      </div>
       <div className='Find_airport'>
        <input type="search" placeholder='Search for an airport' />
        <section className='airport_section'>

        <div className='airport_place'>
          <h2>LatAm</h2>
          <div className='airport_place_left'>
            <h3>Brazil</h3>
            <table>
              <tbody>
                <tr>
                  <td>Romeu Zema Airport (AAX)</td>
                  <td>Aracaju-Santa Maria Airport (AJU)</td>
                </tr>
                <tr>
                  <td>Araçatuba Airport (ARU)</td>
                  <td>Barretos–Chafei Amsei State Airport (BAT)</td>
                </tr>
              </tbody>
            </table>
          </div>
            
        </div>
           </section>
     
      </div>
         
      </div>
    
        <footer className="airport_footer_custom">
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

export default Airport;
