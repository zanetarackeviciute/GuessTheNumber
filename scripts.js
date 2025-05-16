const requiredNumber = Math.floor(Math.random() * 100) + 1
console.log(requiredNumber)

let input = document.getElementById('number')
let button = document.querySelector('button')
let wrongAnsw = document.querySelector('.wrong-answer')
let victory = document.querySelector('.victory')
let title = document.querySelector('h1')

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
        wrongAnsw.style.display = 'none'
        victory.style.display = 'flex'

    } else {
        victory.style.display = 'none'
        wrongAnsw.style.display = 'flex'   
        title.style.fontSize = '40px'
    }
})
