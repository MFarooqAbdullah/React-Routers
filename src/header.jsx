import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {
    state = {}
    render() {
        return <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">home</Link></li>
                        <li className="dropdown">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="/cat">CAT
                            <span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                                <li><a href="/">Page 1-1</a></li>
                                <li><a href="/">Page 1-2</a></li>
                                <li><a href="/">Page 1-3</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Page 2</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>



        </div>;
    }
}

export default header;