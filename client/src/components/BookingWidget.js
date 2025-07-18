// client/src/components/BookingWidget.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './BookingWidget.css';

const BookingWidget = ({ propertyId, pricePerNight }) => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [unavailableDates, setUnavailableDates] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Fetch the dates that are already booked
        const fetchUnavailableDates = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/bookings/unavailable-dates/${propertyId}`);
                // Convert string dates from backend into Date objects
                setUnavailableDates(res.data.map(date => new Date(date)));
            } catch (error) {
                console.error("Could not fetch unavailable dates", error);
            }
        };
        fetchUnavailableDates();
    }, [propertyId]);
    
    useEffect(() => {
        // Calculate the total price whenever dates change
        if(checkIn && checkOut) {
            const numberOfNights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
            setTotalPrice(numberOfNights > 0 ? numberOfNights * pricePerNight : 0);
        } else {
            setTotalPrice(0);
        }
    }, [checkIn, checkOut, pricePerNight]);

    const handleBookingSubmit = async () => {
        if (!checkIn || !checkOut || numberOfGuests <= 0) {
            alert('Please select check-in, check-out dates, and number of guests.');
            return;
        }
        
        const bookingData = {
            propertyId,
            userId: 'temporary_user_id', // We'll replace this when we have user accounts
            checkIn,
            checkOut,
            numberOfGuests,
        };
        
        try {
            const response = await axios.post('http://localhost:5000/api/bookings', bookingData);
            alert(`Booking successful! Your total price is $${response.data.totalPrice}. Confirmation sent.`);
            // You could redirect the user or clear the form here
            setCheckIn(null);
            setCheckOut(null);
        } catch (error) {
            alert('Booking failed. The selected dates might have just been taken.');
            console.error("Booking failed:", error);
        }
    };

    return (
        <div className="booking-box" style={{ flex: 1, background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', alignSelf: 'flex-start' }}>
            <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1.5rem' }}>${pricePerNight} <span style={{fontWeight: 'normal', fontSize: '1rem'}}>per night</span></h3>
            
            <div className="date-picker-container" style={{display: 'flex', gap: '10px', marginBottom: '1rem'}}>
                <DatePicker
                    selected={checkIn}
                    onChange={(date) => setCheckIn(date)}
                    selectsStart
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={new Date()}
                    excludeDates={unavailableDates}
                    placeholderText="Check-in"
                    className="date-picker" // You can style this class
                />
                <DatePicker
                    selected={checkOut}
                    onChange={(date) => setCheckOut(date)}
                    selectsEnd
                    startDate={checkIn}
                    endDate={checkOut}
                    minDate={checkIn}
                    excludeDates={unavailableDates}
                    placeholderText="Check-out"
                    className="date-picker"
                />
            </div>
            <div style={{marginBottom: '1rem'}}>
                <label>Guests: </label>
                <input type="number" value={numberOfGuests} onChange={e => setNumberOfGuests(e.target.value)} min="1" style={{width: '100%', padding: '0.5rem'}} />
            </div>

            {totalPrice > 0 && (
                <div className="price-preview" style={{textAlign: 'center', marginBottom: '1rem'}}>
                    <h4>Total: ${totalPrice.toFixed(2)}</h4>
                </div>
            )}
            
            <button onClick={handleBookingSubmit} style={{ width: '100%', padding: '1rem', background: 'var(--color-water-deep)', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }}>
                Reserve
            </button>
        </div>
    );
};


export default BookingWidget;