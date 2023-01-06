const switchAnimation = document.querySelector("#switch-animation")
const switchContainer = document.querySelector("#switch-container")

switchAnimation.addEventListener("click", animation)

function animation(){
        switchContainer.classList.toggle('dark')
        switchAnimation.classList.toggle('dark')
}