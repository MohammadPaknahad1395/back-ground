// background img //
const images = document.querySelectorAll('.bg')
const main = document.querySelector('main')
const imgArray = ['img/desktop.png', 'img/d1.jpg', 'img/d3.jpg']
images.forEach(img => {
    img.addEventListener('click', e => {
        if (e.target.dataset.num == '1') {
            main.style.backgroundImage = 'url(' + `${imgArray[0]}` + ')'
        } else if (e.target.dataset.num == '2') {
            main.style.backgroundImage = 'url(' + `${imgArray[1]}` + ')'
        } else {
            main.style.backgroundImage = 'url(' + `${imgArray[2]}` + ')'
        }
    })
})
// background img //


// mouse effect // 
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
let x = 0, y = 0
main.addEventListener('mousemove', e => {
    x = e.clientX
    y = e.clientY

    c1.style.top = y + 'px'
    c2.style.top = y + 'px'
    c1.style.left = x + 'px'
    c2.style.left = x + 'px'
})

main.addEventListener('mousedown', () => {
    c1.style.transform = 'translate(-50%, -50%) scale(2)'
    c2.style.transform = 'translate(-50%, -50%) scale(.7)'
})

main.addEventListener('mouseup', () => {
    c1.style.transform = 'translate(-50%, -50%) scale(1)'
    c2.style.transform = 'translate(-50%, -50%) scale(1)'
})
// mouse effect // 


// context menu //
main.addEventListener('contextmenu', e => {
    e.preventDefault()
    rc.style.display = 'block'
    if (x <= (window.innerWidth - 250)) {
        rc.style.left = x + 'px'
    } else {
        rc.style.left = (x - 250) + 'px'
    }
    if (y <= (window.innerHeight - 200)) {
        rc.style.top = y + 'px'
    } else {
        rc.style.top = (y - 200) + 'px'
    }
})

window.addEventListener('click', () => {
    rc.style.display = 'none'
})
// context menu //


// drag & drop //
const icons = document.querySelectorAll('.icons>div')
const dropBox = document.querySelector('#drop')

const leftDrop = dropBox.getBoundingClientRect().left
const topDrop = dropBox.getBoundingClientRect().top

icons.forEach(icon => {
    icon.addEventListener('mousedown', () => {
        icon.addEventListener('mousemove', _move)
    })
    icon.addEventListener('mouseup', () => {
        icon.removeEventListener('mousemove', _move)
    })
})

function _move(e) {
    e.target.style.position = 'absolute'
    e.target.style.transform = 'translate(-50%, -50%)'

    let x = e.clientX
    let y = e.clientY

    if (x >= (leftDrop - 10) && y >= (topDrop - 10)) {
        e.target.classList.add('change-drop')
        dropBox.appendChild(e.target)

    } else {
        e.target.style.top = y + 'px'
        e.target.style.left = x + 'px'
    }
}
// drag & drop //