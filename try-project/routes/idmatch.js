// Import necessary modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');

var app = express();
app.use(cors());
// Create an Express router instance
const router = express.Router();

// Define the route handler for fetching all competitions


router.get('/', async (req,res)=> {
    try {
        // const { id } = req.params;

        const matchone = `http://api.football-data.org/v4/matches/327117`;
        // Make a request to the football API to fetch all competitions
        const response = await axios.get(matchone, {
            headers: {
                'X-Auth-Token': '3d87ee9857aa46dc883317c32b4675fe' // Replace 'your-api-key-here' with your actual API key
            }
        });
        // Send the response data back to the client
        res.json(response.data);
    } catch (error) {
        // Handle errors
        console.error('Error fetching competitions:', error.message);
        res.status(500).json({ error: 'Failed to fetch competitions' });
    }
});

// Export the router to be used in the main application
module.exports = router;