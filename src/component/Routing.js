import React, { Component } from 'react';
import {BrowserRouter as MyRouter, Link, Route} from 'react-router-dom';

import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';
import PostsDetails from './PostDetails';

export default class Routing extends Component {
    render() {
        return (
            <MyRouter>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">My Brand</a>
                        </div>

                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/posts">Posts</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Route exact path="/" component={Home}></Route>
                <Route exact path="/posts" component={Posts}></Route>
                <Route exact path="/posts/:topic" component={PostsDetails}></Route>

                <Route exact path="/profile" component={Profile}></Route>
            </MyRouter>
            
        )
    }
}
