import { Link } from 'react-router-dom';
import useBooking from '../hooks/useBooking';

const Confirmation = () => {
  const { booking } = useBooking();

  if (!booking) {
    return (
      <div className="page-container">
        <div className="empty-state">
          <h2>No Booking Found</h2>
          <p>You don't have any active booking at the moment.</p>
          <Link to="/booking" className="btn btn-primary">
            Make a Reservation
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="confirmation-container">
        <div className="success-icon">✅</div>
        <h1>Booking Confirmed!</h1>
        <p className="confirmation-message">
          Thank you for your reservation. We look forward to serving you!
        </p>

        <div className="confirmation-details">
          <h2>Reservation Details</h2>
          <div className="detail-row">
            <span className="detail-label">Name:</span>
            <span className="detail-value">{booking.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">{booking.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date:</span>
            <span className="detail-value">{booking.date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Time:</span>
            <span className="detail-value">{booking.time}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Guests:</span>
            <span className="detail-value">{booking.guests}</span>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
          <Link to="/my-booking" className="btn btn-primary">
            View My Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;