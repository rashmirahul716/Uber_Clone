
import './Dailypass.css';
import { useState } from 'react';
import {Link}from 'react-router-dom'

function Daily() {
  const [days, setDays] = useState('');
  const [time, setTime] = useState('');
  const [plan, setPlan] = useState('');
  const [pickup, setPickup] = useState('');
const [dropoff, setDropoff] = useState('');

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

      <Link to="/Daily" className="back-link">← Back</Link>

      <div className="daily-layout">

        {/* LEFT SIDE */}
        <div className="daily-left">

          {/* ROUTE */}
          <section className="daily-section">
            <h3>1. Your Route</h3>
            <p>Set your pickup and destination.</p>

            <div className="route-cards">

              <div className="route-card">
                <span className="round-icon">⌂</span>
                <div>
                  <small>Pickup</small>
                  <input
                    type="text"
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="uber_input_field"
                  />
                </div>
              </div>

              <div className="route-card">
                <span className="round-icon">●</span>
                <div>
                  <small>Destination</small>
                  <input
                    type="text"
                    placeholder="Dropoff location"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="uber_input_field"
                  />
                </div>
              </div>

            </div>
          </section>

          {/* SCHEDULE */}
          <section className="daily-section">
            <h3>2. Schedule</h3>
            <p>Choose your travel days and time.</p>

            <div className="schedule-row">

              <div className="travel-days">
                <h4>Travel days</h4>

                <div className="day-buttons">
                  {travelDays.map(day => (
                    <label key={day} className="day">
                      <input
                        type="checkbox"
                        checked={days.includes(day)}
                        onChange={() => selectDay(day)}
                      />
                      {day}
                    </label>
                  ))}
                </div>
              </div>

              <div className="pickup-time">
                <h4>Pickup time</h4>

                <select
                  value={time}
                  onChange={e => setTime(e.target.value)}
                >
                  <option value="">Select time</option>
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

          {/* CHOOSE PLAN */}
          <section className="daily-section">
            <h3>3. Choose your plan</h3>
            <p>Select the duration of your DailyPass.</p>

            <div className="plan-cards">

              {['Weekly', 'Monthly', 'Semester'].map(item => (
                <label
                  key={item}
                  className={plan === item ? 'plan-card active-plan' : 'plan-card'}
                >
                  <input
                    type="radio"
                    name="plan"
                    checked={plan === item}
                    onChange={() => setPlan(item)}
                  />

                  <div>
                    <h4>{item}</h4>
                    <small>
                      {item === 'Weekly' ? '7 days' :
                       item === 'Monthly' ? '30 days' :
                       'Valid for your term'}
                    </small>
                  </div>
                </label>
              ))}

            </div>
          </section>

          <button
            className="confirm_plan"
            onClick={() => alert('Confirmed your plan')}
          >
            Confirm Plan
          </button>

        </div>

        {/* RIGHT SIDE */}
        <div className="daily-right">

          {/* CONFIRMATION DETAILS */}
          <section className="confirmation-details">
            <h3>Confirmation Details</h3>

            <div className="detail-item">
              <small>Pickup Location</small>
              <h4>{pickup || 'Not selected'}</h4>
            </div>

            <div className="detail-item">
              <small>Destination</small>
              <h4>{dropoff || 'Not selected'}</h4>
            </div>

            <div className="detail-item">
              <small>Travel Days</small>
              <h4>{days.length ? days.join(', ') : 'Not selected'}</h4>
            </div>

            <div className="detail-item">
              <small>Pickup Time</small>
              <h4>{time || 'Not selected'}</h4>
            </div>

            <div className="detail-item">
              <small>Selected Plan</small>
              <h4>{plan || 'Not selected'}</h4>
            </div>

          </section>

          {/* DAILY PASS SUMMARY */}
          <section className="pass-summary">

            <h3>Your DailyPass</h3>

            <div className="summary-details">

              <div className="summary-item">
                <small>Total Rides</small>
                <h4>2</h4>
              </div>

              <div className="summary-item">
                <small>Money Saved</small>
                <h4>₹40</h4>
              </div>

              <div className="summary-item">
                <small>Next Trip</small>
                <h4>{time || 'Not scheduled'}</h4>
              </div>

            </div>

            <div className="summary-buttons">

              <button onClick={() => alert("Today's ride skipped")}>
                Skip
              </button>

              <button onClick={() => alert('DailyPass cancelled')}>
                Cancel
              </button>

            </div>

          </section>

        </div>

      </div>

    </main>

  </div>
);

}

export default Daily;
