const React = require("react");
const Modal = require("./modal");
const Minesweeper = require("./minesweeper");
const Board = require("./board");


const event = new Event('gamestatuschange');


const Game = React.createClass( {
  getInitialState() {
    return {board: new Minesweeper.Board(10, 9)};
  },
  checkGameStatus() {
    this.modalRevealed = false;

    if (this.state.board.lost()) {
      this.modalRevealed = true;
      this.modalContent = "You lost!";
    } else if (this.state.board.won()) {
      this.modalRevealed = true;
      this.modalContent = "You won!";
    }
  },
  newGame() {
    this.modalRevealed = false;
    this.setState({board: new Minesweeper.Board(10, 9)});
  },
  updateGame(tile, isFlagging) {
    if (isFlagging){
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.checkGameStatus();

    this.setState({ board: this.state.board });
  },
  render() {

    return (
      <div>
        <Modal revealed={this.modalRevealed} modalContent={this.modalContent} newGame={this.newGame}/>
        <Board board={this.state.board} update={this.updateGame}/>
      </div>
    );
  },
});



module.exports = Game;
