import React, {useState} from 'react';

const AddTodo = (props) => {
    const [input, setInput] = useState('')

    function handleAddTodo(e){
        e.preventDefault()
        props.addTodo(input)
        setInput('')
    }
    return(
        <form onSubmit={handleAddTodo}>
            <input
            placeholder="Add a todo!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
        </form>
    )
}

export default AddTodo;