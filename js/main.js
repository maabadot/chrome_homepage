const input = document.querySelector('#input');

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let link = 'https://www.google.com/search?q=' + input.value;
        window.location.href = link;
    }
})