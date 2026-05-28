const sec = document.querySelector('.sec');

window.addEventListener('scroll', function() {
    const position = sec.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100) {
        sec.classList.add('visible');
    }
});