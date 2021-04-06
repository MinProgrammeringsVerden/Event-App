const express = require ('express');
const router = express.Router();
const Person = require('../models/person.model');

router.get('/' , function (req , res){
     Person.find()
     .then(persons => res.json(persons))
    .catch(err => res.json('wystapil blad, pobierz events'+ err))
    

});

router.post('/add' , function (req , res){
       const person = req.body.person; 

       const newPerson = new Person ({  person });
        newPerson.save()
         .then (() => res.json('New person added'))
         .catch(err => res.json('wystapil blad przy dodawaniu new person ') + err)
    });


router.get('/:id' , function (req , res){
        Person.findById(req.params.id)
        .then(person => res.json(person))
        .catch(err => res.json('wystapil blad, pobierz events'+ err))
 });


        
/*router.post('/update/:id' , function (req , res){
    Person.findById(req.params.id)
    .then(personForUpdateing => {
        personForUpdateing.person = req.body.person ;
      
        personForUpdateing.save()
        .then(() =>  res.json(personForUpdateing +'Person updated'))
        .catch(err => res.json('wystapil blad przy updated person ,  w srodku  ') + err)
    })
    .catch(err => res.json('wystapil blad przy updated person ,  na zewnatrz ') + err)
               
  });           

router.delete('/:id' , function (req , res){
     Person.findOneAndDelete(req.params.id)
      .then(() => res.json('person removed'))
     .catch(err => res.json('wystapil blad, usuwanie osoby'+ err))
        
});*/

    module.exports = router ;