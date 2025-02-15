const express = require('express')
const router = express.Router()
let {people} = require('../data.json')
// static assets
router.use(express.static('./method-public'))
//parse from data
router.use(express.urlencoded({extended:false}))
router.use(express.json())
router.get('/api/people',(req,res)=>{
    return res.status(200).json({sucess:true ,data:people}

     )
})
router.post('/',(req,res)=>{
    const {name} =req.body
    if(!name){
        return res
        .status(400)
        .json({ success :false,msg:'please provide name value'})
    }
    res.status(201).send({success:true,person:name})
})
router.get('/',(req,res)=>{
    return res.status(200).json({sucess:true ,data:people}

     )
})
router.post('/',(req,res)=>{
   const {name} = req.body
   if(!name){
    return res
    .status(400)
    .json({ success :false,msg:'please provide name value'})
}
    res.status(201).send({success:true, data:[...product,name]})
})

router.put('/:id', (req, res) => {
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
router.delete('/:id',(req,res)=>{
    const personId = Number(req.params.id);
    const person = people.find((person) =>person.id === Number(personId))
    if(!person){
        return res.status(404).json({success:false,msg:`no person with ${personId}`})
    }
    const newpeople = people.filter((person)=>person.id !== Number(personId))
    return res.status(200).json({success:true,data:newpeople})
})


module.exports = router