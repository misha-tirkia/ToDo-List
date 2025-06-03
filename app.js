let inp = document.querySelector('.input');
inp.value.trim()
let addbtn = document.querySelector('.Add-Task');
let lists = document.getElementById('list');
let removediv = document.getElementById('buttons');

window.addEventListener('load', () => {
    let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        let elemen = document.createElement('li')
        elemen.textContent = task;
        lists.appendChild(elemen);

        let removee = document.createElement('button')
        removee.classList.add('remove')
        removediv.appendChild(removee)
        removee.textContent = 'remove';

        removee.addEventListener('click', () => {
            elemen.remove()
            removee.remove()
            removeFromLocalStorage(task);
        })
    });
});


addbtn.addEventListener('click', () => {
    if(inp.value !== '') {
    let elemen = document.createElement('li')
    elemen.textContent = inp.value;
    lists.appendChild(elemen);
    let taskText = inp.value;
    inp.value = ""

    let removee = document.createElement('button')
    removee.classList.add('remove')
    removediv.appendChild(removee)
    removee.textContent = 'remove';
    
    removee.addEventListener('click', () => {
        elemen.remove()
        removee.remove()
        removeFromLocalStorage(taskText);
    })

    saveToLocalStorage(taskText);
    }
})


function saveToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
