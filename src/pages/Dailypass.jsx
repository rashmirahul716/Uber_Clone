
import './Dailypass.css';
import { useState } from 'react';
import {Link}from 'react-router-dom'

function Daily() {
  const [days, setDays] = useState('');
  const [time, setTime] = useState('');
  const [plan, setPlan] = useState('');

  const travelDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  function selectDay(day) {
    if (days.includes(day)) {
      setDays(days.filter(item => item !== day));
    } else {
      setDays([...days, day]);
    }
  }

  return (
    <div className="daily">

      <main className="daily-content">

        <section className="daily-hero">
          <Link to='/Daily'> <p>← Back</p></Link>
          <h1>DailyPass</h1>
          <h3>Set up your regular route and start saving.</h3>

          <div className="steps">
            <div className="step">
              <b>1</b>
              <span>Route</span>
            </div>
            <div className="step">
              <b>2</b>
              <span>Schedule</span>
            </div>
            <div className="step">
              <b>3</b>
              <span>Pass</span>
            </div>
            <div className="step">
              <b>4</b>
              <span>Done</span>
            </div>
          </div>
        </section>
        <section className="daily-section">
          <h3>1. Your Route</h3>
          <p>Set your pickup and destination.</p>

          <div className="route-cards">
            <div className="route-card">
              <span className="round-icon">⌂</span>
              <div>
                <small>Pickup</small>
                <br />
                               <input type="text"placeholder="Pickup location"onChange={(e) => setPickup(e.target.value)}className="uber_input_field"/>
              </div>
            </div>

            <div className="route-card">
              <span className="round-icon">●</span>
              <div>
                <small>Destination</small>
                                  <input type="text"placeholder="         Dropoff location"onChange={(e) => setDropoff(e.target.value)}className="uber_input_field"/>
              </div>
            </div>
          </div>
        </section>
        <section className="daily-section">
          <h3>2. Schedule</h3>
          <p>Choose your travel days and time.</p>
          <div className="schedule-row">
            <div className="travel-days">
              <h4>Travel days</h4>
              <div className="day-buttons">
                {travelDays.map(day => (
                  <button
                    key={day}
                    className={days.includes(day) ? 'day selected-day' : 'day'}
                    onClick={() => selectDay(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="pickup-time">
              <h4>Pickup time</h4>
              <select
                value={time}
                onChange={e => setTime(e.target.value)}
              >
                <option>7:00 AM</option>
                <option>7:30 AM</option>
                <option>8:00 AM</option>
                <option>8:30 AM</option>
                <option>9:00 AM</option>
                <option>5:00 PM</option>
                <option>5:30 PM</option>
                <option>6:00 PM</option>
              </select>
            </div>
          </div>
        </section>

        {/* Choose plan */}
        <section className="daily-section">
          <h3>3. Choose your plan</h3>
          <p>Select the duration of your DailyPass.</p>

          <div className="plan-cards">
            <div
              className='plan_weekly'
              onClick={() => setPlan('Weekly')}
            >
              <input
                type="radio"
                checked={plan === 'Weekly'}
                onChange={() => setPlan('Weekly')}
              />
              
              <div>
                <h4>Weekly</h4>
                <small>7 days</small>
              </div>
            </div>

            <div
              className='plan_monthly'
              onClick={() => setPlan('Monthly')}
            >
              <input
                type="radio"
                checked={plan === 'Monthly'}
                onChange={() => setPlan('Monthly')}
              />
             
              <div>
                <h4>Monthly</h4>
                <small>30 days</small>
              </div>
            </div>

            <div
              className='plan_semester'
              onClick={() => setPlan('Semester')}
            >
              <input
                type="radio"
                checked={plan === 'Semester'}
                onChange={() => setPlan('Semester')}
              />
              <div>
                <h4>Semester</h4>
                <small>Valid for your term</small>
              </div>
            </div>
          </div>
         
        </section>
 <button  className='confirm_plan' onClick={() => alert('confirmed your plan')}>Confirm plan</button>
        {/* Pass summary */}
        <section className="pass-summary">
          <div className="summary-heading">
            <h3>Your DailyPass</h3>
            <span className="active-label">Active</span>
          </div>

          <div className="summary-details">
            <div className="summary-item">
              <div>
                <small>Upcoming ride</small>
                <h4>Tomorrow, {time}</h4>
                <small>Home → College / Office</small>
              </div>
            </div>

            <div className="summary-item">
              <div>
                <small>Rides completed</small>
                <h4>0</h4>
                <small>This monthly cycle</small>
              </div>
            </div>

            <div className="summary-item">
              <div>
                <small>Money saved</small>
                <h4>0</h4>
                <small>vs. regular fare</small>
              </div>
            </div>
          </div>

          <div className="summary-buttons">
            <button onClick={() => alert('Today’s ride skipped')}>
              Skip today
            </button>
            <button onClick={() => alert('DailyPass subscription is canceled')}>
              Cancel plan
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Daily;
