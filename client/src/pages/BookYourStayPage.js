// client/src/pages/BookYourStayPage.js
import React from 'react';
import EnquiryForm from '../components/EnquiryForm'; // Import the new component
import './BookYourStayPage.css';

const BookYourStayPage = () => {
    return (
        <div className="container">
            <div className="booking-page-layout">
                <div className="details-content">
                    <h1>Enquiry</h1>
                    <p>For Bookings please fill in the form, We will contact you via mail or on phone.</p>
                    <div style={{ marginTop: '40px' }}>
                        <p style={{ margin: 0 }}>Thanks,</p>
                        <p style={{ margin: 0 }}>Sneha | Host</p>
                        <p style={{ margin: 0, marginTop: '20px' }}>+91 [9845843468]</p>
                        <p style={{ margin: 0 }}>bksneh@gmail.com</p>
                    </div>
                </div>
                <div className="sidebar">
                    <EnquiryForm />
                </div>
            </div>
        </div>
    );
};
export default BookYourStayPage;