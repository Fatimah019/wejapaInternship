//include http module
const http = require('http')
//initialize port number
const port = 8080
const fs = require('fs')

//create a server
http.createServer(function(req, res){
    //http header (response to be displayed as html)
    res.writeHead(200, {'Content-Type': "text/html"});

    //read index.html file to display the form
    fs.readFile('index.html', (err, data)=>{
        res.write(data);
        //end the respone
        res.end();
    });
    //listen on port 8080
}).listen(port)