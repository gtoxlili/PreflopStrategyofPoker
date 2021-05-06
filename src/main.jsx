import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'
import "wired-elements";

const divStyle = {
  padding: '10px'
};

ReactDOM.render(
  <React.StrictMode>
    <div style={divStyle}>
      <wired-card elevation="3" class="mainCard">
        <App />
      </wired-card>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
