let active = document.querySelectorAll('.active');
let li = document.querySelectorAll('li');
function activeLi(){
     // Xóa class "active" khỏi tất cả các <li> trước khi thêm vào phần tử được click
     li.forEach(li => li.classList.remove('active'));

     // Thêm class "active" vào phần tử được click
     this.classList.add('active');
}
li.forEach((li) => {
    li.addEventListener('click', activeLi);
})