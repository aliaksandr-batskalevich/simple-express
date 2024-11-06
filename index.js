const express = require('express');
const cors = require('cors');

const testRouter = require('./routers/test.router.js');

const PORT = 8080;

const app = express();
app.use(express.json());

const options = {
    credentials: true,
    origin: [/^(.*)/],
    // methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    // allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization',  'Cookie'],
    // exposedHeaders: ['Set-Cookie'],
};

app.use(cors(options));

app.use('/api/test', testRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
