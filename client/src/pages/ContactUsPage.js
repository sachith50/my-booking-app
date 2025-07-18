// client/src/pages/ContactUsPage.js
import React from 'react';
import EnquiryForm from '../components/EnquiryForm';
import './ContactUsPage.css';

const ContactUsPage = () => {
    return (
        <div className="container contact-page">
            <div className="contact-info-panel">
                <h1>Enquiry</h1>
                <p className="contact-subheading">
                    For bookings please fill in the form. We will contact you via mail or on phone to confirm availability and proceed.
                </p>
                
                <div className="policy-box">
                    <h3>Important Policies</h3>
                    <ul>
                        <li>This is a strictly <strong>vegetarian</strong> property. Non-vegetarian food is not permitted.</li>
                        
                        {/* --- THE FIX: "no-alcohol" is now bolded --- */}
                        <li>To maintain a serene and family-friendly atmosphere, this is a <strong>NO-ALCOHOL</strong> property.</li>
                        <li><strong>SMOKING</strong> is not allowed inside the house.</li>
                        <li><strong>Child Policy:</strong> Children above 3 years of age are considered extra guests and will be charged accordingly.</li>
                        <li>We are pet-friendly, but request that pets are not allowed on beds or sofas.</li>
                        <li>Your privacy is paramount. When you book, the entire house is exclusively yours.</li>
                    </ul>
                </div>

                <div className="contact-details">
                    <p>Thanks,</p>
                    <p><strong>Sneha | Host, JSK Farmstay</strong></p>
                    <p className="contact-item">
                        <span className="contact-icon">📞</span> +91 9845843468
                    </p>
                    <p className="contact-item">
                        <span className="contact-icon">✉️</span> bksneh@gmail.com
                    </p>
                </div>
            </div>

            <div className="contact-form-panel">
                <EnquiryForm />
            </div>
        </div>
    );
};
export default ContactUsPage;