const React = require("react");
const DefaultLayout = require("./layout/default");
const Components = require("./components")

class IndexPage extends React.Component {
  render() {
    return (
      <DefaultLayout title="index">
        <section className="section">
          <h2 className="title">ダイアログ</h2>
          <Components.ErrorDialog />
        </section>

        <section className="section">
          <h2 className="title">ボタンの類</h2>
          <p className="control"><a className="button">普通のボタン</a></p>
          <p className="control"><a className="button is-primary">普通のボタン</a></p>
          <p className="control"><a className="button is-success">普通のボタン</a></p>
        </section>

      </DefaultLayout>
    );
  }
}

module.exports = IndexPage;