const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//vmDJdsXnozzr9JhW
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully..");
})

const recruiterRouter = require('./routes/recruiter');
const workerRouter = require('./routes/worker');

app.use('/recruiter', recruiterRouter);
app.use('/worker', workerRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
