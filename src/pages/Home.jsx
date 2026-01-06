import { Link } from 'react-router-dom';
import useBooking from '../hooks/useBooking';

const Home = () => {
  const { booking } = useBooking();

  return (
    <div className="page-container">
      <div className="home-content">
        <h1>Welcome to Our Restaurant</h1>
        <p className="tagline">Experience fine dining at its best</p>
        
        <div className="home-features">
          <div className="feature">
            <span className="feature-icon">🍷</span>
            <h3>Premium Cuisine</h3>
            <p>Crafted by world-class chefs</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⏰</span>
            <h3>Easy Booking</h3>
            <p>Reserve your table in seconds</p>
          </div>
          <div className="feature">
            <span className="feature-icon">✨</span>
            <h3>Elegant Ambiance</h3>
            <p>Perfect for any occasion</p>
          </div>
        </div>

        <div className="home-actions">
          {booking ? (
            <>
              <p className="booking-status">You have an active booking!</p>
              <Link to="/my-booking" className="btn btn-primary">
                View My Booking
              </Link>
            </>
          ) : (
            <Link to="/booking" className="btn btn-primary">
              Book a Table
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;