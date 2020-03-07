const input = document.querySelector('#input');



input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let link = 'https://www.google.com/search?q=' + input.value;
        window.location.href = link;
    }
})

const buttonAddChild1 = document.querySelector('#button1');

buttonAddChild1.addEventListener('click', function(event) {

    let element = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = 'vk.com';
    element.className += "bookmarks-child"
    element.append(p);
    
    let category = document.querySelector('.bookmarks-category');
    // let nodes = document.querySelectorAll('.bookmarks-child');
    // let button = nodes[nodes.length - 1];
    let button = document.querySelector('.button');
    console.log(category, element);
    category.insertBefore(element, button);
})


function createElement() {

}