//create variables for the elements
const switchAnimation = document.querySelector("#switch-animation")
const switchContainer = document.querySelector("#switch-container")
const themeText = document.querySelector("h1")

// add events for both functions
switchAnimation.addEventListener("click", themeToggle)

// function to toggle between light/dark theme
function themeToggle(){
        switchContainer.classList.toggle('dark')
        switchAnimation.classList.toggle('dark')
        themeText.classList.toggle('dark')
        if(themeText.textContent == 'Light Theme'){
                themeText.textContent = 'Dark Theme'
        } else {
                themeText.textContent = 'Light Theme'
        }
}
