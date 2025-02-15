const express = require('express')
let { people, product } = require('./data.json');
const app = express()
// static assets
app.use(express.static('./method-public'))
//parse from data
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/api/people',(req,res)=>{
    return res.status(200).json({sucess:true ,data:people}

     )
})
app.post('/api/people',(req,res)=>{
    const {name} =req.body
    if(!name){
        return res
        .status(400)
        .json({ success :false,msg:'please provide name value'})
    }
    res.status(201).send({success:true,person:name})
})
app.get('/api/postman/people',(req,res)=>{
    return res.status(200).json({sucess:true ,data:people}

     )
})
app.post('/api/postman/people',(req,res)=>{
   const {name} = req.body
   if(!name){
    return res
    .status(400)
    .json({ success :false,msg:'please provide name value'})
}
    res.status(201).send({success:true, data:[...product,name]})
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    // Tìm người cần cập nhật
    const person = people.find((person) => person.id === Number(id));
    
    if (!person) {
        return res.status(400).json({ success: false, msg: "Vui lòng nhập ID hợp lệ" });
    }

    // Cập nhật dữ liệu
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            return { ...person, name: name }; // Cập nhật đúng cách
        }
        return person;
    });

    // Gán lại danh sách mới
    people = newPeople;

    res.status(200).json({ success: true, data: newPeople });
});
app.delete('/api/people',(req,res)=>{
    const people = people.find((person)=>person.id === Number(id))
})

app.post('/input-name',(req,res)=>{''
    const {name} = req.body
    if (!name) {
        return res.status(400).json({ success: false, message: 'Vui lòng nhập tên!' });
    }

    // Kiểm tra xem tên có trong danh sách không (phân biệt hoa thường)
    res.status(201).send({success:true,person:name})
})
app.listen(5000,()=>{
    console.log('cổng 5000 đã mở')
})