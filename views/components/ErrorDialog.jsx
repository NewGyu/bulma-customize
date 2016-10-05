const React = require("react");

class ErrorDialog extends React.Component {
  render() {
    return (
      <article className="message">
        <div className="message-header">
          Hello World
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque risus mi, tempus quis placerat ut, porta nec
          nulla.Vestibulum rhoncus ac ex sit amet fringilla.Nullam
          gravida purus diam, et dictum felis venenatis efficitur.
          Aenean ac eleifend lacus, in mollis lectus.Donec sodales,
          arcu et sollicitudin porttitor, tortor urna tempor ligula,
          id porttitor mi magna a neque.Donec dui urna, vehicula et
          sem eget, facilisis sodales sem.
        </div>
      </article>);
  }
}

module.exports = ErrorDialog;