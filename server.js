/* Dependencies */
// Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Cors for cross origin allowance
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Spin up the server
const server = app.listen(port, function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
});

const projectData = [];

// Callback function to complete GET '/all'
app.get('/all', function sendData (req, res) {
  res.send(projectData);
});

app.post('/addData', function getData(req, res){
  newEntry = {
    temperature: req.body.temperature,
    date: req.body.date,
    feelings: req.body.feelings,
  };

  projectData.push(newEntry);
  console.log(projectData);
  // set HTTP status of response to 204 ("Created")
  res.status(204).end();
});
