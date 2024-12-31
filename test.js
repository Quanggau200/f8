let currentIndex = 0;

function nextSlide() {
    const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');
    const itemWidth = items[0].offsetWidth;

    if (currentIndex < items.length - 1) { // Kiểm tra nếu còn item phía trước
        currentIndex++;
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
}

function prevSlide() {
    const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');
    const itemWidth = items[0].offsetWidth;

    if (currentIndex > 0) { // Kiểm tra nếu còn item phía sau
        currentIndex--;
        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    }
}
