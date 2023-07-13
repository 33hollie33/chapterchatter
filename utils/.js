function fetchDataFromAPI() {
    var apiUrl = "https://console.cloud.google.com/AIzaSyBxj-ZkK9pnEnACEAfsr_YNYkeIa4IPt1k"; 
    var apiKey = AIzaSyBxj-ZkK9pnEnACEAfsr_YNYkeIa4IPt1k;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        
        console.log(data);
      })
      .catch(error => {
        
        console.error("Error:", error);
      });
  }