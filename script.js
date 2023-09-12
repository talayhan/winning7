// Define arrays to store player names and teams
let players = [];
let team1 = [];
let team2 = [];
let countGenerateTeams = 0

// Function to add a player to the list
function addPlayer() {
    const playerNameInput = document.getElementById('player-name');
    const playerName = playerNameInput.value.trim();

    const playerAttack = document.getElementById('a_input');
    const playerDefense = document.getElementById('d_input');
    const playerCreativity = document.getElementById('c_input');

    let pA = parseInt(playerAttack.value)
    let pD = parseInt(playerDefense.value)
    let pC = parseInt(playerCreativity.value)
    let pTotal = pA * 3 + pD * 2 + pC * 5;

    console.log("Attack :", pA)
    console.log("Defense :", pD)
    console.log("Creativity :", pC)
    console.log("Total skill points :", pTotal)

    if (playerName.length > 0 && players.length < 14) {
        const pl = {
            name: playerName,
            attack: pA,
            defense: pD,
            creativity: pC,
            total: (pA * 3) + (pD * 2) + (pC * 5)
        };
        //players.push(playerName);
        players.push(pl);
        playerNameInput.value = '';
        updatePlayerList();
    } else {
        alert("Please enter a valid player name (up to 14 characters) and ensure there are less than 14 players.");
    }
}

function resetPlayers() {
    const playerList = document.getElementById('players');
    const team1Container = document.getElementById('team1');
    const team2Container = document.getElementById('team2');

    // Delete each element of array
    players = [];
    team1 = [];
    team2 = [];

    playerList.innerHTML = '';
    team1Container.innerHTML = '';
    team2Container.innerHTML = '';

    team1Container.innerHTML = `<h2>Team 1</h2>${team1.join('<br>')}`;
    team2Container.innerHTML = `<h2>Team 2</h2>${team2.join('<br>')}`;
}

// Function to update the player list on the webpage
function updatePlayerList() {
    const playerList = document.getElementById('players');
    playerList.innerHTML = '';

    players.forEach((player, index) => {
        const listItem = document.createElement('p');
        listItem.textContent = player.name + " (" + player.total + ")";
        playerList.appendChild(listItem);
    });
}

// Function to generate random teams
function generateTeams() {

    if (countGenerateTeams > 0) {
        const team1Container = document.getElementById('team1');
        const team2Container = document.getElementById('team2');

        team1Container.innerHTML = `<h2>Team 1</h2>`;
        team2Container.innerHTML = `<h2>Team 2</h2>`;

    } else {
        countGenerateTeams++
    }

    if (players.length >= 2) {
        // @TODO Players should be assigned according to their skill points
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

    let team1TotalPoint = 0
    team1.forEach((player, index) => {
        const listItem = document.createElement('p');
        listItem.textContent = player.name + " (" + player.total + ")";
        team1TotalPoint += player.total;
        team1Container.appendChild(listItem);
    });
    const team1TotalPointStr = document.createElement('h3');
    team1TotalPointStr.textContent = "Total Point: " + team1TotalPoint;
    team1Container.appendChild(team1TotalPointStr);

    let team2TotalPoint = 0
    team2.forEach((player, index) => {
        const listItem = document.createElement('p');
        listItem.textContent = player.name + " (" + player.total + ")";
        team2TotalPoint += player.total;
        team2Container.appendChild(listItem);
    });
    const team2TotalPointStr = document.createElement('h3');
    team2TotalPointStr.textContent = "Total Point: " + team2TotalPoint;
    team2Container.appendChild(team2TotalPointStr);
}

// Attach event listeners to buttons
document.getElementById('add-player').addEventListener('click', addPlayer);
document.getElementById('reset-players').addEventListener('click', resetPlayers);
document.getElementById('generate-teams').addEventListener('click', generateTeams);

// Detect enter
let textarea = document.getElementById("player-name");
textarea.addEventListener("keydown", (e) => {
    console.log("enter")
    if (!e.repeat) {
        if (e.which == 13) {
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
    }
});

const a_value = document.querySelector("#a_value");
const a_input = document.querySelector("#a_input");
const d_value = document.querySelector("#d_value");
const d_input = document.querySelector("#d_input");
const c_value = document.querySelector("#c_value");
const c_input = document.querySelector("#c_input");

a_value.textContent = a_input.value;
d_value.textContent = d_input.value;
c_value.textContent = c_input.value;

a_input.addEventListener("input", (event) => {
  a_value.textContent = event.target.value;
});

d_input.addEventListener("input", (event) => {
  d_value.textContent = event.target.value;
});

c_input.addEventListener("input", (event) => {
  c_value.textContent = event.target.value;
});
