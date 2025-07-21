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
                        <li>To maintain a serene and family-friendly atmosphere, this is a <strong>NO-ALCOHOL</strong> property.</li>
                        <li><strong>SMOKING</strong> is not allowed inside the house.</li>
                        <li><strong>Child Policy:</strong> Children above 3 years of age are considered extra guests and will be charged accordingly.</li>
                        <li>We are pet-friendly, but request that pets are not allowed on beds or sofas.</li>
                        <li>Your privacy is paramount. When you book, the entire house is exclusively yours.</li>
                        <li>Meals will be charged <strong>per head</strong>.</li>
                    </ul>

                    <h3 className="policy-subheading">Cancellation Policy</h3>
                    <ul>
                        <li>More than 15 days prior to check-in - 15% will be deducted from the amount.</li>
                        <li>15-7 Days prior to check-in - 20% will be deducted from the amount.</li>
                        <li>7-3 Days prior to check-in - 50% will be deducted from the amount.</li>
                        <li>3-0 Days prior to check-in – <strong>NO REFUND</strong></li>
                        <li>For Diwali / Christmas / Long weekend / Public holidays - <strong>NO REFUND</strong></li>
                    </ul>
                </div>

                {/* --- VVV --- THIS IS THE NEW LOCATION SECTION --- VVV --- */}
                <div className="location-box">
                    <h3>Our Location</h3>
                    <p>
                        JSK Farmstay<br/>
                        KRS Backwaters, Yedahalli Village,<br/>
                        Yelawala Hobli, Mysuru - 571130
                    </p>
                    <h3 className="location-subheading">How to Reach Us</h3>
                    <ul>
                        <li><strong>From Bengaluru South:</strong> Approx. 2 hours drive.</li>
                        <li><strong>From Bengaluru North:</strong> Approx. 2.5 hours drive.</li>
                        <li>We are just half an hour away from <strong>Mysuru</strong> city!</li>
                    </ul>
                </div>
                {/* --- ^^^ --- END OF NEW SECTION --- ^^^ --- */}

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