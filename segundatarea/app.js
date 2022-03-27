const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
morgan.token('body', req => {
    return JSON.stringify(req.body)
  })
app.use(morgan(':method :url :body'))


//1. Obtener todos los profesionales
app.get('/api/persons', (req,res)=>{
    res.json(persons)
})

//2. Ontener el tamaño de la agenda(.lenght) y la fecha
app.get('/info', (req,res)=>{
    const print =(`Phone number has ${persons.length} people  ${Date()}`)
    res.json(print)
})

//3. Obtener datos de persona por ID
app.get('/api/persons/:id', (req,res)=>{
    const id = Number(req.params.id)
    console.log(id)
    const person = persons.find(person=>(person.id===id))
    if (!person) {
        res.status(404).json(`People not found with id: ${id}`)
    }else{
        res.json(person)
    };   
})

//4. Eliminar a una persona de la lista
app.delete('/api/persons/:id', (req,res)=>{
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === Number(id));
    persons.splice(persons.indexOf(person), 1);

    if (!person) {
        res.status(404).json(`People not found with id: ${id}`)
    }else{
        res.json(person)
    };   
})

//5. Agregar a una pesona a la lista
app.post('/api/persons/', (req,res)=>{
    const newperson = req.body
    newperson.id = Math.random()
    persons.push(newperson);
    res.status(201).json(persons); 
})

//6. Editar una persona de la lista
app.patch('/api/persons/:id',(req,res)=>{
    const id = req.params.id
    const {name,number} = req.body

    if ((!number) || (!name)) {
        return res.status(401).json(`You have entered the name or number`);
    }
    persons.forEach(person=>{if ((person.name)=== name){
        return res.status(401).json(`The name already exists`);
    }})
    persons.forEach(person=>{
        if ((person.id)=== Number(id)){
            person.number = number
            person.name = name
        }
    })
    return res.status(201).json(persons);
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

const persons = [
    {id:1,
    name:"arturo artella",
    number:"0231-12211"},
    {id:2,
    name:"javier monterosa",
    number:"01293-10211"},
    {id:3,
    name:"julia montes",
    number:"3002-12102"},
]
