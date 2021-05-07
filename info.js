/* const http = require("http");

const host ='localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

 */


const axios = require('axios');


window.onload(

    axios({
        method: 'get',
        url: 'https://dotnetsafer.com/blog/wp-json/wp/v2/posts?_embed'
      }).then(res=>{console.log(res.data)}
    
      )



)