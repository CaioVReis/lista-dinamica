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
      if (i === index) item.cheked = true;
      return item
    })
    setTasks(res) // coloca as tasks no state novamente

    
  }

 

  return (
    <div className="w-screen h-screen flex justify-center mt-5"
    
    style={{ 
      backgroundImage: `url("https://i.pinimg.com/originals/fc/dc/08/fcdc08e6be809dc348d4e4c27c720490.jpg")` 
    }} >
      
      <div className="border-4 border-solid rounded bg-slate-50 border-green h-screen " >
        
        <div className="mt-10">
          <div className="m-2  flex ml-10 "><ImputL name="Adicionar" onInput={(ev) => setTask(ev.target.value)}/>
              <div className="ml-24 flex">
                <AddButton onClick={ () => addTask(task)}/>
             </div>

              <div className="ml-20">
                <RemoveButtons onClick={removeTask}/>
             </div>

          </div> 
        </div>
            
           
            
            <div className="border-4 mt-3 border-black m-2 h-5/6 " >
                <div className=" bg-white bg-    w-11/12 " >
          
       { tasks.map((t, index )=> (
          <div key={index} className={`flex flex-row  w-full border border-black rounded h-16 m-5 ${t.cheked ? "text-green-900 bg-green-200 ":"text-black bg-white"}`}>

                  <div className=" w-1/5 flex justify-center  mt-2">
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
