import React ,{useState} from 'react'
import {List,ListItem,Checkbox,ListItemText,ListItemSecondaryAction,IconButton} from  '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';


const TodoList = ({todos,deleteTodo,setTodos}) => {
  var [checked,setChecked]=useState(new Array(todos.length).fill(false))
  const onCheckboxChange=(event)=>{
setChecked(current=>!current)
console.log(checked)
if(checked===true){
    todos.isCompleted=true
    console.log(todos.isCompleted)

   }
 }

  return (
    <div>
    <List>
    {todos.map((todo,index)=>(
        <ListItem key={todo.key} dense button style={{border:'1px solid black',lineHeight: '2.5em',marginBottom:'10px', borderRadius:'8px'}}>
        <Checkbox   onChange={onCheckboxChange} value={checked}  tabIndex={-1} disableRipple/>
        <ListItemText primary={todo.task}/>
        <ListItemSecondaryAction>
        <IconButton 
        onClick={()=>{
            deleteTodo(todo.key)
        }}>
        <DeleteIcon/>
        </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
  ))}

    </List>
      
    </div>
  )
}

export default TodoList
