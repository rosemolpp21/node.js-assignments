const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
  const pathname=url.parse(req.url,true).pathname;
  if(pathname=='/'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('Welcome, This is home page')
  }
  else if(pathname=='/users'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('This is users list');
  }
  else if(pathname=='/about'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('this is about');
  }
  else if(pathname=='/information'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('Information page');
  }
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(pathname);
  }
}).listen(8080);