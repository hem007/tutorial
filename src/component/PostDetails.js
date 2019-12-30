
// this page is rendered from Posts.js
// param and param query string used in the url

//this is how amazon creates multiple page 

import React, { Component } from "react";

export default class PostDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="panel panel-success">
        <div className="panel-heading">Post Details page</div>
        <div className="panel-body">
          <h1>Details of {this.props.match.params.topic}</h1>
          <p>
            Nulla cupidatat excepteur occaecat aute consequat irure et. Lorem
            elit ipsum ut do dolor. Deserunt reprehenderit nisi dolore voluptate
            ipsum reprehenderit non aute. Amet non fugiat nulla mollit id culpa
            consectetur labore aliquip exercitation officia. Elit qui duis nulla
            in aute nisi consequat ut. Nostrud labore elit pariatur sunt ea
            tempor eiusmod cupidatat quis proident Lorem ex adipisicing eiusmod.
          </p>
        </div>
      </div>
    );
  }
}
