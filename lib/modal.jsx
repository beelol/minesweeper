const React = require('react');

const Modal = React.createClass({
  // getInitialState() {
  //   return {revealed: false};
  // },
  // showModal() {
  //
  // },
  // hideModal() {
  //
  // },
  // onGameStatusChanged (content) {
  //   this.showModal(content);
  // },
  restart() {
    this.props.newGame();

    this.forceUpdate();
  },
  render() {
    if (!this.props.revealed){
      return null;
    }

    return (
      <section id="modal" className="modal">
        <article className="modal-content">

          <h1>{this.props.modalContent}</h1>
          <button className="modal-button" onClick={this.restart}>Play Again?</button>

        </article>
        <div className="modal-screen js-hide-modal"></div>
      </section>
    );
  }
});

module.exports = Modal;
