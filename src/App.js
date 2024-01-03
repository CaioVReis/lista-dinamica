import { useEffect, useState } from "react";
import './App.css';
import ImputL from "./components/input";
import AddButton, { RemoveButtons,ChekedButton,TrashButton } from "./components/buttons";
import ToDay from "./components/toDay";
import { List , Save , Remove , Update } from "./database";
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [ tasks, setTasks] = useState([])
  const [ task, setTask] = useState("")
 

  useEffect(()=>{
    if (List().length > 0){
      console.log("Pegando dados da database",List())
      setTasks(List())
    }
 
  },[])

  
  

  const addTask= (name) => {
    if(tasks.length>5){
      return
    }

    const _data = {
      id: uuidv4(),
      cheked:false,
      name: name,
      data: Date.now().toLocaleString("pt-br")
    }
   
    setTasks([...tasks,_data])
    Save(_data) //Grava no local (localstorage)

      
    
  }

  const removeTask = () => {
    const newTasks = tasks.slice(0, -1);
    Update(newTasks)
    setTasks(newTasks);
  }

  const remove =(id) =>{
    const res = Remove(id)
    setTasks(res)
  }

  const isCheked = ( id ) =>{
    const res = tasks.map(item =>{
      if (item.id === id) item.cheked = !item.cheked;
      return item
    })
    setTasks(res) 
    Update(res)
    
  }



  
  // CRUD
  // Create
  //Read
  //Update
  //Delete

  return (
    
   
    <div className=" backgroud w-full h-full flex justify-center  ">
      
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
                  <ChekedButton onClick={()=>isCheked(t.id)}/>
                  </div>

                  <div className=" text-center font-bold mt-4  w-96">
                    {t.name}
                  </div>

                  <div className="mt-5 font-bold text-sm"><ToDay/></div>
                  <div className=" w-1/5 flex justify-center mt-2 ">
                  <TrashButton onClick={() => remove(t.id)}/>
                 
                  </div>
            </div>
       ))}   
  

                 </div>
                  
                 
                
                
   
            </div>
        
      </div>
    </div>
    
  )}
    

export default App;
