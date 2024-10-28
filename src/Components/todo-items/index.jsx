import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

function ToDoItem ({todo,fetchDetailsOfCurrentTodo}) {
    console.log('todo',todo);
    return <Card sx={{maxWidth:350,display:'flex',
                      flexDirection:'column',
                      justifyContent:'space-between'}}>
        <CardContent>
            <Typography variant="h5" color={"text:secondary"}>{todo?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>fetchDetailsOfCurrentTodo(todo?.id)} sx={{background:'black',color:'white',opacity:0.75,
                "&:hover":{
                    backgroundColor:'black',
                    color:'white',
                    opacity:1
                }}}>Show Details</Button>
        </CardActions>
    </Card>

}

export default ToDoItem;