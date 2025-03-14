import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom";
import './index.css' // "./style.css"
import App from './App.jsx'
// import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom"


createRoot(document.getElementById('root')).render(

// Wrap the App component with the Router component to enable the router features.
// ReactDOM.render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,
  // document.getElementById("root")
)
