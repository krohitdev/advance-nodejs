const crypto = require('crypto');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // doWork(5000);
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
        res.send("Hi there")
    });
});

app.get('/fast', (req, res)=>{
    res.send("FAST ")
})

app.listen(3000);

// command to start clustering pm2
// pm2 start index.js -i 0  


