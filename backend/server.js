/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true  ,  useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



const eventsRouter = require('./routes/events');
const personsRouter = require('./routes/persons');
app.use('/events' , eventsRouter);
app.use('/persons' , personsRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});*/






const express = require('express');
const cors = require ('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT|| 5000 ;

app.use(cors());
app.use(express.json());




const uri = process.env.ATLAS_URI;

mongoose.connect(uri , {useNewUrlParser :true , useCreateIndex :true , useUnifiedTopology: true});
const connection = mongoose.connection;

//const connection = mongoose.connection;
mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const eventRouters = require('./routes/events');
const personRouters = require('./routes/persons');
app.use('/events' , eventRouters);
app.use('/persons' , personRouters)

app.listen(port , () => {
    console.log (`Server is running on the port: ${port}`);
}); 