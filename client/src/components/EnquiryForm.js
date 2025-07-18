// client/src/components/EnquiryForm.js
import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'; // <-- 1. Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // <-- 2. Import its styles
import './EnquiryForm.css';

const EnquiryForm = () => {
    // We will now store the date as a proper Date object, not a string
    const [formData, setFormData] = useState({
        name: '', city: '', mobile: '', email: '',
        date: null, // <-- 3. Initialize date as null
        numDays: '', adults: '1', requirements: ''
    });

    const [loading, setLoading] = useState(false);
    const [finalMessage, setFinalMessage] = useState('');

    const { name, city, mobile, email, date, numDays, adults, requirements } = formData;

    // This handles changes for all text inputs
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // --- VVV THIS IS A NEW, DEDICATED HANDLER FOR THE DATE PICKER VVV ---
    const handleDateChange = (selectedDate) => {
        setFormData({ ...formData, date: selectedDate });
    };

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setFinalMessage('');

        // Prepare the data to be sent, formatting the date object into a simple string
        const dataToSend = {
            ...formData,
            date: date ? date.toLocaleDateString('en-GB') : '', // Format: DD/MM/YYYY
        };

        try {
            const res = await axios.post('/api/enquiry', dataToSend);
            setFinalMessage(res.data.msg);
            // Reset the form, including the date field back to null
            setFormData({ name: '', city: '', mobile: '', email: '', date: null, numDays: '', adults: '1', requirements: '' });
        } catch (err) {
            setFinalMessage(err.response?.data?.msg || 'An error occurred.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="enquiry-card">
            <h3>Enquiry</h3>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={name} onChange={onChange} placeholder="NAME" required />
                <input type="text" name="city" value={city} onChange={onChange} placeholder="CITY" required />
                <input type="tel" name="mobile" value={mobile} onChange={onChange} placeholder="MOBILE" required />
                <input type="email" name="email" value={email} onChange={onChange} placeholder="EMAIL" required />
                
                {/* --- VVV THIS IS THE REPLACEMENT FOR YOUR OLD DATE INPUT VVV --- */}
                <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                    minDate={new Date()} // Disables all past dates
                    dateFormat="dd-MM-yyyy" // Sets the display format
                    placeholderText="PREFERRED CHECK-IN DATE"
                    className="date-input-full" // A class for consistent styling
                    required
                />
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <input type="number" name="numDays" value={numDays} onChange={onChange} placeholder="NUMBER OF NIGHTS" min="1" required />
                    <select name="adults" value={adults} onChange={onChange}>
                        {[...Array(8)].map((_, i) => <option key={i} value={i+1}>{i+1} Adult{i > 0 ? 's' : ''}</option>)}
                    </select>
                </div>

                <textarea name="requirements" value={requirements} onChange={onChange} placeholder="SPECIAL REQUIREMENTS"></textarea>
                
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Enquiry'}
                </button>
            </form>
            {finalMessage && <p className="form-message">{finalMessage}</p>}
        </div>
    );
};
export default EnquiryForm;