document.addEventListener("DOMContentLoaded", function () {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                lazyImage.src = lazyImage.dataset.src
                lazyImage.classList.remove("image_lazy");
                lazyImage.classList.add("image_lazyblur");
                imgObserver.unobserve(lazyImage);
            }
        })
    });
    const arr = document.querySelectorAll('img.image_lazy')
    arr.forEach((v) => {
        imageObserver.observe(v);
    })
})