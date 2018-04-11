import React,{Component} from 'react';

class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            keyword:'',
            title:'This Is React Demo'
        }

        console.log(props)
    }

    inputChange(event){
        console.log({keyword:event.target.value})
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    }

    render(){

        const styles ={
            header:{
                background:'blue'
            }
        }

        return(
            <header>
            <button className="btn btn-primary" onClick={()=> console.log("clicked")}>Click</button>
            <input onChange={this.inputChange.bind(this)}/>
            <div>{this.state.keyword}</div>
            </header>
        )
    }
}

export default Header;