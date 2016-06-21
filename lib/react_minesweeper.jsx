const React = require("react");
const ReactDOM = require("react-dom");
const Minesweeper = require("./minesweeper");
const Game = require("./game");

const ReactMinesweeper = React.createClass({
  render() {
    return(
      <div>
        <Game />
      </div>);

  }

});



document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<ReactMinesweeper />, document.getElementById('main'));
});
