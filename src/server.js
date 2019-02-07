import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';

// routes
import feedRoutes from './routes/feed';

dotenv.config();

const PORT = 8080;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(PORT, () => {
    console.log('Listening on port %s', PORT);
});
