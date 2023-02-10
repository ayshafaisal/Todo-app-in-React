import React, { useState,useRef } from 'react'
import {Container,FormControl, Card, CardContent,Typography, InputAdornment ,MenuItem,InputLabel,Select,TextField, Tooltip, Button, Divider}from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Box, height } from '@mui/system';
import { SelectChangeEvent } from '@mui/material/Select';
import TodoList from './TodoList'
import './SubmitForm.css'
import moment from 'moment';
import DatePicker from "react-datepicker";


const SubmitForm = ({saveTodo,deleteTodo,todos,setTodos,dueDate,setDueDate}) => {
    const[filter,setFilter]=useState(" ");
    var [input,setInput]=useState(" ");
    const[sort,setSort]=useState(" ");
    var [count,setCount]=useState(0);
  const datepickerRef = useRef(null);
    
 
    const handleFilterChange=(event : SelectChangeEvent)=>{
       setFilter(event.target.value )
    }
    const handleSortChange=(event :SelectChangeEvent)=>{
        setSort(event.target.value)
    }
     
     const handleSubmit=e=>{
         e.preventDefault();
         console.log(input)
         saveTodo(input)
        setInput("")
     }
     const handleChange=(event)=>{
     setInput(event.target.value)
       
     }
     const handleDateChange=(date)=>{
  setDueDate(date)
  todos.dueDate=dueDate
  console.log(todos)
     }
   const  handleClickDatepickerIcon=(date)=> {
  const datepickerElement = datepickerRef.current;
  // console.log("datepickerElement = ", datepickerElement);
  
  todos.dueDate=dueDate
  console.log(todos)
  datepickerElement.setFocus(true);
}
const sortDate=(type)=>{
  console.log(type)
  const types={
    added:"Added date",
    due:"Due Date"
  }
  const sortedProperty=types[type];
  const sorted=todos.sort((a,b)=>b[sortedProperty] - a[sortedProperty])
  console.log(sorted)
  setSort(sorted)
}

   
  return (
       
    <div>
       <Container maxWidth='md' >
        
              
               <Card
               id="list"
               style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2",height :' 100vh' ,position:"relative" ,marginBottom:'30px' }}>

                   <CardContent>
                   <Typography variant='p'>
                  
                   <Typography variant='h2' color='primary' className='heading' style={{textDecoration:'underline'}}>
                       My Todo-s
                   </Typography>
                 </Typography>
                 <Container>
                  

               <form onSubmit={handleSubmit}>
                

                  <TextField
          id="outlined-full-width"
          
          style={{ margin: 8 , backgroundColor:'white', height:'56px'} }
          placeholder="Add new ..."
          helperText=""
          fullWidth
          value={input}
        
          onChange={handleChange}
          margin="normal"
          InputProps={{
            endAdornment: (
            <InputAdornment position="end">
            <DatePicker
          selected={dueDate}
           minDate={moment().toDate()}
          onChange={handleDateChange}
          ref={datepickerRef}
          dateFormat="MM/dd/yyyy"
        />
                <Tooltip title="Set due date">
           <CalendarMonthIcon style={{marginRight:'20px'}} onClick={() => handleClickDatepickerIcon()}></CalendarMonthIcon>
           </Tooltip>
           <Button color='primary' variant='contained' onClick={handleSubmit}>Add</Button>

     </InputAdornment>
            ),
          }}
         
        />
       </form>  
    </Container>
    <Divider style={{marginTop:'20px'}}/>
    <Box m={1} pt={3} display="flex" justifyContent="flex-end" >
    <div className='label-box'>
    <div className='filter-box'>
    <InputLabel id="filter-label" className='label-filter'>Filter</InputLabel>
  <Select  
   sx={{
        width: 100,
        height: 50,
      }} 
    labelId="filter-label"
    id="filter-select"
    value={filter}
    className='select-filter'
    onChange={handleFilterChange}
  >

    <MenuItem value={"All"}>All</MenuItem>
    <MenuItem value={"Done"}>Done</MenuItem>
    <MenuItem value={"Pending"}>Pending</MenuItem>
    <MenuItem value={"Active"}>Active</MenuItem>
  </Select>
    </div>
  <InputLabel id="sort-filter-label">Sort</InputLabel>
  <Select    sx={{
        width: 100,
        height: 50,
      }}
    labelId="sort-label"
    id="sort-select"
    value={sort}
   
    onChange={(e) => sortDate(e.target.value)}
  >
    <MenuItem value={"added"}>Added Date</MenuItem>
    <MenuItem value={"due"}>Due Date</MenuItem>

  </Select>
  </div>
    </Box>
    <Container>
       <TodoList todos={todos} deleteTodo={deleteTodo} setTodos={setTodos}/>
    </Container>
 </CardContent>
</Card>

           
       
       </Container>
    </div>
  )
}

export default SubmitForm
