// server/routes/enquiry.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    // --- THE FIX: Destructure the new 'children' field from the request body ---
    const { name, city, mobile, email, date, numDays, adults, children, requirements } = req.body;

    // Basic validation
    if (!name || !email || !mobile) {
        return res.status(400).json({ msg: 'Please fill out all required fields.' });
    }

    // --- THE FIX: Add the 'children' information to the email content ---
    const output = `
        <h3>You have a new booking enquiry from the JSK Farmstay Website</h3>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Mobile:</strong> ${mobile}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Preferred Date:</strong> ${date || 'Not specified'}</li>
            <li><strong>Number of Nights:</strong> ${numDays || 'Not specified'}</li>
            <li><strong>Adults:</strong> ${adults || '1'}</li>
            <li><strong>Children (above 3 yrs):</strong> ${children || '0'}</li>
            <li><strong>Special Requirements:</strong> ${requirements || 'None'}</li>
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: `"JSK Farmstay Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Enquiry from ${name} (+${adults} Adults, +${children} Children)`, // Updated subject
        html: output,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ msg: 'Enquiry sent successfully! We will contact you shortly.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ msg: 'Sorry, there was a server error. Please try again later.' });
    }
});

module.exports = router;