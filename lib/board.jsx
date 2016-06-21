const React = require('react');
const Tile = require('./tile');



const Board = React.createClass({
  render(){
    function drawTiles() {
      return this.props.board.grid.map((row, i) => {
        return <div key={i}>{
          row.map((tile, j) => {
            return <Tile tile={tile} key={`${i}, ${j}`} update={this.props.update}/>;
          })
        }</div>;
      });
    }

    return(
      <div className="board">
        {drawTiles.call(this)}
      </div>
    );
  }


});



module.exports = Board;
