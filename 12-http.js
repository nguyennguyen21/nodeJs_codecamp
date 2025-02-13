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


// const sever = http.createServer((req,res)=>{
//     if (req.url === '/'){
//         //Blocking code
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('Welcome to our home page');
//     }
//     if (req.url === '/about'){
//         res.end('Here is our short history');
//     }
//    else{
//     console.log("errol")
//    }
//     // console.log("request event");
//     // res.end('Hello world');
// })


// sever.listen(5000,()=>{
//     console.log('Server listening on port : 5000...');
// })


