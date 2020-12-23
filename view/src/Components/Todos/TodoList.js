import React from 'react'

import TodoCard from './TodoCard'


const TodoList = ({ todos, changeDone }) =>
    <div>
        {todos.map((todo, index) =>
            <TodoCard 
            key={index} 
            {...todo} 
            changeDone={changeDone} />
        )}
    </div>

export default TodoList