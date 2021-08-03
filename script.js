const addButton = document.getElementById('add-button');
const toDoContainer = document.getElementById('toDoContainer');
const input = document.getElementById('text-writer');

addButton.addEventListener('click', function(){

    var paragraph = document.createElement('p');
    paragraph.innerText = input.value;
    toDoContainer.appendChild(paragraph);
    input.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
});

    