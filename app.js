const http =require('http');

const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method, req.headers);
    //process.exit();
    const url =req.url;
    
    if(url==='/home'){
        res.write('<html>');
        res.write('<head><title> My First Page </title></head>');
        res.write('<body><h1> Welcome home </h1></body>');
        res.write('</html');
        return res.end(); 
    }
    if(url==='/about'){
        res.write('<html>');
        res.write('<head><title> My First Page </title></head>');
        res.write('<body><h1> Welcome to about Us page </h1></body>');
        res.write('</html');
        return res.end();  
    }
    if(url==='/node'){
        res.write('<html>');
        res.write('<head><title> My First Page </title></head>');
        res.write('<body><h1> Welcome to my Node Js project </h1></body>');
        res.write('</html');
        return res.end();  
    }
    res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My First Page </title></head>');
    res.write('<head><h1> Welcome to my Node Js project </h1></head>');
    res.write('</html');
    res.end();

});

server.listen(3000);
