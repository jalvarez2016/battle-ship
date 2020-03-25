import generateHash from './Hash.js'

export const newRoom = {
  "Player1": {
    "ships": {
    },
    "shots": [
    ]
  },
  "Player2": {
    "ships": {
    },
    "shots": [
    ]
  },
  "WinLose": false
}

function createRoom(databaseRef) {
  const hash = generateHash();
  const newGame = {
    [hash]: newRoom,
  }
  console.log('createRoom fired!', newGame)
  // this works, but overwrites the entire GameRooms object
  // to do:
  //   1) append all games to newGame
  //   2) see if we can use a different function besides set
  //   3) see if GameRooms can be an array 
  return databaseRef.set(newGame);
};

export default createRoom;