function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  //fetches the books endpoint of API
  fetch("https://anapioficeandfire.com/api/books")
  //converts to JS
  .then(response => response.json())
  // runs the renderBooks function for all of the book
  .then(titles => renderBooks(titles))
  
}

//uses the all the books as a parameter
function renderBooks(books) {
  // selects the main section of HTML
  const main = document.querySelector('main');
  // runs a loop for each book
  books.forEach(book => {
    // creates h2 element
    const h2 = document.createElement('h2');
    //sets the text of each h2 to the name value of the book in the JSON file
    h2.innerHTML = book.name;
    //adds the h2 to the main section of HTML
    main.appendChild(h2);
  });
}

//event listener waits for html, css, etc. to load before adding JS 
// can be accomplished with defer in the JS script in HTML 
document.addEventListener('DOMContentLoaded', function() {
  // once loaded, fetchbooks will run
  fetchBooks();
});
