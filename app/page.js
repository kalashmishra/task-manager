// const profile = {
//   name :'kalash',
// }



// export default profile;
// export const user ={}
// export const admin ={}
//reconsullation updating-one two element update  rendering-more update then refrash the page

"use client"
import React, {useState} from "react";
import Create from "@/components/Create";
import Show from "@/components/Show";


// const page =()=>{
//   const [mydate , setMydate] = useState(null);
//   setInterval(()=>{
//     setMydate(new Date().toLocaleTimeString())
//   }, 1000);
//   return  (
//     <div>
//       <h1>
//         Live time
//       </h1>
//       <h2>
//         {mydate}
//       </h2>
//     </div>
//   );
  
// }

// const page = ()=>{
//   const [userName , setUserName] = useState("Jone");
  
//   const submitHandler = (event) =>{
//      event.preventDefault();
//     setUserName(event.target.username.value);
//  // console.log(username)                                             Two way binding
//   }
//   return ( 
// <div>
//   <h1>{userName} </h1>
//   <form onSubmit={submitHandler}>
//     <input 
//     onChange={(event)=>setUserName(event.target.value)} 
//     value={userName}
//     type="text" 
//     placeholder="username" 
//     name="username" />
//     <button > Change Name</button>
//   </form>
//  </div>
// )

// }

// const page = ()=>{
//   const [title , setTitle] = useState("");
//   const [discription , setDiscription] = useState("");
//   const [status , setStatus] = useState("Due");
  
//   const submitHandler = (event) =>{
//      event.preventDefault();
//    // setTitle(event.target.username.value);
//    const newTask ={
//     date: new Date().toLocaleDateString(),
//     title,
//     discription,
//     status
//    }
// console.log(newTask)                                            // Two way binding
//   }
//   return ( 
// <div>
//   <form onSubmit={submitHandler}>
//     <input  onChange={(event)=>setTitle(event.target.value)} value={title} type="text" placeholder="title" name="title" /> 
//     <input  onChange={(event)=>setDiscription(event.target.value)} value={discription} type="text" placeholder="description" name="description" />
    
//     <select onChange={(event)=>setStatus(event.target.value)} >
//       <option value="due">Due</option>
//       <option value="pending"> Pending</option>
//       <option value="completed">Completed</option>
//     </select>
//      <button > Change Name</button>
//   </form>
//  </div>
// )

// }

// export default page;


const page = () => {
  const [title , setTitle] = useState("");
    const [discription , setDiscription] = useState("");
    const [status , setStatus] = useState("due");
    const [task , setTask] = useState([]);
    const [activeTask, setActiveTask] = useState(null)
    
  

   
   
    return (
        
        <div className="mt-5 container p-5">
            <Create 
              title={title}
              setTitle={setTitle}
              discription={discription}
              setDiscription={setDiscription}
              status={status}
              setStatus={setStatus}
              task={task}
              setTask={setTask}
              activeTask={activeTask}
              setActiveTask={setActiveTask}

            
             />
            <h2>Pending Tasks</h2>
    <Show 
    task={task}
    setTitle={setTitle}
    setDiscription={setDiscription}
    setStatus={setStatus}
    setTask={setTask}
    setActiveTask={setActiveTask}


     />
        </div>
    );
};

export default page;


//npm i bootstrap
// import bootstrap path from node module