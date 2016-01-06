$(document).ready(function() {
    console.log('sanity check!');

  $("#get-data").on("click", function () {
    var input = $('#input').val();

    // var boxes = getDimensions(input);
    // var paper = calculateWrapping(boxes);
    // var ribbon = calculateRibbon(boxes);

    // var houses = findHouses(input);
    var houses = findHousesAgain(input);
    // console.log(input, "input");

  });

});
