const button = document.querySelector('.AddTodo')
const input = document.querySelector('input')
const list = document.querySelector('.Todo')
let newlist = document.getElementsByTagName('li');

    
let TotalClicks = 0;

button.addEventListener('click', function () {
    TotalClicks += 1;
});

button.onclick = function () {
    if (input.value.length == 0) {
        alert('Please add an input!')
    } else {
        newTodo = document.createElement('li')
        newTodo.textContent = document.querySelector('.input').value
        list.appendChild(newTodo)

        let text = document.createTextNode('Delete');
        let span = document.createElement('span');
        span.className = 'remove';
        span.appendChild(text);
        newlist[TotalClicks].appendChild(span)

        let remove = document.getElementsByClassName('remove');
        for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
  }
}
    }
}

