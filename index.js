const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        for (const slide of slides) {
            slide.classList.remove('active')
        }
        slide.classList.add('active')
    })
}