const requiredNumber = Math.floor(Math.random() * 100) + 1

const input = document.getElementById('number')
const button = document.querySelector('button')
const wrongAnsw = document.querySelector('.wrong-answer')
const victory = document.querySelector('.victory')
const title = document.querySelector('h1')
const picNumbers = document.querySelector('.pic-numbers')
const mainWrapper = document.querySelector('.main-wrapper')
const higher = document.getElementById('higher')
const lower = document.getElementById('lower')
const shot = document.getElementById('shot')
const newGame = document.querySelector('.new-game')

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