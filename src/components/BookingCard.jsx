const BookingCard = ({ booking, onCancel }) => {
  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      onCancel();
    }
  };

  return (
    <div className="booking-card">
      <h2>Your Booking Details</h2>
      <div className="booking-details">
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
      <button onClick={handleCancel} className="cancel-btn">
        Cancel Booking
      </button>
    </div>
  );
};

export default BookingCard;