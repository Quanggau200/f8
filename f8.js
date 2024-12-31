function moveRight() {
    const item = document.querySelector('.item_list');
    item.classList.remove('left');
    item.classList.add('right'); 
}

function moveLeft() {
    const item = document.querySelector('.item_list');
    item.classList.remove('right'); 
    item.classList.add('left'); 
}


 