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

//

const app = document.getElementById("root");
axios({
    method: 'get',
    url: 'https://dotnetsafer.com/blog/wp-json/wp/v2/posts?_embed'
}).then(res => {
    console.log(res.data)


    for (data of res.data) {

        let div = document.createElement('div')

        div.innerHTML = dataDom(data)

        app.appendChild(div)



    }
})





const dataDom = (data) => {

    //const media="data._embebed.featuredmedia.link"


    return `<p>${data.title.rendered}<p>

   
    
    <p>${data.link}<p>    
        `

}
