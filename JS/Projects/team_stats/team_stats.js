const team = {
  _players:[
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Kaka',
      lastName: 'Sanchez',
      age: 13
    },
    {
      firstName: 'Mama',
      lastName: 'Sanchez',
      age: 14
    }
  ],
  _games:[
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Moncos',
      teamPoints: 45,
      opponentPoints: 28
    },
    {
      opponent: 'Toncos',
      teamPoints: 44,
      opponentPoints: 25
    }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    this._players.push({
      firstName: firstName,
      lastName: lastName,
      age: age
    });
  },
  addGame(opponent, teamPoints, opponentPoints){
    this._games.push({
      opponent: opponent,
      teamPoints:teamPoints,
      opponentPoints: opponentPoints
    });
  }
};
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Monaco", 56, 28);
team.addGame("Pimly", 50, 30);
team.addGame("Limly", 48, 32);
console.log(team.games);
