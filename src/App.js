import { useEffect, useState } from "react";

import ImputL from "./components/input";
import AddButton, { RemoveButtons,ChekedButton,TrashButton } from "./components/buttons";


function App() {

  const [ tasks, setTasks] = useState([])
  const [ task, setTask] = useState("")
 

  useEffect(()=>{
setTasks(tasks)
  },[tasks])
  

  const addTask= (name) => {
   
    setTasks([...tasks,{

      name: name
    }])
  }

  const removeTask = () => {
    const newTasks = tasks.slice(0, -1);
    setTasks(newTasks);
  }

  const remove =(index) =>{
    const res = tasks.filter((v,i) => i!==index)
    setTasks(res)
  }

  const isCheked = ( index ) =>{
    const res = tasks.map((item, i ) =>{
      if (i === index) item.cheked = !item.cheked;
      return item
    })
    setTasks(res) 

    
  }

  
 

  return (
   
    <div className=" backgroud w-full h-full flex justify-center     mt-5">
      
      <div className=" border border-black rounded m-2 bg-white bg-opacity-60 h-screen w-2/5 " >
        
        <div className="mt-5">
          <div className="m-2  flex ml-6 opacity-90 "><ImputL name="adicionar" onInput={(ev) =>setTask(ev.target.value)} onEnter={() => addTask(task)}/>
            <div className="flex">
              <div className="ml-20">
                <AddButton onClick={ () => addTask(task)}/>
             </div>

              <div className="-mt-2 ml-40">
                <RemoveButtons onClick={removeTask}/>
              </div>
             </div>
            

          </div> 
        </div>

       
            
           
            
            <div className="mt-3  m-2 h-5/6 " >
                <div className="   w-11/12 " >
          
       { tasks.map((t, index )=> (
          <div key={index} className={`flex flex-row  w-full  rounded h-16 m-5 ${t.cheked ? "text-green-900 bg-green-200 shadow-lg ":"text-black bg-white"}`}>

                  <div className=" w-1/5 flex justify-center animate-pulse  mt-2">
                  <ChekedButton onClick={()=>isCheked(index)}/>
                  </div>

                  <div className=" text-center font-bold mt-4  w-96">
                    {t.name}
                  </div>

                  <div className=" w-1/5 flex justify-center mt-2 ">
                  <TrashButton onClick={() => remove(index)}/>
                 
                  </div>
            </div>
       ))}   
  

                 </div>
                  
                 
                
                
   
            </div>
        
      </div>
    </div>
    
  )}
    

export default App;
