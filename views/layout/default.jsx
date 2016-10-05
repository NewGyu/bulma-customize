const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="ja">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/stylesheets/bulma.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <section className="section">
            <h1 className="title">{this.props.title}</h1>
            <hr />
          </section>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;