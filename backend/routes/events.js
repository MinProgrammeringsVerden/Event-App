
const express = require('express');
const router = express.Router();
const Event = require('../models/event.model');

router.get('/' , function (req , res){
Event.find().then(events => res.json(events))
            .catch(err => res.json('wystapil blad, pobierz event'+ err))
    
   });


router.get('/:id' , function (req , res){
    Event.findById(req.params.id)
    .then((event) => res.json(event))
    .catch(err => res.json('wystapil blad, pobierz events'+ err))
});


router.delete('/:id' , function (req , res){
    Event.findOneAndDelete(req.params.id)
        .then(() => res.json('event o id has been deleted'))
        .catch(err => res.json('wystapil blad, delete events'+ err))
        
});


router.post('/update/:id' , function (req , res){
    //req.params.id = mongoose.Types.ObjectId(req.params.id);
    Event.findById(req.params.id)
    .then(event => {
        event.event = req.body.event;
        event.person = req.body.person;
        event.description = req.body.description;
        event.date = Date.parse(req.body.date);
      

        event.save()
          .then(() =>res.json('event updated'))
          .catch(err => res.json('1 wystapil blad, pobierz event o id , w srodku'+ err))
       })

    .catch(err => res.json('2 wystapil blad, pobierz event o id , na zewnatrz'+ err))
 });



    router.post('/add' , function (req, res) {
        const event = req.body.event;
        const person = req.body.person ;
        const description = req.body.description ;
        const date = Date.parse(req.body.date);
      
        const newEvent = new Event({
                event,
                person, 
                description ,
                date 
        });
      
        newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.json('wystapil blad'+ err))
});


        module.exports = router ;