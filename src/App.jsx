import { useEffect } from "react";
import { useState } from "react"
import classes from "./../src/style.module.css";
import ToDoItem from "./Components/todo-items";
import TodoDetails from "./Components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  
  const [loading, setLoading] = useState(false);
  const [todoList, setToDoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [todoDetails, setTodoDeails] = useState(null);
  const [openDialogue, setOpenDialogue] = useState(false);

  
  async function fetchListOfTodos() {
    try{
      setLoading(true);
      const apiRespone = await fetch('https://dummyjson.com/todos')
      const result = await apiRespone.json();
      if(result?.todos && result?.todos.length >0) {
           setToDoList(result.todos);
           setLoading(false);
      } else {
        setToDoList([]);
           setLoading(false);
      }
    }
    catch(e){
      console.log(e);
      setErrorMessage('Some Error Occured');
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    try{
      const apiRespone = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
      const details = await apiRespone.json();
      if(details){
        setTodoDeails(details);
        setOpenDialogue(true);
      } else {
        setTodoDeails([]);
        setOpenDialogue(false);
      }
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchListOfTodos()
  },[])

  if(loading) return <Skeleton variant="rectangulat" width={650} height={650}></Skeleton>
  return (
    <>
     <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo App using Material UI</h1>
      <div className={classes.todoListWrapper}>
        { todoList && todoList.length >0 ?
          todoList.map(todoItem=> <ToDoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
                                             todo={todoItem}/>) : null 
      }
      </div>
      <TodoDetails todoDetails={todoDetails} 
                   openDialogue={openDialogue} 
                  setOpenDialogue={setOpenDialogue}
                  setTodoDeails={setTodoDeails}/>
      </div>
    </>
  )
}

export default App
