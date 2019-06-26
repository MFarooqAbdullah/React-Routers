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
                            <Link className="dropdown-toggle" to="/cat">CAT
                            </Link>
                        </li>
                        <li><Link to="/dog">Dog</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                </div>
            </nav>



        </div>;
    }
}

export default header;