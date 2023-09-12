// Define arrays to store player names and teams
let players = [];
let team1 = [];
let team2 = [];

// Function to add a player to the list
function addPlayer() {
    const playerNameInput = document.getElementById('player-name');
    const playerName = playerNameInput.value.trim();

    if (playerName.length > 0 && players.length < 14) {
        players.push(playerName);
        playerNameInput.value = '';
        updatePlayerList();
    } else {
        alert("Please enter a valid player name (up to 14 characters) and ensure there are less than 14 players.");
    }
}

// Function to update the player list on the webpage
function updatePlayerList() {
    const playerList = document.getElementById('team1');
    playerList.innerHTML = '';

    players.forEach((player, index) => {
        const listItem = document.createElement('p');
        listItem.textContent = player;
        playerList.appendChild(listItem);
    });
}

// Function to generate random teams
function generateTeams() {
    if (players.length >= 2) {
        // Shuffle the players array randomly
        players.sort(() => Math.random() - 0.5);

        // Split the shuffled array into two teams
        team1 = players.slice(0, Math.ceil(players.length / 2));
        team2 = players.slice(Math.ceil(players.length / 2));

        // Update the team lists on the webpage
        updateTeamLists();
    } else {
        alert("Please add at least 2 players to generate teams.");
    }
}

// Function to update the team lists on the webpage
function updateTeamLists() {
    const team1Container = document.getElementById('team1');
    const team2Container = document.getElementById('team2');
    team1Container.innerHTML = `<h2>Team 1</h2>${team1.join('<br>')}`;
    team2Container.innerHTML = `<h2>Team 2</h2>${team2.join('<br>')}`;
}

// Attach event listeners to buttons
document.getElementById('add-player').addEventListener('click', addPlayer);
document.getElementById('generate-teams').addEventListener('click', generateTeams);
