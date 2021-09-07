const functions = require('firebase-functions')
const app = require('express')()
const auth = require('./util/auth')

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

app.get('/todos', getAllTodos)
app.post('/todo', postOneTodo)
app.delete('/todo/:todoId', deleteTodo)
app.put('/todo/:todoId', editTodo)
/*app.post('/todo', auth, postOneTodo)
app.delete('/todo/:todoId', auth, deleteTodo)
app.put('/todo/:todoId', auth, editTodo)*/

const {
    loginUser,
    signUpUser,
    uploadProfilePhoto,
    getUserDetails,
    updateUserDetails
} = require('./APIs/users')

app.post('/login', loginUser)
app.post('/signup', signUpUser)
app.post('/user/image', auth, uploadProfilePhoto)
app.get('/user', auth, getUserDetails)
app.put('/user', auth, updateUserDetails)


exports.api = functions.https.onRequest(app)