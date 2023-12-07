
        const ImputL =({text = false,name, onInput, }) =>{
    return(
    <>
    {text &&(
     <div className="  w-28  mt-6 font-bold text-sm">
   {text}</div>)}
    <div className="relative">
  <div className="absolute pointer-events-auto ...">
        </div>
      <input type="text"  onInput={onInput} placeholder={name} className="border text-center text-black h-10 rounded border-black"/>
    </div>
    </>
    
    )
  }

 

export default ImputL