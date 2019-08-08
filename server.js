//Import Section
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//Method GET
app.get('/tasks', (req, res) => {
    res.json(tasks);
})

//Method POST
app.post('/tasks', (req, res) => {
    let newTask= req.body;
    // console.log(req.body);
    tasks.push(newTask);
    res.json(tasks);
})

//Method PUT
// app.put('/', (req, res) => {
    
// })

//Method DELETE
app.delete('/tasks/:id', (req, res) => {
    let taskToDeleteId = parseInt(req.params.id);
    // console.log(taskToDeleteId);
    res.json(tasks.map(arrElement => {
        if (arrElement.id === taskToDeleteId) {
            arrElement = null;
        }
        return arrElement;
    }))
})


let tasks = [
    {
        id: 1,
        title: "Watch Avengers Movie",
        isCompleted: false
    },
    {
        id: 2,
        title: "Complete Reading About New technologies",
        isCompleted: false
    },
    {
        id: 3,
        title: "Go Outside With My Family",
        isCompleted: false
    },
    {
        id: 4,
        title: "Laughing With JOZAA",
        isCompleted: false
    },
    {
        id: 5,
        title: "Format My PC.",
        isCompleted: false
    }
]
//Create Port For Our Localhost.
const PORT = 1333;
//Make Our App Listen And Use Our PORT.
app.listen(PORT, ()=> console.log(`Listen To Port ${PORT}`));