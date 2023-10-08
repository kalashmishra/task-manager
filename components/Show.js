

const Show = (props) => {
 const{task, setTask, setTitle, setDiscription, setStatus,setActiveTask }=props




    const updateHandler= (index)=>{
        const{title, discription, status} = task[index];
        setTitle(title);
        setDiscription(discription);
        setStatus(status);
        setActiveTask(index)
           }
          


    const deleteHandler= (index)=>{
        setTask(task.filter((t,i) => i!==index));
      // const copytask = [...task]
      // copytask.splice(index,1)
      // setTask(copytask)
   }
   let tasklist = <h2 className=" mt-5 w-100 text-center text-danger">Loading...</h2>
   if (task.length>0){
      tasklist = task.map((task,index)=>{
          return(
              <div key={index} className="card  mb-3 me-3" style={{ width: "18rem" }}>
              <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                      {task.status}
                  </h6>
                  <p className="card-text">
                      {task.discription}
                     </p>
                  <button onClick={()=> updateHandler(index)}className="me-2 btn btn-sm   btn-dark">
                      Update Task
                  </button>
                  <button onClick={()=> deleteHandler(index)} className="btn btn-sm btn-dark">
                      Delete Task
                  </button>
              </div>
          </div>
     
          )
      })
   }
 
 
  return (
    <div className="d-flex flex-wrap">
    {tasklist}
   </div>

  )
}

export default Show