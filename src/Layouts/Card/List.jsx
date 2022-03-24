import React, {useState, useEffect} from 'react'
import Card from './../../Components/Card'
import Data from './../../assets/data.json'
class List extends React.Component{
    async componentDidMount(){
        const res=await fetch(Data)
        const resJson=await res.json
        console.log(resJson)
    }
    render(){
        return <h1>List</h1>
    }
}

export default List