// jQuery document ready function
$(document).ready(function() {
    alert('Due to funding problems, there is a time limitation(5requests per second) to the scores which you can access. I wish there was another way, but there is none!. I will be increase the limit as time goes on.');
    // Get the select elements
    const $seasonSelect = $('#season-select');
    const $leagueButtons = $('.league');
    let selectedLeague = ''; // Store the ID of the last clicked league button

    // Add event listeners for league buttons
    $leagueButtons.on('click', function() {
        // Remove "active" class from all buttons
        $leagueButtons.removeClass('active');
        // Add "active" class to the clicked button
        $(this).addClass('active');
        selectedLeague = $(this).attr('id'); // Store the selected league ID
        // Fetch standings for the selected league, season, and matchday
        fetchStandings(selectedLeague, $seasonSelect.val());
    });

    // Add event listener for change event on the season select element
    $seasonSelect.on('change', function() {
        const selectedSeason = $(this).val(); // Get the selected season
        fetchStandings(selectedLeague, selectedSeason); // Call a function to populate standings for the selected matchday, season, and league
    });

    // Function to fetch standings for the selected league, season, and matchday
    function fetchStandings(leagueId, season) {
        $.ajax({
            url: `http://localhost:5000/scorers/${leagueId}/${season}`,
            method: 'GET',
            success: function(response) {
                // Clear existing table rows
                $('#scorers-table-body').empty();
                
                // Extract the scorers array from the response
                var scorers = response.scorers;

                // Iterate over the scorers array and populate the table
                scorers.forEach(function(scorer, index) {
                    var row = $('<tr>');
                    row.append($('<td>').text(index + 1)); // Serial number

                    
                    var teamCell = $('<td>');
                    var img = $('<img>').attr('src', scorer.team.crest); // Create img tag with src attribute
                    img.css({
                        'height': '25px', // Set maximum height
                        'max-width': '22px',
                        'position': 'relative',
                        'top': '6px'
                    });
                    teamCell.append(img); // Append the image to the cell
                    teamCell.append(' '); // Add a space for separation (optional)
                    teamCell.append(scorer.player.name); // Append the team name
                    row.append(teamCell); // Append the cell to the row


                    // row.append($('<td>').text(scorer.playerName)); // Player name
                    var assistsValue = scorer.assists !== null ? scorer.assists : 0;
                    row.append($('<td>').text(scorer.goals)); // Goals
                    row.append($('<td>').text(assistsValue)); // Assists

                    var penaltyValue = scorer.penalties !== null ? scorer.penalties : 0;
                    row.append($('<td>').text(penaltyValue)); // Penalty kicks
                    row.append($('<td>').text(scorer.playedMatches)); // Matches played
                    $('#scorers-table-body').append(row);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    $('#premierleague').trigger('click');
});
