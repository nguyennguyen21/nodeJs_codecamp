// Đoạn mã này tạo một máy chủ HTTP đơn giản sử dụng Node.js
// Đầu tiên, chúng ta yêu cầu module 'console' và 'http'
const Http = require('http')
// Tạo máy chủ HTTP
const sever = Http.createServer((req, res) => {
    // Ghi lại thông tin yêu cầu vào console
    console.log(req);
    // Gửi phản hồi về cho client
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
   if(req.url === '/about'){
        res.end('Here is our short history');
   }
   else{
   res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
   }
})
// Máy chủ lắng nghe trên cổng 5000
sever.listen(5000);


    


