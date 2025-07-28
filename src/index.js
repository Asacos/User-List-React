import React from "react"
import * as ReactDOMClient from "react-dom/client"
import "./main.css"
import App from "./App"

const elements = (<div>
    <App />
  </div>)

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(elements)