import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends Component{
    constructor(props){
        super(props);

        this.state={
            news:JSON
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))


/*
functional component-light faster maitain state
class based-> heavy with extra function
JXS


const App = () =>{

    console.log(JSON)
    return <div>
                <Header/>
                <h1>Hello this is react</h1>
           </div>     
}
*/