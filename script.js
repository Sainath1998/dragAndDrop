const draggables= document.querySelectorAll('.draggable')
const container = document.querySelectorAll('.container')
draggables.forEach(drag=>{
    drag.addEventListener('dragstart',()=>{
        drag.classList.add('dragging')
        drag.classList.remove('notDragging')
    })
    drag.addEventListener('dragend',()=>{
        drag.classList.add('notDragging')
        drag.classList.remove('dragging')
    })
})

container.forEach(cont=>{
    cont.addEventListener('dragover',e=>{
        e.preventDefault()
        const draggable = document.querySelector('.dragging')
        cont.appendChild(draggable)
    })
})