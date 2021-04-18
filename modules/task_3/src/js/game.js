import Character from './domain.js';



export default class Game {
   start() {
      console.log('game started');
   }
}

class GameSavingData {

}

function readGameSaving() {
   console.log("readGameSaving")
}

function writeGameSaving() {
   console.log("writeGameSaving")
}

export { GameSavingData, readGameSaving, writeGameSaving };