// server/server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- The ONLY API Route The Website Needs ---
app.post('/api/enquiry', async (req, res) => {
    const { name, city, mobile, email, date, numDays, adults, requirements } = req.body;

    if (!name || !email || !mobile) {
        return res.status(400).json({ msg: 'Please fill out all required fields.' });
    }

    const output = `
        <h3>You have a new booking enquiry from the JSK Farmstay Website</h3>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>City:</strong> ${city}</li>
            <li><strong>Mobile:</strong> ${mobile}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Preferred Date:</strong> ${date || 'Not specified'}</li>
            <li><strong>Number of Days:</strong> ${numDays || 'Not specified'}</li>
            <li><strong>Adults:</strong> ${adults || 'Not specified'}</li>
            <li><strong>Special Requirements:</strong> ${requirements || 'None'}</li>
        </ul>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your Gmail address from .env
            pass: process.env.EMAIL_PASS, // Your Gmail App Password from .env
        },
    });

    let mailOptions = {
        from: `"JSK Farmstay Website" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Sends the email to yourself
        subject: `New Enquiry from ${name}`,
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

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));