const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.post('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
//First problem
router.get('/movies', function (req, res){
    const movies = ['Rang de basanti', 'The shinning', 'The lord of rings', 'Batsman beings']
    res.send(movies)
})

//Second problem
router.get('/movies/:indexNumber', function(req,res){
    const  moviesarr = ['Rang de basanti', 'The shinning', 'The lord of rings', 'Batsman beings']
    const index = req.params.indexNumber
    res.send(moviesarr[index])

})
//Third problem
 router.get('/movie/:indexNumber', function(req,res){
    const moviearr = ['Rang de basanti', 'The shinning', 'The lord of rings', 'Batsman beings']
    const i = req.params.indexNumber
    if(i < (moviearr.length) && Number(i) > 0){
        res.send(moviearr[i])}
    else {
        res.send("use a valid index ")}
    })

//Fourth problem
router.get('/films', function(req,res){
    const flim = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(flim)
})

//Fifth problem 
router.get('/flim/:filmId', function(req,res){
    const flim = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       const i = req.params.filmId
       if (i<=flim.length) {
        res.send(flim[i])
        
       } else {
        res.send("invalid id")
       }   
})
   


    //assignment 
    //const router = require("../routes/route")
//const { route } = require("../routes/route")

/*you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
take input in query param as votingAge..and for all the people above that age, change votingStatus as true
also return an array consisting of only the person that can vote

WRITE A POST API TO THE ABOVE

take this as sample for array of persons:*/
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

 router.post('/validage', function(req,res){
 const voting = req.query.age
 const newarr =[]
 for (let index = 0; index < persons.length; index++) {
     const element = persons[index];
     if ((element.age>=voting)) {
         element.votingStatus= true
         newarr.push(element)
     } 
     
 }
 
 res.send(newarr)
  })
  
  module.exports = router;
 
//Assignment

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

router.post('/players', (req, res) => {
    let player = req.body;
    let playerExists = players.find(p => p.name === player.name);  //check if player already exists
    if (playerExists) {
        res.status(400).send('Player already exists');
    } else {
        players.push(player);
        res.send(player);
    }
    });