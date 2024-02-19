// jQuery document ready function
$(document).ready(function() {
    // Get the select elements
    const $matchdaySelect = $('#matchday-select');
    const $seasonSelect = $('#season-select');
    const $leagueButtons = $('.league');
    let selectedLeague = ''; // Store the ID of the last clicked league button

    // Populate the select element with options ranging from 1 to 38 for matchday
    for (let i = 1; i <= 38; i++) {
        const matchdayOption = $('<option>', { value: i, text: `Matchday ${i}` });
        $matchdaySelect.append(matchdayOption);
    }

    // Fetch standings for the Premier League based on the current matchday and default season
    $.ajax({
        url: 'http://localhost:5000/standings/premierleague/2023', 
        method: 'GET',
        success: function(response) {
            const currentMatchday = response.season.currentMatchday;
            // Set the default value of the matchday select element to the current matchday
            $matchdaySelect.val(currentMatchday);
            // Call the function to populate standings for the Premier League with current matchday and default season
            fetchStandings('premierleague', $seasonSelect.val(), currentMatchday);
            fetchMatches('premierleague', $seasonSelect.val(), currentMatchday);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching current matchday:', error);
        }
    });

    // Add event listeners for league buttons
    $leagueButtons.on('click', function() {
        // Remove "active" class from all buttons
        $leagueButtons.removeClass('active');
        // Add "active" class to the clicked button
        $(this).addClass('active');
        selectedLeague = $(this).attr('id'); // Store the selected league ID
        // Fetch standings for the selected league, season, and matchday
        fetchStandings(selectedLeague, $seasonSelect.val(), $matchdaySelect.val());
        fetchMatches(selectedLeague, $seasonSelect.val(), $matchdaySelect.val());
    });

    // Add event listener for change event on the select elements
    $matchdaySelect.on('change', function() {
        const selectedMatchday = $(this).val(); // Get the selected matchday
        const selectedSeason = $seasonSelect.val(); // Get the selected season
        fetchStandings(selectedLeague, selectedSeason, selectedMatchday); 
        fetchMatches(selectedLeague, selectedSeason, selectedMatchday);// Call a function to populate standings for the selected matchday, season, and league
    });

    // Add event listener for change event on the season select element
    $seasonSelect.on('change', function() {
        const selectedMatchday = $matchdaySelect.val(); // Get the selected matchday
        const selectedSeason = $(this).val(); // Get the selected season
        fetchStandings(selectedLeague, selectedSeason, selectedMatchday);
        fetchMatches(selectedLeague, selectedSeason, selectedMatchday); // Call a function to populate standings for the selected matchday, season, and league
    });

    // Function to fetch standings for the selected league, season, and matchday
    function fetchStandings(leagueId, season, matchday) {
        $.ajax({
            url: `http://localhost:5000/standings/${leagueId}/${season}/${matchday}`,
            method: 'GET',
            success: function(response) {
                // Clear existing table rows
                $('#standings-table-body').empty();
                // Extract the league standings array from the response
                var leagueStandings = response.standings.find(function(standing) {
                    return standing.type === 'TOTAL'; // Filter out only the league standings
                }).table;
                // Iterate over the league standings array and populate the table
                // leagueStandings.forEach(function(teamStanding) {
                //     var row = $('<tr>');
                //     row.append($('<td>').text(teamStanding.position));
                //     var img = $('<img>').attr('src', teamStanding.team.crest); // Create img tag with src attribute
                //     img.css({
                //         'max-height': '25px', // Set maximum height
                //         'max-width': '30px',
                //         'position': 'relative',
                //         'top': '9px'    // Set maximum width
                //     });
                //     row.append(img);
                //     row.append($('<td>').text(teamStanding.team.shortName));
                //     row.append($('<td>').text(teamStanding.points));
                //     row.append($('<td>').text(teamStanding.playedGames));
                //     row.append($('<td>').text(teamStanding.won));
                //     row.append($('<td>').text(teamStanding.draw));
                //     row.append($('<td>').text(teamStanding.lost));
                //     row.append($('<td>').text(teamStanding.goalDifference));
                //     $('#standings-table-body').append(row);
                // });

               // Iterate over the league standings array and populate the table
leagueStandings.forEach(function(teamStanding) {
    var row = $('<tr>');
    row.append($('<td>').text(teamStanding.position));
    
    // Create a table cell to contain the image and team name
    var teamCell = $('<td>');
    var img = $('<img>').attr('src', teamStanding.team.crest); // Create img tag with src attribute
    img.css({
        'height': '22px', // Set maximum height
        'max-width': '22px',
        'position': 'relative',
        'top': '5px'
    });
    teamCell.append(img); // Append the image to the cell
    teamCell.append(' '); // Add a space for separation (optional)
    teamCell.append(teamStanding.team.shortName); // Append the team name
    row.append(teamCell); // Append the cell to the row
    
    row.append($('<td>').text(teamStanding.points));
    row.append($('<td>').text(teamStanding.playedGames));
    row.append($('<td>').text(teamStanding.won));
    row.append($('<td>').text(teamStanding.draw));
    row.append($('<td>').text(teamStanding.lost));
    row.append($('<td>').text(teamStanding.goalDifference));
    $('#standings-table-body').append(row);
});

            },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    function fetchMatches(leagueId, season, matchday) {
        $.ajax({
            url: `http://localhost:5000/matches/${leagueId}/${season}/${matchday}`,
            method: 'GET',
            success: function(response) {
                // Iterate over the matches and populate the HTML elements
                response.matches.forEach(function(match, index) {
                    var matchDiv = $('.matches').eq(index); // Select the corresponding match div

                    // Update the HTML content with match details
                    matchDiv.find('.mt').text(`${match.competition.name}, Gwk${match.matchday}`);
                    // matchDiv.find('#utcDate').text(match.utcDate);
                    const date = new Date(match.utcDate);
                    const formattedHours = ('0' + date.getHours()).slice(-2); // Add leading zero if needed
                    const formattedMinutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero if needed
                    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${formattedHours}:${formattedMinutes}`;  
                    matchDiv.find('#utcDate').text(formattedDate);

                    
                    const homeTeamCrest = $('<img>').attr('src', match.homeTeam.crest);
                        homeTeamCrest.css({
                            'max-height': '20px', // Set the maximum height
                            'max-width': '20px',
                            'position': 'relative',
                            'top': '5px'
                        });
                        matchDiv.find('.club1').empty().append(homeTeamCrest, '   ' ,match.homeTeam.shortName);
                    

                        // Append away team crest before the short name
                            const awayTeamCrest = $('<img>').attr('src', match.awayTeam.crest);
                            awayTeamCrest.css({
                                'max-height': '20px', // Set the maximum height
                                'max-width': '20px',
                                'position': 'relative',
                                'top': '5px'
                            });
                            matchDiv.find('.club2').empty().append(match.awayTeam.shortName, '   ' ,awayTeamCrest);

                    matchDiv.find('.status').text(match.status);

                    // Check if the score is available
                    if (match.score.fullTime.home !== null && match.score.fullTime.away !== null) {
                        matchDiv.find('.hscore').text(match.score.fullTime.home);
                        matchDiv.find('.ascore').text(match.score.fullTime.away);
                    } else {
                        matchDiv.find('.hscore').text('-');
                        matchDiv.find('.ascore').text('-');
                    }
                    
                    var matchId = match.id;
                    var anchorId = `match-${matchId}`;
                    matchDiv.find('a').attr('id', anchorId);

                    // Set league emblem
                    $('.league-emblem').attr('src', response.competition.emblem);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching match data:', error);
                alert('error fetching match data. This might be due to browser restrictions.');
            }
        });
    }

    $('#premierleague').trigger('click');
});

  
