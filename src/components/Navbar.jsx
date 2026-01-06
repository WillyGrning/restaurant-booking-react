import { Link } from 'react-router-dom';
import useBooking from '../hooks/useBooking';

const Navbar = () => {
  const { booking } = useBooking();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🍽️ Restaurant Booking
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-link">Book</Link>
          </li>
          {booking && (
            <li className="nav-item">
              <Link to="/my-booking" className="nav-link">My Booking</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;