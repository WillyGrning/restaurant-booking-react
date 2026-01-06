import { useNavigate } from 'react-router-dom';
import useBooking from '../hooks/useBooking';
import useBookingForm from '../hooks/useBookingForm';

const Booking = () => {
  const navigate = useNavigate();
  const { createBooking } = useBooking();
  const { values, errors, handleChange, validate } = useBookingForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      createBooking(values);
      navigate('/confirmation');
    }
  };

  return (
    <div className="page-container">
      <div className="booking-form-container">
        <h1>Book Your Table</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                className={errors.date ? 'error' : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.date && <span className="error-message">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={values.time}
                onChange={handleChange}
                className={errors.time ? 'error' : ''}
              />
              {errors.time && <span className="error-message">{errors.time}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests *</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={values.guests}
              onChange={handleChange}
              className={errors.guests ? 'error' : ''}
              min="1"
              max="20"
            />
            {errors.guests && <span className="error-message">{errors.guests}</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Reserve Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;