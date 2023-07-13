function fetchDataFromAPI() {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchQuery
      )}&key=${apiKey}`;

    const apiKey = "AIzaSyBxj-ZkK9pnEnACEAfsr_YNYkeIa4IPt1k";
    const axios = require ("axios")
    const searchQuery = "Harry Potter";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(bookData => {

        for (var i = 0; i <bookData.length; i++) {
            var element = document.createElement("p");
            element.textContent = bookData[i].name;

            var container = document.getElementById("container");
            container.appendChild(element);
        }
        axios
        .get(url)
        .then((response) => {
          console.log(response.data);
        })

        console.log(data);
      })
      .catch(error => {
        
        console.error("Error:", error);
      });
  }