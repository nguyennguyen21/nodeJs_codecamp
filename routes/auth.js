const express = require('express')
const router = express.Router()
router.post('/input-name',(req,res)=>{
    const {name} = req.body
    if (!name) {
        return res.status(400).json({ success: false, message: 'Vui lòng nhập tên!' });
    }

    // Kiểm tra xem tên có trong danh sách không (phân biệt hoa thường)
    res.status(201).send({success:true,person:name})
})
module.exports = router