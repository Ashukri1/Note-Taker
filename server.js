const express = require('express')
const path = require('path')

//set up Express APP 
const PORT= process.env.PORT || 3001;
const app = express();


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// sets up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));

// Parse Application Json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public/notes.html')));

app.use(apiRoutes);
app.use(htmlRoutes);
 

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}!`);
});