const express = require('express');

require('dotenv').config();

const app = express();
const PORT = +process.env.PORT || 5001;

app.use(express.json());

app.post('/', (_, res) => {
	res.send({message: 'Welcome to my project'});
});

app.listen(PORT, () => console.log(`Server is runing ${PORT}`));
