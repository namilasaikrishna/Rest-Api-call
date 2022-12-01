import React,{useEffect,useState} from 'react'
import ShowData from './ShowData'

function Data() {

    const[getData,setGetData] = useState([])

    const getDetails = async() =>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const resData = await response.json()
        console.log(resData)
        setGetData(resData)
    }

    useEffect(()=>{getDetails()},[])

  return (
    <div>
    <ShowData need = {getData}/>
    </div>
  )
}

export default Data
