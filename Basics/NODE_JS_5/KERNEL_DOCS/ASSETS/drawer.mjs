const canvas = document.getElementById('draw')
const context = canvas.getContext('2d')

let radius = 10;

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const putPoint = function (e){
    context.beginPath()
    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2)
    context.fill()
}

canvas.addEventListener('mousedown', putPoint)