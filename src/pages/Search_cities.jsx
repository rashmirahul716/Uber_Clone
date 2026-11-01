import './search_cities.css';
import image2 from '../assets/globe.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image66 from '../assets/loc.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Cities() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="cities_page">
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
      <section className="cities_hero_section">
        <div className="uber_cities">
          <h1>Use Uber in cities around the world</h1>
          <p>Get to your destination in more than 15,000 cities. If you’re going to an airport, see all{' '}
            <Link to="/Airport" className="cities_airports_link">airports</Link> where Uber is available.
          </p>
          <Link to="/Ride" className="cities_see_prices_link">See prices</Link>
        </div>
      </section>
      <section className='cities_list_section'>
        <h2 className='cities_global_title'>Global</h2>
        <ul className='cities_column'>
            <li>Andorra</li>
            <li>United arab emirates(UAE)</li>
            <li>Argentina</li>
            <li>Austria</li>
            <li>Australia</li>
            <li>Barbados</li>
            <li>Bangladesh</li>
            <li>Belgium</li>
            <li>Bahrain</li>
            <li>Bolivia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>Switzerland</li>
            <li>Chile</li>
            <li>Colombia</li>
            <li>Costa Rica</li>
            <li>Czech Rep</li>
            <li>Germany</li>
            <li>Denmark</li>
            <li>Dominican Republic</li>
            <li>Ecuador</li>
            <li>Estonia</li>
             <li>Egypt</li>
             <li>Spain</li>
             <li>Finland</li>
             <li>France</li>
             <li>Great Britain</li>
             <li>Greece</li>
             <li>Guatemala</li>
            <li>Hong Kong</li>
            <li>Honduras</li>
            <li>Croatia</li>
            <li>Hungary</li>
            <li>Republic of Ireland</li>
            <li>India</li>
            <li>Italy</li>
        </ul>
        <ul className='cities_column'>
            <li>   Jamaica</li>
             <li>Jordan</li>
              <li>Japan</li>
               <li>Kenya</li>
                <li>Korea</li>
                 <li>Kuwait</li>
                  <li>Lebanon</li>
                   <li>Saint Lucia</li>
                    <li>Sri Lanka</li>
                     <li>Lithuania</li>
                      <li>Luxembourg</li>
                       <li>Malta</li>
                        <li>Mexico</li>
                         <li>Nigeria</li>
                          <li>Netherlands</li>
                           <li>Norway</li>
                            <li>Nepal</li>
                        <li>New Zealand</li>
                        <li>Panama</li>
                        <li>Peru</li>
                        <li>Poland</li>
                        <li>Portugal</li>
                        <li>Paraguay</li>
                        <li>Qatar</li>
                        <li>Romania</li>
                        <li>Saudi Arabia</li>
                        <li>Sweden</li>
                        <li>Slovenia</li>
                        <li>Slovakia</li>
                        <li>El Salvador</li>
                        <li>Turkey</li>
                        <li>Taiwan</li>
                        <li>Ukraine</li>
                        <li>Uganda</li>
                        <li>United States</li>
                        <li>Uruguay</li>
                        <li>South Africa</li>
        </ul>
      </section>

      {/* Global Footer */}
       <footer className="search_footer_custom">
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

export default Cities;
