import React from 'react'

import TodoCard from './TodoCard'


const TodoList = ({ todos, changeDone, editTodo, removeTodo }) =>
    <div>
        {todos.map((todo, index) =>
            <TodoCard
                key={index}
                {...todo}
                changeDone={changeDone}
                editTodo={editTodo}
                removeTodo={removeTodo}
            />
        )}
    </div>

export default TodoList