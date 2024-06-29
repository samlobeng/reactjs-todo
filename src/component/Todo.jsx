import React, { useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState([])
    const [todoValue, setTodoValue] = useState('')

    const handleTodoSubmit = (e) =>{
        e.preventDefault();
        if(todoValue.length > 0){
            setTodos([...todos, todoValue])
            setTodoValue('')

        }
    }
    const handleDeleteTodo = (index) =>{
        const newTodoList = todos.filter((todo, todoIndex)=>{
            return index !== todoIndex
        })
        setTodos(newTodoList)
    }

    const handleEditTodoList = (index) =>{
        const todoValueEdited = todos[index]
        setTodoValue(todoValueEdited)
        handleDeleteTodo(index)
    }   
  return (<>
    <div className='container'>
        <form onSubmit={handleTodoSubmit}>
        <div className="mb-3 mt-5 d-flex gap-4 justify-content-center align-items-center">
            <input type="text" className="form-control w-50" placeholder="Type your todo here..." value={todoValue} onChange={(e)=> setTodoValue(e.target.value)}/>
            <button type="submit" className="btn btn-success">Add Todo</button>
        </div>
        </form>
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center">
        <ol className="list-group list-group-numbered w-50 d-flex justify-content-center">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item mb-3 d-flex justify-content-between align-items-center">
            {todo}
            <div className=''>
            <span className="badge bg-danger rounded-pill p-2 cursor-pointer" onClick={()=> handleDeleteTodo(index)}>
            <i className="fa-solid fa-trash cursor-pointer "></i>
            </span>
            <span className="badge bg-warning rounded-pill p-2 ms-3" onClick={()=> handleEditTodoList(index)}>
            <i className="fa-solid fa-pen-to-square"></i>
            </span>

            </div>
          </li>
        ))}
      </ol>
    </div>
    </>)
}
