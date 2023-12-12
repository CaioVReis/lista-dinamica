const ToDay=() =>{
    const date = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const hora = new Date().toLocaleTimeString('pt-BR', {timeZone:'america/Sao_paulo'})
  
  
 return(
    <>
    <div className="flex flex-col">
        <label>{date}</label>
        <label className="ml-3">{hora}</label>
     
    </div>
    
    
    </>
 )}


export default ToDay

