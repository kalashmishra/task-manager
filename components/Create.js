import { toast } from "react-toastify";
import css from "./Create.module.css"
const Create = (props) => {
const {
    title,
    setTitle,
    discription,
    setDiscription,
    status,
    setStatus,
    activeTask,
    setActiveTask,
    task,setTask
} = props


    const submitHandler = (event) =>{
        event.preventDefault();
      if(title.length<5 || discription.length<20){
         toast.error("Title and discription must be more than 5 and 20 charaters respectively!");
         return;
      }
      const newTask ={
       date: new Date().toLocaleDateString(),
       title,
       discription,
       status
      }
      setTask([...task, newTask]);
      setTitle("");
      setDiscription("");
      setStatus("due");
      }
      const updateTask= (e)=>{
        e.preventDefault();
        const copytask= [...task];
        copytask[activeTask]={...copytask[activeTask], title, discription, status};
        setTask(copytask);
        setActiveTask(null);
        setTitle("");
        setDiscription("");
        setStatus("due");
      
        
    }
     
return (
    <div >   
    <h1 className={css.heading}>Task Manager</h1>
     <form className={`${css.bdcolor} ${css.width} `}  >
    <h2>Create Your Tasks</h2>
    <input
   onChange={(event)=>setTitle(event.target.value)}
        className="form-control mb-3"
        type="text"
        placeholder="Title"
        value={title}
    />
    <textarea
    onChange={(event)=>setDiscription(event.target.value)}
        className="form-control mb-3"
        placeholder="description here..."
        value={discription}
    ></textarea>
    <select className="form-control mb-3" onChange={(event)=>setStatus(event.target.value)} value={status}>
        <option value="due">Due</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
    </select>
    {
        activeTask=== null ?
        <button onClick={submitHandler} className="btn btn-primary">Create Task</button>
        :
         <button onClick={updateTask} className="btn btn-primary">Update Task</button>
    }
    <hr />
</form>
</div>

  )
}

export default Create