import { useState } from 'react';
import BookingContext from './BookingContext';
import { getBookingData, saveBookingData, clearBookingData } from '../utils/storage';

const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState(() => {
    return getBookingData();
  });

  const createBooking = (data) => {
    const bookingData = {
      name: data.name,
      email: data.email,
      date: data.date,
      time: data.time,
      guests: data.guests
    };
    
    saveBookingData(bookingData);
    setBooking(bookingData);
  };

  const cancelBooking = () => {
    clearBookingData();
    setBooking(null);
  };

  const value = {
    booking,
    createBooking,
    cancelBooking
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;