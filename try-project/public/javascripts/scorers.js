// Import necessary modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');

var app = express();
app.use(cors());
// Create an Express router instance
const router = express.Router();

// Define the base endpoint for the football API
const pl2023 = 'http://api.football-data.org/v4/competitions/PL/scorers?season=2023&limit=20';
const pl2022 = 'http://api.football-data.org/v4/competitions/PL/scorers?season=2022&limit=20';
const pl2021 = 'http://api.football-data.org/v4/competitions/PL/scorers?season=2021&limit=20';
const pl2020 = 'http://api.football-data.org/v4/competitions/PL/scorers?season=2020&limit=20';


const laliga2023 = 'http://api.football-data.org/v4/competitions/PD/scorers?season=2023&limit=20';
const laliga2022 = 'http://api.football-data.org/v4/competitions/PD/scorers?season=2022&limit=20';
const laliga2021 = 'http://api.football-data.org/v4/competitions/PD/scorers?season=2021&limit=20';
const laliga2020 = 'http://api.football-data.org/v4/competitions/PD/scorers?season=2020&limit=20';


const bl2023 = 'http://api.football-data.org/v4/competitions/BL1/scorers?season=2023&limit=20';
const bl2022 = 'http://api.football-data.org/v4/competitions/BL1/scorers?season=2022&limit=20';
const bl2021 = 'http://api.football-data.org/v4/competitions/BL1/scorers?season=2021&limit=20';
const bl2020 = 'http://api.football-data.org/v4/competitions/BL1/scorers?season=2020&limit=20';

const champsl = 'http://api.football-data.org/v4/competitions/CL/scorers';

const l12023 = 'http://api.football-data.org/v4/competitions/FL1/scorers?season=2023&limit=20';
const l12022 = 'http://api.football-data.org/v4/competitions/FL1/scorers?season=2022&limit=20';
const l12021 = 'http://api.football-data.org/v4/competitions/FL1/scorers?season=2021&limit=20';
const l12020 = 'http://api.football-data.org/v4/competitions/FL1/scorers?season=2020&limit=20';


const eredivise2023 = 'http://api.football-data.org/v4/competitions/DED/scorers?season=2023&limit=20';
const eredivise2022 = 'http://api.football-data.org/v4/competitions/DED/scorers?season=2022&limit=20';
const eredivise2021 = 'http://api.football-data.org/v4/competitions/DED/scorers?season=2021&limit=20';
const eredivise2020 = 'http://api.football-data.org/v4/competitions/DED/scorers?season=2020&limit=20';


const sa2023 = 'http://api.football-data.org/v4/competitions/SA/scorers?season=2023&limit=20';
const sa2022 = 'http://api.football-data.org/v4/competitions/SA/scorers?season=2022&limit=20';
const sa2021 = 'http://api.football-data.org/v4/competitions/SA/scorers?season=2021&limit=20';
const sa2020 = 'http://api.football-data.org/v4/competitions/SA/scorers?season=2020&limit=20';


const elc2023 = `http://api.football-data.org/v4/competitions/ELC/scorers?season=2023&limit=20`;
const elc2022 = `http://api.football-data.org/v4/competitions/ELC/scorers?season=2022&limit=20`;
const elc2021 = `http://api.football-data.org/v4/competitions/ELC/scorers?season=2021&limit=20`;
const elc2020 = `http://api.football-data.org/v4/competitions/ELC/scorers?season=2020&limit=20`;


const ppl2023 = `http://api.football-data.org/v4/competitions/PPL/scorers?season=2023&limit=20`;
const ppl2022 = `http://api.football-data.org/v4/competitions/PPL/scorers?season=2022&limit=20`;
const ppl2021 = `http://api.football-data.org/v4/competitions/PPL/scorers?season=2021&limit=20`;
const ppl2020 = `http://api.football-data.org/v4/competitions/PPL/scorers?season=2020&limit=20`;


// Define the route handler for fetching all competitions


    router.get('/premierleague/2023', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(pl2023, {
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
    })

    router.get('/premierleague/2022', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(pl2022, {
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
    })

    router.get('/premierleague/2021', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(pl2021, {
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
    })

    router.get('/premierleague/2020', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(pl2020, {
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
    })

    router.get('/laliga/2023', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(laliga2023, {
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
    })   
    
    router.get('/laliga/2022', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(laliga2022, {
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
    })    

    router.get('/laliga/2021', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(laliga2021, {
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
    })    

    router.get('/laliga/2020', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(laliga2020, {
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
    })    
    
    router.get('/bundesliga/2023', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(bl2023, {
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
    })    

    router.get('/bundesliga/2022', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(bl2022, {
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
    })    

    router.get('/bundesliga/2021', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(bl2021, {
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
    })    

    router.get('/bundesliga/2020', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(bl2020, {
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
    })    

    router.get('/championsleague', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(champsl, {
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
    })  
  
    router.get('/league1/2023', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(l12023, {
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
    })    

    router.get('/league1/2022', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(l12022, {
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
    })  

    router.get('/league1/2021', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(l12021, {
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
    })  

    router.get('/league1/2020', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(l12020, {
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
    })  


    router.get('/eredivise/2023', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(eredivise2023, {
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
    })    

    router.get('/eredivise/2022', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(eredivise2022, {
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
    })    

    router.get('/eredivise/2021', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(eredivise2021, {
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
    })    

    router.get('/eredivise/2020', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(eredivise2020, {
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
    })    

    router.get('/seriaa/2023', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(sa2023, {
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

    router.get('/seriaa/2022', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(sa2022, {
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

    router.get('/seriaa/2021', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(sa2021, {
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

    router.get('/seriaa/2020', async (req,res)=> {
        try {
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(sa2020, {
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

    router.get('/championship/2023', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(elc2023, {
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
    
    router.get('/championship/2022', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(elc2022, {
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
    
    router.get('/championship/2021', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(elc2021, {
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
    
    router.get('/championship/2020', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(elc2020, {
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
    
    router.get('/primeraliga/2023', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(ppl2023, {
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
    
    router.get('/primeraliga/2022', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(ppl2022, {
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
    
    router.get('/primeraliga/2021', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(ppl2021, {
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
    
    router.get('/primeraliga/2020', async (req,res)=> {
        try {
            const { matchday } = req.params;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(ppl2020, {
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
