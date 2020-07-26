//include http module
const http = require('http')
//initialize port number
const port = 8080

//create a server
http.createServer(function(req, res){
    //display the string
    res.end("Hello World, Welcome to WeJapa Internships")
    //listen on port 8080
}).listen(port)