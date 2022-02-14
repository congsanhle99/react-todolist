import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
});

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

    setInput('');
};

const handleChange = e => {
    setInput(e.target.value);
};

  return (
    <form className='todo-form' onSubmit={handleSubmit} >
        {props.edit ? (
        <>
        <input
              className='todo-input edit'
              type='text'
              name='text'
              placeholder='Update todo'
              value={input}
              onChange={handleChange}
              ref={inputRef} />
        <button className='todo-button'>Update Todo</button>
        </>) :
              (
            <>
            <input
                  className='todo-input'
                  type='text'
                  name='text'
                  placeholder='Add a todo'
                  value={input}
                  onChange={handleChange}
                  ref={inputRef} />
            <button className='todo-button'>Add Todo</button></>)}
        
    </form>
  )
}

export default TodoForm