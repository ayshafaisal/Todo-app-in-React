import logo from './logo.svg';
import './App.css';
import SubmitForm from './Components/SubmitForm';
import TodoList from './Components/TodoList'
import React, { useState } from 'react'
import {Container,Box } from '@mui/material';
import uuid from 'react-uuid';
import { Dayjs } from 'dayjs';
import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css'
function App() {
  var [todos,setTodos]=useState([
    {
      key:uuid(),
      task:"Clean the House",
      isCompleted:false,
      createdDate:new Date(),
      dueDate:new Date()
    }
  ])
  var [createDate,setCreateDate]=useState(new Date())
  var [dueDate,setDueDate]=useState(new Date());
  // const deleteTodo=(todoIndex) => {
  //   const newTodos = todos.filter((_, index) => index !== todoIndex);
  //   setTodos(newTodos);
  
  // }
  const handleDueDate=()=>{
    var date=new Date(todos.createdDate+5)
    console.log(date)
    setDueDate(date)
    
  }
  const saveTodo=(todoText)=>{
        console.log("Before")
        const trimmedText=todoText.trim();
        console.log(trimmedText)
       if(trimmedText.length>0){
         setTodos([...todos,{key:uuid(),task:trimmedText,isCompleted:false,createdDate:new Date(),dueDate:new Date()}])
        
       }
       
       console.log(todos)
  }
         const deleteTodo=(todoIndex) => {
    const newTodos = todos.filter((todo) => todo.key !== todoIndex);
    setTodos(newTodos);
  
  }

      
  return (
    <div className="App">
      <Box maxWidth='md' className="box"  >
      <SubmitForm saveTodo={saveTodo} deleteTodo={deleteTodo} todos={todos} setTodos={setTodos} dueDate={dueDate} setDueDate={setDueDate}/>
     
       </Box>
    </div>
  );
}

export default App;
