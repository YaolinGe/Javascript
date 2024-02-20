import { useState } from 'react';

function ToDo() {
    const [todos, setTodos] = useState([
        {
            id: 'todo1', 
            createdAt: '18:00', 
        }, 
        {
            id: 'todo2', 
            createdAt: '20:30',
        }
    ]); 

    const reverseOrder = () => {
        setTodos([...todos].reverse()); 
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                        <ToDoItem key={todo.id} id={todo.id} createdAt={todo.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function ToDoItem(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td><input></input></td>
            <td>{props.createdAt}</td>
        </tr>
    )
}

export default ToDo;