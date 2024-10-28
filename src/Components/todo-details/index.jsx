import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";


function TodoDetails({todoDetails,openDialogue,setOpenDialogue,setTodoDeails}) {
    return <>
       <Dialog onClose={()=>setOpenDialogue(false)} open={openDialogue}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
            <Button onClick={()=>{setTodoDeails(null);
                                 setOpenDialogue(false);}}>Close</Button>
        </DialogActions>
       </Dialog>
    </>

}

export default TodoDetails;