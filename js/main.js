const input = document.querySelector('#input');

// Redirecting to google after clicking 'Enter' in search field
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let link = 'https://www.google.com/search?q=' + input.value;
        window.location.href = link;
    }
})

// Opening modal for adding categories
const openModelAddCategory = document.querySelector('.pinned-add-category');
openModelAddCategory.addEventListener('click', function(event) {
    let modal = document.querySelector('#modalCategory');
    modal.classList.toggle('closed');
});

// localStrorage bookmarks loading function
function loadBookmarks() {
    let bookmarksElement = document.querySelector('.bookmarks');
    bookmarksElement.innerHTML = '';
    let bookmarksJson = JSON.parse(localStorage.getItem('bookmarks'));
    let bookmarks;

    // Check if bookmarks are empty
    // Add 'Let's get started' category if they are
    if (bookmarksJson != null) {
        bookmarks = bookmarksJson.categories;
    } else {
        let initialzieBookmarks = {
            "categories": [
                {
                    "name": "Let's get started",
                    "categoryBookmarks": [
                        {
                            "name": "VK",
                            "link": "https://vk.com"
                        },
                        {
                            "name": "Github",
                            "link": "https://github.com"
                        }
                    ]
                }
            ]
        };
        bookmarks = initialzieBookmarks.categories;
        localStorage.setItem('bookmarks', JSON.stringify(initialzieBookmarks));
    }

    console.log(bookmarks);

    for (let i = 0; i < bookmarks.length; i++) {
        
        // Category root element
        let category = document.createElement('div');
        category.className += "bookmarks-category";

        // Category header
        let header = document.createElement('p');
        header.innerHTML = bookmarks[i].name;
        category.appendChild(header);

        categoryBookmarks = bookmarks[i].categoryBookmarks
        for (let j = 0; j < categoryBookmarks.length; j++) {
            bookmark = categoryBookmarks[j];

            // Link to site
            let link = document.createElement('a');
            link.href = bookmark.link;
            link.innerHTML = bookmark.name;

            // Child element containing link
            let child = document.createElement('div');
            child.className += 'bookmarks-child';
            child.appendChild(link);

            // Appending child to category
            category.appendChild(child);

            console.log(bookmark);
        }
        console.log(category);

        // Adding button to the end of category
        let div = document.createElement('div');
        div.className += 'bookmarks-button';
        div.innerHTML = '+';
        div.id = `button${i}`;
        category.appendChild(div);

        addBookmarkListener(div, i);
        // Adding category
        bookmarksElement.appendChild(category);
    }
    
}

//
function addBookmarkListener (button, i) {
    button.addEventListener('click', function(event) {
        let modalBookmarks = document.querySelector('#modalBookmark');
        let addBookmarkButton = document.querySelector('#buttonAddBookmark');
        let inputBookmarkName = document.querySelector('#inputAddBookmarkName');
        let inputBookmarkLink = document.querySelector('#inputAddBookmarkLink');

        modalBookmarks.classList.toggle('closed');
        addBookmarkButton.addEventListener('click', function(event) {
            let local = JSON.parse(localStorage.getItem('bookmarks'));
            let object = {
                "name": inputBookmarkName.value,
                "link": inputBookmarkLink.value
            };
            local.categories[i].categoryBookmarks.push(object);
            localStorage.setItem('bookmarks', JSON.stringify(local));
            loadBookmarks();
        });
    });
}

// Load bookmarks from localStorage
loadBookmarks()

//
const addCategory = document.querySelector('#buttonAddCategory');
addCategory.addEventListener('click', function(event) {
    let inputAddCategory = document.querySelector('#inputAddCategory');
    let text = inputAddCategory.value;

    let localBookmarks = JSON.parse(localStorage.getItem('bookmarks')).categories;
    let obj = {
        "name": text,
        "categoryBookmarks": []
    }
    localBookmarks.push(obj);
    obj = {
        "categories": localBookmarks
    }
    localStorage.setItem('bookmarks', JSON.stringify(obj));
    loadBookmarks();
});