window.addEventListener('scroll', () => {
    let content = document.querySelector('.section-1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
        content.classList.add('active1');
    } else {
        content.classList.remove('active1');
    }
});