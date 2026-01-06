import { useNavigate } from 'react-router-dom';
import useBooking from '../hooks/useBooking';
import BookingCard from '../components/BookingCard';

const MyBooking = () => {
  const navigate = useNavigate();
  const { booking, cancelBooking } = useBooking();

  const handleCancel = () => {
    cancelBooking();
    navigate('/booking');
  };

  if (!booking) {
    return (
      <div className="page-container">
        <div className="empty-state">
          <h2>No Active Booking</h2>
          <p>You don't have any reservations at the moment.</p>
          <button onClick={() => navigate('/booking')} className="btn btn-primary">
            Book a Table
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="my-booking-container">
        <h1>My Reservation</h1>
        <BookingCard booking={booking} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default MyBooking;