// // Without using a framework, build a web server to render html files:
// When I navigate to “/index.html”, I should see a simple webpage of the student. (Nothing fancy)
// Add another feature such that when I navigate to “{random}.html” it should return with a 404 page

const http = require('http');
const fs = require('fs');
const path = require('path');

const localHost = 'localhost'
const port = 5000;








const server = http.createServer((req, res) =>{
if(req.url === '/index.html') {
const filepath = path.join(__dirname, 'index.html')
fs.readFile(filepath, (err, data) =>{
    if(err){
        res.setStatusCode = 500;
        res.setHeader('Content-Type', 'text/html')
        res.end(err);
    }
    else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    }
})
}

else{
    const errorPage = path.join(__dirname, 'error.html');
    fs.readFile(errorPage, (err, data) =>{
        if(err){
            res.setStatusCode = 500;
            res.setHeader('Content-Type', 'text/html')
            res.end(err)
            
}
 
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);


}



    )
}
})

server.listen(port, localHost, () =>{
    console.log(`server is running on ${localHost}:${port}`);
})
