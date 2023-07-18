function onClickSearch() {
  const searchQuery = "Harry Potter and the philosiphers stone";
  const apiKey = "AIzaSyBxj-ZkK9pnEnACEAfsr_YNYkeIa4IPt1k";
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    searchQuery
  )}&key=${apiKey}`;

  console.log(apiUrl);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((bookData) => {
      const books = bookData.items;

      for (const book of books) {
        console.log(book);
        
      }
      displayBook(bookData)
    });
}
var displayBook = (bookData) => {
    var bookTitle = bookData.items[0].volumeInfo.title;
    var bookAuthors = bookData.items[0].volumeInfo.authors;
    var bookDescription = bookData.items[0].volumeInfo.description;
    var bookImg = bookData.items[0].volumeInfo.imageLinks.thumbnail;
    // var img = document.createElement("div");
    // img.innerHTML = `<img src="https://books.google.com/books/content?id=${bookData.items[0].volumeInfo.imageLinks.thumbnail}.png"/>`
    
    // bookData.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById("title").textContent = `${bookTitle}`;
    document.getElementById("authors").textContent = `${bookAuthors}`;
    document.getElementById("description").textContent = `${bookDescription}`;
    document.getElementById("image").src = `${bookImg}`;
    
}
const searchButton = document.getElementById("search");
searchButton.addEventListener("click", onClickSearch);