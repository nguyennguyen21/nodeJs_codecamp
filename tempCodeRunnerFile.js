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