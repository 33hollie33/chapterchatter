// /function fetchDataFromAPI() {
//     const searchQuery = "Harry Potter";
//     const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
//         searchQuery
//       )}&key=${apiKey}`;

//     const apiKey = "AIzaSyBxj-ZkK9pnEnACEAfsr_YNYkeIa4IPt1k";
//     // const axios = require ("axios")
    
  
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(bookData => {

//         for (var i = 0; i <bookData.length; i++) {
//             var element = document.createElement("p");
//             element.textContent = bookData[i].name;

//             var container = document.getElementById("container");
//             container.appendChild(element);
//         }
//         axios
//         .get(url)
//         .then((response) => {
//           console.log(response.data);
//         })

//         console.log(data);
//       })
//       .catch(error => {
        
//         console.error("Error:", error);
//       }); 
//     function fetch(fetchDataFromAPI){
//         console.log(fetchDataFromAPI);

//     }
// }


function onClickSearch() {
  const searchQuery = "Harry Potter";
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
        console.log(book.volumeInfo.title);
      }
    });
}

const searchButton = document.getElementById("search");
searchButton.addEventListener("click", onClickSearch);