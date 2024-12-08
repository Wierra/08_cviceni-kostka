let side = 1
const dice = document.querySelector(".dice")
const body = document.querySelector("body")

// keydown

body.addEventListener("keydown", () => {
    side++    
    if (side > 6) {
        side = 1  }

    console.log(side)
    dice.src = `img/side${side}.svg`
    })