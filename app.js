const express = require('express');


const app = express();

// app.get('/', (req, res) => {
//     res.send('hello from the server side');
// })

app.get('/', (req, res) => {
    res
        .status(200)
        .json({ message: 'hello from the server side', app: 'Natours' });
})

const port = 3000;

app.listen(port, () => {
    console.log(`app running on the ${port}`);
})