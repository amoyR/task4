const http = require("http")
const server = http.createServer()
const fs = require("fs")
const basePath = process.cwd()

server.on("request", doRequest)
server.listen(8088)

function doRequest(request, response){
  const requestedPath = request.url
  const responseFile = fs.readFileSync(basePath + requestedPath, "utf-8")
  response.write(responseFile)
  response.end()
}
