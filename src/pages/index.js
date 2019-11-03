import React from "react"

const IndexPage = () => (
  <div style={container}>
    <h1 style={message}>Nothing to see here.</h1>
  </div>
)

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

export default IndexPage
