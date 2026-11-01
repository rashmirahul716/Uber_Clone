import './Daily.css'
import {Link}from 'react-router-dom'
 import image2 from '../assets/globe.png';
 import image26 from '../assets/bg_dailypass.png'
 import image27 from '../assets/cal_logo.png'
 import image28 from '../assets/discount.png'
 import image29 from '../assets/cap.png'
 import image30 from '../assets/charge.png'
 import { useState } from 'react';
 

 function Daily(){
    const [showAbout, setShowAbout] = useState(false);
      const [menuOpen, setMenuOpen] = useState(false);
   return(
     <div className="daily">
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
      <img className='image26' src={image26} alt="bg" height='400px' width='auto'/>
      <h1>Your everyday rides,made easier with Uber DailyPass.</h1>
      <p>A simple subscription for your daily rides.Get automatic bookings,exclusive discounts and a smoother way to move-perfect for students and regular riders.</p>
      <Link to='/Dailypass'><button className='get_button' style={{ cursor: "pointer" }}>Get DailyPass</button></Link>
      
      <div className='uses'>
      <div>
        <img src={image27} alt="cal_logo"className='image27' height='50px'/>
        <h3>Automatic Bookings</h3>
        <p>Set your routine,we'll handle the rest.</p>
      </div>
      <div>
        <img src={image28} className='image28' alt="discount" height='60px'/>
        <h3>Exclusive Discounts</h3>
        <p>Save more with special daily rates.</p>
      </div><div>
        <img src={image29} className='image29'alt="cap"height='50px' />
        <h3>Perfect for students</h3>
        <p>Affordable.convenient.Made for your day.</p>
      </div><div>
        <img className='image30' src={image30} alt="charge" height='50px'/>
        <h3>Multiple Ride Options</h3>
        <p> Choose what fits your day-from economy to premium.</p>
      </div>
      </div>
     </div>

   )
   }
   export default Daily