const React = require('react');

const Tile = React.createClass({
  handleClick(e) {

    let isFlagging = false;
    if (e.button === 2) {
      isFlagging = true;
    } else if (e.button === 1) {
      isFlagging = false;
    }

    this.props.update(this.props.tile, isFlagging);
  },
  displayValue() {
    if(this.props.tile.explored === false){
      return (this.props.tile.flagged ? "\u2691" : " ");
    } else if (this.props.tile.bombed) {
      return "\u1F4A";
    } else {
      return this.props.tile.adjacentBombCount() === 0 ? " " : this.props.tile.adjacentBombCount().toString();
    }
  },
  render() {
    let className="tile";

    if (this.props.tile.flagged) {
      className += " flagged";
    }

    if (this.props.tile.bombed) {
      className += " bombed";
    }

    if (this.props.tile.explored) {
      className += " explored";
    }

    return <div className={className} onMouseDown={this.handleClick}>{this.displayValue()}</div>;
  }
}

);



module.exports = Tile;
