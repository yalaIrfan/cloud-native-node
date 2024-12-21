import express  from  'express';
import bodyParser from  'body-parser';
import cors from  'cors';
import pg from './src/db/setup.js';
import Post from './src/models/Post.js';
const app =  express();

// Middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }));

// Enable CORS
app.use(cors());

// Routes
app.get('/', async (req , res ) => {
    // const post = Post.build({ title: 'Hello', message: 'World' });
    // await post.save();
    res.send(await Post.findAll());
});

app.all('*', (req, res) => {
    res.status(404).json({ message: 'Oopss .. 404 Not Found 😥😥' });
});


export default app;