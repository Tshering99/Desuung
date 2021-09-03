const http=require('http');
const ip ='127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
res.statusCode =200
res.setHeader('content-Type', 'text/plain');
res.end('Hello user! i am Server!!!');
});
server.listen(port, ip, ()=> console.log('server running...'));