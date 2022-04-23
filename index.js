const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Hi');
});
app.listen(3000);