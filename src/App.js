import React,{useState} from 'react';
import Data from './Data';
import axios from 'axios'
import './App.css';

function App() {

  const[id,setId] = useState('')
  const[body,setBody] = useState('')
  const[title,setTitle] = useState('')

  const onChangeHandlerId = (e) =>{
    setId(e.target.value)
  }

  const onChangeHandlerBody = (e) =>{
    setBody(e.target.value)
  }

  const onChangeHandlerTitle = (e) =>{
    setTitle(e.target.value)
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts',{id,body,title})
    .then(response=>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
    setId('')
    setBody('')
    setTitle('')
  }

  return (
    <center>
    <form className='App' onSubmit={onSubmitHandler}>
    <h1>Login</h1>
    <div>
    <label htmlFor='userId'>User_Id:</label>
    <input id='userId' type="text" placeholder='User_id' value={id} onChange={onChangeHandlerId}/>
    </div>
    <div>
    <label htmlFor='body'>body:</label>
    <input id='body' type="text" placeholder='body' value={body} onChange={onChangeHandlerBody}/>
    </div>
    <div>
    <label htmlFor='title'>title:</label>
    <input id='title' type="text" placeholder='title' value={title} onChange={onChangeHandlerTitle}/>
    </div>
    <button type='submit'>submit</button>
    </form>
    <Data/>
    </center>
  );
}

export default App;
