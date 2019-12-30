import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Posts extends Component {
    render() {
        return (
           <div className='panel panel-success'>
                <div className="panel-heading">
                    Post page
                </div>
                <div className="panel-body">
                    <p>Nulla cupidatat excepteur occaecat aute consequat irure et. Lorem elit ipsum ut do dolor. Deserunt reprehenderit nisi dolore voluptate ipsum reprehenderit non aute. Amet non fugiat nulla mollit id culpa consectetur labore aliquip exercitation officia. Elit qui duis nulla in aute nisi consequat ut. Nostrud labore elit pariatur sunt ea tempor eiusmod cupidatat quis proident Lorem ex adipisicing eiusmod.</p>

                    <div>
                        <h3>Angular</h3>
                        <Link to="/posts/angular">details>> </Link>
                        <h3>React</h3>
                        <Link to="/posts/react">details>> </Link>
                        <h3>Vue</h3>
                        <Link to="/posts/Vue">details>> </Link>
                        <h3>Node</h3>
                        <Link to="/posts/node">details>> </Link>
                    </div>
                </div>
           </div>
        )
    }
}
