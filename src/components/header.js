import React, {Component} from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            keyWord:'',
            companyName:"FaceBook"
        }
    }

    inputChange(event){
        this.setState({keyWord:event.target.value})
    }

    render(){
        return(
            <center>
                <header>
                    <div className="logo"
                    onClick={()=>{console.log("logo is clicked")}}><h3>Logo</h3></div>
                    <input type="text" onChange={this.inputChange.bind(this)}/>
                    <h2>{this.state.keyWord}</h2>
                </header>
            </center>
        )
    }
}


export default Header;




/*
function add(a,b){
    return a+b
}

var add = (a,b) => return a+b


const Header = ()=>{
    return <div>Header</div>
}*/
 /*const styles ={
            header:{
                background:'skyblue'
            },
            logo:{
                textAlign:'center'
            }
            <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <input type="text"/>
            </header>
        }*/