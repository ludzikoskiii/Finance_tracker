const resizeBtn = document.querySelector('[data-resize-btn]');

resizeBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    document.body.classList.toggle('sb-expanded');
    
})