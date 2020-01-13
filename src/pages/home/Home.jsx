import React from "react"
import Helmet from "react-helmet"

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <div style={container}>
          <h1 style={message}>Nothing to see here.</h1>
        </div>
      </React.Fragment>
    );
  }
}

const container = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  backgroundColor: '#000',
  margin: '-8px',
};

const message = {
  color: '#fff',
  fontSize: '4vw',
};

export default Home;