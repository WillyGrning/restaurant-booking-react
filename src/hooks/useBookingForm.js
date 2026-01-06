import { useState } from 'react';

const useBookingForm = (initialValues = {}) => {
  const [values, setValues] = useState({
    name: initialValues.name || '',
    email: initialValues.email || '',
    date: initialValues.date || '',
    time: initialValues.time || '',
    guests: initialValues.guests || 1
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(values.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!values.date) {
      newErrors.date = 'Date is required';
    }

    if (!values.time) {
      newErrors.time = 'Time is required';
    }

    if (!values.guests || values.guests < 1) {
      newErrors.guests = 'Number of guests must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    setValues(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const resetForm = () => {
    setValues({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 1
    });
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    resetForm
  };
};

export default useBookingForm;