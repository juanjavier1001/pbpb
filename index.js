import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send('hola jc');
});

app.listen(4000, console.log('server on ...'));
