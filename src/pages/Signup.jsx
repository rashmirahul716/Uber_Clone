import './Signup.css';
import image4 from '../assets/uber.png';
import image5 from '../assets/google.png';
import image6 from '../assets/apple.png';
import image7 from '../assets/qr.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed) {
      setError('Please enter your email address');
      return;
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(trimmed)) {
      setError('Please enter a valid Gmail address (@gmail.com)');
      return;
    }

    setError('');
    navigate('/');
  };

  return (
    <div className='signup_page'>
      <div className='signup_uber'>
        <div className='image4'><img src={image4} height="auto" width="65px" alt="uber" /></div>
      </div>
      <div className='signup_box'>
        <h2>What's your phone number or email?</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter phone number or email"
            className="signup_input"
            style={{ cursor: "pointer" }}
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
              if (error) setError('');
            }}
          />
          {error && <p style={{ color: '#e11900', fontSize: '13px', margin: '4px 0 10px 0', textAlign: 'left' }}>{error}</p>}
          <button type="submit" className="continue_button" style={{ cursor: "pointer" }}>Continue</button>
        </form>
        <div className="or">__________________or________________</div>
        <button type="button" className="google_button" style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
          <img src={image5} height="auto" width="5%" alt="google" />Continue with Google
        </button>
        <button type="button" className="apple_button" style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
          <img src={image6} height="auto" width="5%" alt="apple" />Continue with Apple
        </button>
        <div className="or">__________________or________________</div>
        <button type="button" className="QR_button" style={{ cursor: "pointer" }} onClick={() => navigate('/')}>
          <img src={image7} height="auto" width="5%" alt="qr" />log in with QR code
        </button>
        <p>You consent to receive a verification code by text or whatsapp.Message and data rates may apply.</p>
      </div>
    </div>
  );
}

export default Signup;
