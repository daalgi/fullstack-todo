const axios = require('axios').default

const getTodos = () => {
    axios
        .get('http://localhost:5000/fullstack-todo-ba690/us-central1/api/todos')
        .then(res => {
            console.log(res.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

const addTodo = () => {
    axios
        .post('http://localhost:5000/fullstack-todo-ba690/us-central1/api/todo', {
            title: 'Pile foundation',
            task: 'Determine optimal pile length'
        })
        .then(res => {
            console.log(res)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


//getTodos()
addTodo()