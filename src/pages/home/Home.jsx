import React from "react";
import Helmet from "react-helmet";
import './styles.css';

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta name="robots" content="noindex,nofollow" />
          <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
        </Helmet>
        <div className={`container`}>
          <h1 className={`message`}>Nothing to see here.</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;