$(document).ready(function() {
    console.log('sanity check!');

  $("#get-data").on("click", function () {
    var input = $('#input').val();


    getDimensions(input);

  });

});
