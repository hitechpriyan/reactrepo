const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    res.write("Hello Node\n");

    // setTimeout(()=>{
    //     res.write("still on ......");
    // },3000);

    res.end('bliss');
});

server.listen(8080);
