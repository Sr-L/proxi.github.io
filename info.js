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

const app = document.getElementById("root");



function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

let res = httpGet('https://dotnetsafer.com/blog/wp-json/wp/v2/posts?_embed')

app.innerText = res;
