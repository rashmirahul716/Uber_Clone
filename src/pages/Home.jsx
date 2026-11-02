import './Home.css'
import {Link}from 'react-router-dom'
import { useState } from 'react';
import image1 from '../assets/girl.png';
import image2 from '../assets/globe.png';
import image3 from '../assets/clock.png';
import image4 from '../assets/uber.png';
import image8 from'../assets/map.png';
import image9 from'../assets/car.jpg';
import image10 from'../assets/calender.jpg';
import image11 from '../assets/intercity.png';
import image12 from'../assets/rental_car.jpg';
import image13 from'../assets/bike.jpg';
import image14 from'../assets/watch.png'
import image15 from'../assets/black.png'
import image16 from'../assets/brian.png'
import image17 from '../assets/ride_option.png'
import image18 from '../assets/airports.png'
import image19 from '../assets/cities.png'
import image20 from '../assets/bg_computer.png'
import image21 from '../assets/qr_domore.webp'
import image22 from '../assets/sign_ride.svg'
import image23 from '../assets/line.png'
import image24 from '../assets/arrow.png'
import image25 from '../assets/choose.png'
import image33 from '../assets/extract.png'
import image34 from '../assets/cancel.png'
import image44 from '../assets/google_play.png';
import image45 from '../assets/app_store.png';
import image46 from '../assets/linkedin.png';
import image47 from '../assets/youtube.png';
import image48 from '../assets/instagram.png';
import image49 from '../assets/twitter.png';
import image66 from '../assets/loc.png';

function Home(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [showAbout, setShowAbout] = useState(false);
 const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
   const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
     const [answer5, setAnswer5] = useState("");


  function frequently(question) {
    if (question === 'q1') {
      setAnswer1(
        answer1
          ? ''
          : 'The Uber app helps provide a delivery solution that can save you a trip across town, whether it’s for a last-minute birthday gift or your forgotten keys. Just choose Package in the Uber app.'
      );
    } else if (question === 'q2') {
      setAnswer2(
        answer2 ? '' : 'Yes. Find out more about how car rentals work.'
      );
    } else if (question === 'q3') {
      setAnswer3(
        answer3
          ? ''
          : 'Yes. Set up a group ride in the Uber app, invite your friends, and arrive at your destination together.'
      );
    } else if (question === 'q4') {
      setAnswer4(
        answer4
          ? ''
          : 'Uber makes it easy to get a taxi nearby in the cities where Uber Taxi is available. There’s no need to find a cab stand, hail a cab on the street, or even call the local cab company. Instead, you can use the Uber app or website to request a taxi in just a few taps or clicks.'
      );
    } else if (question === 'q5') {
      setAnswer5(
        answer5
          ? ''
          : 'Request UberXL for a van or SUV that fits up to 6 people at an affordable price. It’s perfect for a family trip or a ride to the airport.'
      );
    }
  }


  return(
    <div className='home'>
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
</header><div className="home_nav">
  <h2 className="ride_head">Ride</h2>

  <div className="navbar_2">
    <Link to="/Ride"><h4>Request a ride</h4></Link>
    <Link to="/Login"><h4>Reserve a ride</h4></Link>
    <Link to="/Ride"><h4>See prices</h4></Link>
    <Link to="/Explore"><h4>Explore ride options</h4></Link>
    <Link to="https://www.uber.com/in/en/airports/?uclick_id=7fe18018-d114-4b02-972e-94218fa07391"><h4>Airport rides</h4></Link>
  </div>
</div>
      <div className="booking_box">
        <div className="location">
          <p><img className="image8" src={image8} alt="map" width='15px' height='auto'/>Kochi, IN</p>
          <button className="change_city" style={{ cursor: "pointer" }}>Change city</button>
        </div>
        <h1>Request a ride</h1>
        <h3 className="pickup-now" style={{ cursor: "pointer" }}><img className="image3" src={image3} alt="clock" width='20px'/>pickup now</h3>
        <img  className='image24_home'src={image24} alt="arrow" height='20px' />
        <input  type="search" placeholder=" Pickup location" value={pickup} onChange={(e) => setPickup(e.target.value)}/>
        <br></br>
        <img  className ='image23_home'src={image23} alt="line" height='100px' />
        <input type="search"placeholder="Dropoff location" className='drop' value={dropoff} onChange={(e) => setDropoff(e.target.value)}/>
        <br></br>
        <Link to={`/Ride?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`}><button className="price_button_home">See prices</button></Link>
        
      </div>
      <div className="image1"><img src={image1} width='40%' height='auto' alt="Girl"/></div>
      <div className="explore_page">
        <h1>Explore what you can do with Uber</h1>
          <div className='card1'>
            <div className='ride_card' style={{ cursor: "pointer" }}>
                <h3>Ride</h3>
                <p>Go anywhere with Uber.Request a ride,hop in,and go.</p>
                <img src={image9} alt="taxi_ride" width='100px'height='auto'/>
                <Link to='/Ride'><button>Details</button></Link>
                
                
              </div>
              <div className='reserve_ride'style={{ cursor: "pointer" }}>
                <h3>Reserve</h3>
                <p>Reserve your ride in advance so you can relax on the day of your trip.</p>
               <img src={image10} alt="calender" width='100px'height='auto'/>
               <Link to='/Ride'><button>Details</button></Link>
                
              </div>
              <div className='intercity'style={{ cursor: "pointer" }}>
                <h3>Intercity</h3>
                <p>Get convenient,affordable outstation cabs anytime at your door.</p>
                <img src={image11} alt="intercity" width='100px'height='auto'/>
                <Link to='/Ride'><button>Details</button></Link>
                
              </div>
            </div>
            <div className='card2'>
              <div className='rental'style={{ cursor: "pointer" }}>
              <h3>Rentals</h3>
              <p>Request a trip for a block of time and make multiple stops.</p>
              <img src={image12} alt="rental_car" width='100px'height='auto'/>
              <Link to='/Ride'><button>Details</button></Link>
              
            </div>
          <div className='bike_card'style={{ cursor: "pointer" }}>
              <h3>Bike</h3>
              <p>Get affordable motorbike rides in minutes at your doorstep.</p>
              <img src={image13} alt="bike" width='100px'height='auto'/>
              <Link to='/Ride'><button>Details</button></Link>
              
          </div>
        </div>
        <div className='plan'>
          <h3>Plan for later</h3>
          <div className='plan_page'>
            <div className='plan_left'>
              <h2>Get your ride right <br />with Uber Reserve</h2>
              <img src={image14} alt="watch"width=' 25%'height=' auto'/>
              <h5>Choose date and time</h5>
              <label>Date</label>
              <label  className='time'>Time</label>
              <div className='choose'>
                <input type="date"style={{ cursor: "pointer" }} />
                
                <input type="time" style={{ cursor: "pointer" }}/>
              </div>
              <button style={{ cursor: "pointer" }}>Next</button>
            </div>
            <div className='benefits'>
              <h3>Benefits</h3>
              <img className='image25'src={image25} alt="3" height='100px' />
              <p>Choose your exact pickup time up to 90 days in advance.</p>
              <br /><br />
              <img src={image33} alt="extract"height='100px' />
              <p>Extract wait time included to meet your ride.</p>
              <br />
              <img src={image34} alt="cancel" height='100px'/>
              <p>cancel at no charge up to 60 minutes in advance.</p>
            <Link to='/Terms'>    <button style={{ cursor: "pointer" }}>see terms</button></Link>
          
            </div>
          </div>
          <Link to='/Ride'><button className='price'style={{ cursor: "pointer" }}>See prices</button></Link>
          
        </div>
        <div className='uber_one'>
          <div className='background_img'><img src={image15} alt="black" width='100%' /></div>
          <h2>Uber one</h2>
          <p>One membership for member pricing and experience on rides,deliveries,and more.</p>
          <Link to='https://www.ubereats.com/in/uber-one?marketing_vistor_id=b61e759d-0c16-4e33-840d-6c06772a052d&uclick_id=14cc7a60-ccb5-4765-a507-1a7d656317b7'><button style={{ cursor: "pointer" }}>Try it now</button></Link>
          
        </div>
        <div className='uber_one1'>
          <div className='one_img'>
          <img src={image16} alt="brian"height='320px' />
        </div>
        <div className='ride_friends'>
          <h2>Ride with friends seamlessly</h2>
          <p>Riding with friends just got easier : set up a group ride in the Uber app,invite your friends,and arrive at your destination . Friends who ride together save together.</p>
          <Link to='Learn'> <button style={{ cursor: "pointer",backgroundColor:'white' }}>Learn more</button></Link>
         
        </div>
      </div>
      <div className='use_uber'>
           <h2>Use the Uber app to help you travel your way</h2>
           <div className='card_travel'>
             <div className='option'>
              <img src={image17} alt="option" width='100%'height='auto' />
              <h4>Ride options</h4>
              <p>There's more than one way to move with Uber,no matter where you are or where you're headed next.</p>
              <Link to='Explore'> <button style={{ cursor: "pointer" }}>Search ride options</button></Link>
             
             </div>
             <div className='airportes'>
                <img src={image18} alt="airports"  width='90%' height='62%'/>
                <h4>700+ airports</h4>
                <p>You can request a ride to and from modt major airports.Schedule a ride to the airport for one less thing to worry about.</p>
                <Link to='https://www.uber.com/in/en/airports/?uclick_id=7fe18018-d114-4b02-972e-94218fa07391'> <button style={{ cursor: "pointer" }}>Search airports</button></Link>
               
             </div>
             <div className='cities'>
              <img src={image19} alt="cities" width='90%' height='auto'/>
               <h4>15,000+ cities</h4>
               <p>The app is available in thousands of cities worldwide,so you can request a ride even when you're far from home.</p>
               <Link to='Search_cities'><button style={{ cursor: "pointer" }}>search cities</button></Link>
               
             </div>
           </div>
           <div className='bussiness'>
            <img src={image20} alt="computer" width='1528px' />
            <h2>Looking for business solutions?</h2>
            <p>Get information about how campanies leverag Uber for Business:</p>
            <ul>
              <li>Business travel</li>
              <li>Courtesy rides</li>
              <li>Meal programs</li>
              <li>Item delivery</li>
            </ul>
            <Link to='https://www.uber.com/in/en/business/getting-started/?uclick_id=14cc7a60-ccb5-4765-a507-1a7d656317b7'> <button className='get'>Get started</button></Link>
           
            <Link to='https://www.uber.com/in/en/business/?uclick_id=14cc7a60-ccb5-4765-a507-1a7d656317b7'><button className='check'>Check out our solutions </button></Link>
            
           </div>
           <div className='freq_home'>
          <h2>Frequently asked questions</h2>
           <p
    className="q1" style={{ cursor: "pointer" }}
    onClick={() => frequently("q1")}
>
    Can I have a lost item delivered to me?<br></br><br />
    <span>{answer1}</span>
    
</p>
<br/>

<p
    className="q2" style={{ cursor: "pointer" }}
    onClick={() => frequently("q2")}
>
    Can I rent a car using Uber?<br></br><br />
  <span>{answer2}</span>
</p>
<br/>

<p
    className="q3" style={{ cursor: "pointer" }}
    onClick={() => frequently("q3")}
>
    Can I request a ride that picks up friends in different locations?<br></br><br />
  <span>{answer3}</span>
</p>
<br/>

<p
    className="q4" style={{ cursor: "pointer" }}
    onClick={() => frequently("q4")}
>
    Can I request a taxi on Uber?<br></br><br />
  <span>{answer4}</span>
</p>
<br/>

<p
    className="q5" style={{ cursor: "pointer" }}
    onClick={() => frequently("q5")}
>
    Is there an Uber option for 5 people?
    <br></br><br />
  <span>{answer5}</span>
</p>


        </div>
  
        </div>
         <div className='domore'>
                <h2>Do more in the app</h2>
                <div className='domore_card'>
                <div className='card_domore_left' style={{ cursor: "pointer" }}>
                  <Link to='/Download'><h3> <img src={image21} alt="qr" height='150px'/>Download the uber app</h3>
                  <p>Scan to download</p></Link>
                  
                </div>
                <div className='card_domore_right' style={{ cursor: "pointer" }}>
                  <Link to='/Ride'> <h3 > <img src={image22} alt="sign_uber" height='150px' />Sign up to ride</h3></Link>
                  
                </div>
                </div>
               
              </div>
               <div className='para'>
                  <p>*Join the millions of riders who trust Uber for their everyday travel needs. Get doorstep pickup and dropoff to your chosen destination at the tap of a button. Select from a wide range of affordable options, such as Uber Auto, Uber Moto, and Cabs. <br /> <br></br> 

Limited-period offer: Discount on first 5 trips (cab, auto or moto) completed within 14 days of signing up. The offer is valid only for first-time users. The promotion shall apply automatically to eligible rides. Download the Uber app now to request your first ride. <br /> <br></br> 

Discounts applicable - (i) For cab rides- 100% discount (maximum discount of INR 100 per ride) (ii) For moto rides- 100% discount (maximum discount of INR 45 per ride) <br /> <br></br> 


(iii) For auto rides- 100% discount (maximum discount of INR 70 per ride)<br /> <br></br> 

This offer cannot be combined with any other offers or promo codes. <br /> <br></br> 

The offer is non-transferable and limited to one per user/account. <br /> <br></br> 

Uber reserves the right to alter, suspend or withdraw the promotion offer in the future at its sole discretion without any prior notice. Terms and conditions apply.<br /> <br></br><br /><br /><br />

Certain requirements and features vary by country, region, and city.</p>
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
        </div>
      </div>
  );
}

export default Home;