// client/src/pages/AvailabilityPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './AvailabilityPage.css'; // Make sure you have this CSS file

const AvailabilityPage = () => {
    const [bookedDates, setBookedDates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllBookedDates = async () => {
            try {
                // Fetch the consolidated list of all booked dates
                const res = await axios.get('/api/bookings/all-booked-dates');
                // Convert the date strings from the API into proper Date objects
                setBookedDates(res.data.map(dateStr => new Date(dateStr)));
            } catch (err) {
                console.error("Failed to fetch booked dates:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAllBookedDates();
    }, []);

    if (loading) {
        return <div className="container" style={{ textAlign: 'center' }}><p>Loading availability calendar...</p></div>;
    }

    return (
        <div className="container availability-container">
            <h1>Our Availability</h1>
            <p>
                This calendar shows all currently booked dates for JSK Farmstay. 
                Dates marked in red are unavailable. All other dates are open for booking.
            </p>
            <div className="master-calendar-wrapper">
                {/* --- VVV THIS IS THE FIX VVV --- */}
                <DatePicker
                    selected={new Date()} // Provide a default selected date to ensure render
                    onChange={() => {}} // No action needed, it's for display only
                    monthsShown={2} // Show two months for a better view
                    minDate={new Date()}
                    excludeDates={bookedDates}
                    inline // This is the key prop to make the calendar always visible
                />
                {/* --- ^^^ END OF FIX ^^^ --- */}
            </div>
            <div className="calendar-key">
                <span className="key-item"><span className="color-box available"></span> = Available</span>
                <span className="key-item"><span className="color-box unavailable"></span> = Booked</span>
            </div>
        </div>
    );
};

export default AvailabilityPage;