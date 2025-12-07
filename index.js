function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// --- HELPER FUNCTIONS ---

function getAllPlayers() {
    const game = gameObject();
    const homePlayers = game.home.players;
    const awayPlayers = game.away.players;
    return Object.assign({}, homePlayers, awayPlayers);
}

function getAllPlayerObjects() {
    return Object.values(getAllPlayers());
}

// --- 3.1 RETRIEVE PLAYER INFORMATION ---

function numPointsScored(playerName) {
    const players = getAllPlayers();
    return players[playerName].points;
}

function shoeSize(playerName) {
    const players = getAllPlayers();
    return players[playerName].shoe;
}

// --- 3.2 RETRIEVE TEAM INFORMATION ---

function teamColors(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];
    const team = teams.find(t => t.teamName === teamName);
    return team ? team.colors : [];
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// --- 3.3 RETRIEVE PLAYER NUMBERS AND STATS ---

function playerNumbers(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];
    const team = teams.find(t => t.teamName === teamName);
    if (!team) return [];
    return Object.values(team.players).map(player => player.number);
}

function playerStats(playerName) {
    const players = getAllPlayers();
    return players[playerName];
}

// --- 3.4 ADVANCED CHALLENGE ---

function bigShoeRebounds() {
    const players = getAllPlayerObjects();
    const playerWithLargestShoe = players.reduce((prev, current) => (prev.shoe > current.shoe) ? prev : current);
    return playerWithLargestShoe.rebounds;
}

function mostPointsScored() {
    const players = getAllPlayerObjects();
    const topScorer = players.reduce((prev, current) => (prev.points > current.points) ? prev : current);
    const allPlayers = getAllPlayers();
    for (const name in allPlayers) {
        if (allPlayers[name] === topScorer) {
            return name;
        }
    }
}

function winningTeam() {
    const game = gameObject();
    const homeTeamPoints = Object.values(game.home.players).reduce((total, player) => total + player.points, 0);
    const awayTeamPoints = Object.values(game.away.players).reduce((total, player) => total + player.points, 0);
    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
    const players = getAllPlayerObjects();
    const playerWithLongestName = players.reduce((prev, current) => (prev.name.length > current.name.length) ? prev : current);
    return playerWithLongestName.name;
}

// --- BONUS QUESTION ---

function doesLongNameStealATon() {
    const allPlayers = getAllPlayers();
    const playerNames = Object.keys(allPlayers);
    const longestNamePlayer = playerNames.reduce((longest, current) => current.length > longest.length ? current : longest);
    const mostStealsPlayer = playerNames.reduce((mostStealsPlayer, currentPlayerName) => {
        if (allPlayers[currentPlayerName].steals > allPlayers[mostStealsPlayer].steals) {
            return currentPlayerName;
        } else {
            return mostStealsPlayer;
        }
    });
    return longestNamePlayer === mostStealsPlayer;
}