const initSlider = () => {
    const imageList = document.querySelector(".image-list")
    const slideButtons = document.querySelectorAll(".slide-button")
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction
            imageList.scrollBy({left: scrollAmount, behaviour: "smooth"})
        })
    }
    )
}


window.addEventListener("load",initSlider)