// Import necessary modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');

var app = express();
app.use(cors());
// Create an Express router instance
const router = express.Router();

// Define the route handler for fetching all competitions


router.get('/premierleague/2024', async (req,res)=> {
    try {
        const { matchday } = req.params;

        const pl2024 = `http://api.football-data.org/v4/competitions/PL/matches?season=2024`;
        // Make a request to the football API to fetch all competitions
        const response = await axios.get(pl2024, {
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


    router.get('/premierleague/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;

            const pl2024 = `http://api.football-data.org/v4/competitions/PL/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(pl2024, {
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

    router.get('/premierleague/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const pl2023 = `http://api.football-data.org/v4/competitions/PL/matches?season=2023&matchday=${matchday}`;
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

    router.get('/premierleague/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const pl2022 = `http://api.football-data.org/v4/competitions/PL/matches?season=2022&matchday=${matchday}`;
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

    router.get('/premierleague/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const pl2021 = `http://api.football-data.org/v4/competitions/PL/matches?season=2021&matchday=${matchday}`;
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

    router.get('/laliga/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const laliga2024 = `http://api.football-data.org/v4/competitions/PD/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(laliga2024, {
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
    
    router.get('/laliga/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const laliga2023 = `http://api.football-data.org/v4/competitions/PD/matches?season=2023&matchday=${matchday}`;
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

    router.get('/laliga/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const laliga2022 = `http://api.football-data.org/v4/competitions/PD/matches?season=2022&matchday=${matchday}`;
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

    router.get('/laliga/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const laliga2021 = `http://api.football-data.org/v4/competitions/PD/matches?season=2021&matchday=${matchday}`;
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
    
    router.get('/bundesliga/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const bl2024 = `http://api.football-data.org/v4/competitions/BL1/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(bl2024, {
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

    router.get('/bundesliga/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const bl2023 = `http://api.football-data.org/v4/competitions/BL1/matches?season=2023&matchday=${matchday}`;
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

    router.get('/bundesliga/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const bl2022 = `http://api.football-data.org/v4/competitions/BL1/matches?season=2022&matchday=${matchday}`;
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

    router.get('/bundesliga/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const bl2021 = `http://api.football-data.org/v4/competitions/BL1/matches?season=2021&matchday=${matchday}`;
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

    router.get('/championsleague/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const champsl = `http://api.football-data.org/v4/competitions/CL/matches?season=2024&matchday=${matchday}`;
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
  
    router.get('/league1/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const l12024 = `http://api.football-data.org/v4/competitions/FL1/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(l12024, {
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

    router.get('/league1/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const l12023 = `http://api.football-data.org/v4/competitions/FL1/matches?season=2023&matchday=${matchday}`;
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

    router.get('/league1/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const l12022 = `http://api.football-data.org/v4/competitions/FL1/matches?season=2022&matchday=${matchday}`;
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

    router.get('/league1/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const l12021 = `http://api.football-data.org/v4/competitions/FL1/matches?season=2021&matchday=${matchday}`;
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


    router.get('/eredivise/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const eredivise2024 = `http://api.football-data.org/v4/competitions/DED/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(eredivise2024, {
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

    router.get('/eredivise/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const eredivise2023 = `http://api.football-data.org/v4/competitions/DED/matches?season=2023&matchday=${matchday}`;
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

    router.get('/eredivise/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const eredivise2022 = `http://api.football-data.org/v4/competitions/DED/matches?season=2022&matchday=${matchday}`;
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

    router.get('/eredivise/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const eredivise2021 = `http://api.football-data.org/v4/competitions/DED/matches?season=2021&matchday=${matchday}`;
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

    router.get('/seriaa/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const sa2024 = `http://api.football-data.org/v4/competitions/SA/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(sa2024, {
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

    router.get('/seriaa/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const sa2023 = `http://api.football-data.org/v4/competitions/SA/matches?season=2023&matchday=${matchday}`;
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

    router.get('/seriaa/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const sa2022 = `http://api.football-data.org/v4/competitions/SA/matches?season=2022&matchday=${matchday}`;
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

    router.get('/seriaa/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const sa2021 = `http://api.football-data.org/v4/competitions/SA/matches?season=2021&matchday=${matchday}`;
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

    router.get('/championship/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const elc2024 = `http://api.football-data.org/v4/competitions/ELC/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(elc2024, {
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
    
    router.get('/championship/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const elc2023 = `http://api.football-data.org/v4/competitions/ELC/matches?season=2023&matchday=${matchday}`;
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
    
    router.get('/championship/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const elc2022 = `http://api.football-data.org/v4/competitions/ELC/matches?season=2022&matchday=${matchday}`;
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
    
    router.get('/championship/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const elc2021 = `http://api.football-data.org/v4/competitions/ELC/matches?season=2021&matchday=${matchday}`;
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
    
    router.get('/primeraliga/2024/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const ppl2024 = `http://api.football-data.org/v4/competitions/PPL/matches?season=2024&matchday=${matchday}`;
            // Make a request to the football API to fetch all competitions
            const response = await axios.get(ppl2024, {
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
    
    router.get('/primeraliga/2023/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const ppl2023 = `http://api.football-data.org/v4/competitions/PPL/matches?season=2023&matchday=${matchday}`;
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
    
    router.get('/primeraliga/2022/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const ppl2022 = `http://api.football-data.org/v4/competitions/PPL/matches?season=2022&matchday=${matchday}`;
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
    
    router.get('/primeraliga/2021/:matchday', async (req,res)=> {
        try {
            const { matchday } = req.params;
            const ppl2021 = `http://api.football-data.org/v4/competitions/PPL/matches?season=2021&matchday=${matchday}`;
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

// Export the router to be used in the main application
module.exports = router;
