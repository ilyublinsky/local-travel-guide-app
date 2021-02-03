var apiKey = "062f1094719e081c0ffc6ab1f3e61902"


function getRestaurantsAround(cityNameInput) {

};

$("#search-button-rest").on("click", function () {
    var cityNameInput = $("#search-input-city").val();
    var restaurantNameSelect = $("#search-input-rest").val();

    getRestaurantsAround(cityNameInput);
    console.log(cityNameInput)
})