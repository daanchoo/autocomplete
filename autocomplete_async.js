var input = document.getElementById("autocomplete");
var resultContainer = document.getElementById("autocomplete__result");


var timer = null;
input.addEventListener('keyup', function(e) {
  var searchQuery = e.target.value;

  if (searchQuery.length < 3) {
    resultContainer.innerHTML = "";
    return;
  }

  if (timer !== null) {
    clearTimeout(timer);
  }

  timer = setTimeout(function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
      success: function(users) {
        var result = users.filter(function(user, i) {
          var lowerCasedName = user.name.toLowerCase();
          var lowerCasedSearchQuery = searchQuery.toLowerCase();

          return lowerCasedName.includes(lowerCasedSearchQuery);
        });

        var resultNames = result.map(function(user, i) {
          return user.name;
        });

        resultContainer.innerHTML = resultNames.join('<br>');
      }
    });
  }, 300);
});



