const requiredNumber = Math.floor(Math.random() * 100) + 1
console.log(requiredNumber)

let input = document.getElementById('number')
let button = document.querySelector('button')
let wrongAnsw = document.querySelector('.wrong-answer')
let victory = document.querySelector('.victory')
let title = document.querySelector('h1')
let picNumbers = document.querySelector('.pic-numbers')
let mainWrapper = document.querySelector('.main-wrapper')
let higher = document.getElementById('higher')
let lower = document.getElementById('lower')
let shot = document.getElementById('shot')
let newGame = document.querySelector('.new-game')

input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        button.style.color = 'black'
    } else {
        button.style.color = ''
    }
})

let attempt = 0

button.addEventListener('click', (event) => {
    event.preventDefault()
    attempt++
    console.log(attempt)
    
    console.log(input.valueAsNumber)
    let number = input.valueAsNumber
    
    if (requiredNumber === number) {
        victory.style.display = 'flex'
        picNumbers.style.display = 'none'
        mainWrapper.style.display = 'none'
        wrongAnsw.style.display = 'none'

        shot.innerHTML = attempt + ' karto'
    } else {
        victory.style.display = 'none'
        picNumbers.style.display = 'flex'
        mainWrapper.style.display = 'flex'
        wrongAnsw.style.display = 'flex'   
        title.style.fontSize = '40px'

        if (requiredNumber > number) {
            higher.style.display = 'block'
            lower.style.display = 'none'
        } else {
            lower.style.display = 'block'
            higher.style.display = 'none'
        }
    }

    input.value = ''
})


newGame.addEventListener('click', () => {
    location.reload()
})