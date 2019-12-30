import React , {Component } from 'react';
import JSON from '../db.json';
import Header from './homeComponent/Header';
import NewsList from './homeComponent/NewsList';

class Home extends Component {

    constructor(){
        super()

        this.state={
            news:JSON,
            filtered: JSON
        }
    }
filterNews(keyword) {
    const output = this.state.news.filter((data) => {
        return (data.title.toLowerCase().indexOf(keyword.toLowerCase() ) > -1)
            /* 
            indexOf(keyword.toLowerCase() )  gives position(0,1,2) of whatever(word,phrase) 
                is passed to keyword. 
                So, this statement-- data.title.toLowerCase().indexOf(keyword.toLowerCase() ) >-1)
                actually looks for the word(keyword) 
            */
    })
    this.setState({filtered: output})
}

    render(){
        return(
            <div>
                <Header 
                    userText={(userInput)=> {this.filterNews(userInput)}} />
                <NewsList 
                    newsData={this.state.filtered}/>
            </div>
        )
    }
}

export default Home;