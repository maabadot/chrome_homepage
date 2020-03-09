const input = document.querySelector('#input');

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let link = 'https://www.google.com/search?q=' + input.value;
        window.location.href = link;
    }
})

const addCategory = document.querySelector('.pinned-add-category');
addCategory.addEventListener('click', function(event) {
    console.log('clicked');
});


let bookmarksElement = document.querySelector('.bookmarks');

function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')).categories;
    for (let i = 0; i < bookmarks.length; i++) {
        console.log(bookmarks[i]);

        let category = document.createElement('div');
        category.className += "bookmarks-category";

        let header = document.createElement('p');
        header.innerHTML = bookmarks[i].name;
        category.appendChild(header);

        categoryBookmarks = bookmarks[i].categoryBookmarks
        for (let j = 0; j < categoryBookmarks.length; j++) {
            bookmark = categoryBookmarks[j];

            let link = document.createElement('a');
            link.href = bookmark.link;
            link.innerHTML = bookmark.name;

            let child = document.createElement('div');
            child.className += 'bookmarks-child';
            child.appendChild(link);

            category.appendChild(child);

            console.log(bookmark);
        }
        console.log(category);

        // let buttonElement = document.createElement('button');
        // buttonElement.innerHTML = '+';
        // buttonElement.className += 'button';

        let div = document.createElement('div');
        div.className += 'bookmarks-button';
        div.innerHTML = '+';
        div.id = `button${i}`;
        // div.appendChild(buttonElement);

        category.appendChild(div);

        bookmarksElement.appendChild(category);
    }
    
}

loadBookmarks()

const buttonAddChild1 = document.querySelector('#button1');

buttonAddChild1.addEventListener('click', function(event) {

    let element = document.createElement('div');
    let a = document.createElement('a');
    a.innerHTML = 'vk.com';
    a.href = 'https://vk.com';
    element.className += "bookmarks-child"
    element.append(a);
    
    let category = document.querySelector('.bookmarks-category');
    let button = document.querySelector('.button');
    category.insertBefore(element, button);
})