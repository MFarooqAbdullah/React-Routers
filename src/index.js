import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Routes from "./routes"
import { Router } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from "./serviceWorker"
import Header from './header'
const history = createHistory()

ReactDOM.render(
    <Router history={history}>
        <Header />
        <Routes />
    </Router>,
    document.getElementById("root")
)

serviceWorker.unregister()