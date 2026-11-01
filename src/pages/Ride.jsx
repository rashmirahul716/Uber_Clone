 import './Ride.css'
 import {Link}from 'react-router-dom'
 import image3 from '../assets/clock.png';
 import image23 from '../assets/line.png'
 


 function Ride(){
   return(
     <div className="ride">
       <header className="ride_top_nav">
              <div className="uber_nav_left">
                <Link to="/Uber" className="ride_brand_logo">Uber</Link>
                <div className="uber_nav_links">
                  <Link to="/Ride" className="ride_nav_link_1">Ride</Link>
                  <Link to="/Ride" className="ride_nav_link">Rent</Link>
                </div>
              </div>
              <div className="uber_nav_right">
                <Link to="/Login" className="ride_nav_text_link">Log in</Link>
                <Link to="/Signup" className="ride_nav_signup_btn">Sign up</Link>
              </div>
            </header>
       <div className="left_ride">
        <h2>Get a ride
         
        </h2>
      
         <input  type="search" placeholder=" Pickup location"/>
           <img  className ='image23_ride'src={image23} alt="line" height='100px' />
         <input type="search"placeholder="Dropoff location" className='drop'/>
         <h3 className="pickup-now" style={{ cursor: "pointer" }}><img className="image3" src={image3} alt="clock" width='20px'/>pickup now</h3>
         <button style={{ cursor: "pointer" }}>For me</button>
         <button style={{ cursor: "pointer" }} className='search'>Search</button>
       </div>
        <div className="map-container">
      <iframe src="https://maps.google.com/maps?q=Kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
    </div>
     </div>
   )
   }
   export default Ride
