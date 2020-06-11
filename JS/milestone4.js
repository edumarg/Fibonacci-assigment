let myNumber = document.getElementById("myNumber");
let myResult = document.getElementById("myResult");
let button = document.getElementById("btnCalculator");

button.addEventListener("click", function() {
    let SERVER_URL = `http://localhost:5050/fibonacci/${myNumber.value}`;
    fetch(SERVER_URL)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            myResult.innerText = data.result;
        })
        .catch(function(error) {
            console.error("Error:", error);
        });
});