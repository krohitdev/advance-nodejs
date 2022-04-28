process.env.UV_THREADPOOL_SIZE=1;

const cluster = require('cluster');
const crypto = require('crypto');
// is the file being executed in Master mode
if (cluster.isMaster) {
    // Cause index.js to be executed again but
    // in child mode
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
    // cluster.fork();
} else {
    // I am a child I am going to act like server 
    // and do nothing else
    const express = require('express');
    const app = express();

    // function doWork(duration) {
    //     const start = Date.now();
    //     while (Date.now() - start < duration) {

    //     }
    // }
   
   
    function doWork(duration) {
        const start = Date.now();
         
    }

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
}


