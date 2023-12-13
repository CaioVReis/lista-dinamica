const dataBase = "BD"






const Save = (data) => {
    console.log("salvando objetos",data)
    const itens = List() // retornando meus itens
    itens.push(data) // Push em  1 item 
    Update(itens) // abstrai as funções para um unico metodo
}

 

const List = () =>{
    console.log("listagem de objetos",)

    const result = JSON.parse(localStorage.getItem(dataBase))
    
    return result === null | result === undefined ? [] : result
  
}

const getById = (id) =>{
    /*
  Ojetos:
    {
   * id: 1
   * date: 13/12/2023 (hora)
   * name: Aulas
   * status: true
    }
    */

    const itens = JSON.parse(localStorage.getItem(dataBase))
    return itens.find(item => item.id === id)

}

const Remove = (id) =>{
    const itens = List().filter(item => item.id !== id )
    Update(itens)
    return itens
}

const Update = (data) =>{
    const dateSave = JSON.stringify(data) // conventendo Para strings
    localStorage.setItem(dataBase,dateSave)
}

export{
    Save,
    List,
    getById,
    Remove,
    Update
}

// CRUD
  // Create
  //Read
  //Update
  //Delete
  