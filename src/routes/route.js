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
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
//First problem
router.get('/GET/:movies', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = ['Rang de basanti', 'The shinning', 'The lord of rings', 'Batsman beings']
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
    module.exports = router;