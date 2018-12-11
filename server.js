const express = require('express');
const mongoose = require('mongoose');

const skills = require('./routes/api/skills');

const app = express();

//DB config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/',(req, res)=> res.send('online resume'));

//Use Routes
app.use('/api/skills',skills);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
