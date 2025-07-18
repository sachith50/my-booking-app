// server/routes/uploads.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const upload = multer({ storage }); // Initialize multer with our Cloudinary storage

// @route   POST /api/uploads
// @desc    Upload images to Cloudinary
// @access  (For now, public - we'll make it admin-only when we connect it)
router.post('/', upload.array('images', 5), (req, res) => {
    // 'images' is the field name, 5 is the max number of files
    try {
        if (!req.files) {
            return res.status(400).json({ msg: 'No file uploaded' });
        }
        // req.files is an array of files that have been uploaded to Cloudinary
        // Each file object contains a 'path' property which is the Cloudinary URL
        const imageUrls = req.files.map(file => file.path);
        res.json({ imageUrls });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;