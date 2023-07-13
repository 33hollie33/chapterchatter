function fetchDataFromAPI() {
    var apiUrl = "https://console.cloud.google.com/AIzaSyBxj-ZkK9pnEnACEAfsr_YNYkeIa4IPt1k"; 
    var apiKey = "AIzaSyBxj-ZkK9pnEnACEAfsr_YNYkeIa4IPt1k";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(bookData => {

        for (var i = 0; i <bookData.length; i++) {
            var element = document.createElement("p");
            element.textContent = bookData[i].name;

            var container = document.getElementById("container");
            container.appendChild(element);
        }

        console.log(data);
      })
      .catch(error => {
        
        console.error("Error:", error);
      });
  }