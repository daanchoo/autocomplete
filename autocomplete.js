var cities = [
  "Alingsås",
  "Arboga",
  "Arvika",
  "Askersund",
  "Avaskär",
  "Avesta",
  "Boden",
  "Bollnäs",
  "Borgholm",
  "Borlänge",
  "Borås",
  "Broo",
  "Brätte",
  "Båstad",
  "Djursholm",
  "Eksjö",
  "Elleholm",
  "Enköping",
  "Eskilstuna",
  "Eslöv"
];


var input = document.getElementById("autocomplete");
var resultContainer = document.getElementById("autocomplete__result");


input.addEventListener('keyup', function(e) {
  var searchQuery = e.target.value;

  if (searchQuery.length === 0) {
    resultContainer.innerHTML = "";
    return;
  }
  
  var result = cities.filter(function(city, i) {
    var lowerCasedCity = city.toLowerCase();
    var lowerCasedSearchQuery = searchQuery.toLowerCase();

    return lowerCasedCity.includes(lowerCasedSearchQuery);
  });

  resultContainer.innerHTML = result.join('<br>');
});



