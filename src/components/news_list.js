import React from 'react';


const newsList = (props) =>{

    console.log(props)

    const items = props.news.map((item)=>{
        return(
            <div>
                <h2>{item.title}</h2>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })

    return (
        <div>
            {items}
        </div>
    )
}

export default newsList;



/*
function add(a,b){
    return a+b
}

var add = (a,b)=> return a+b
*/