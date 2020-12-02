// Quotes stored as JSON Data
const quoteData = "assets/data.json";

$ (document).ready(function() {
  // Event listener for on click new quote button
  $('#new-quote').click(function() {
    console.log("I was clicked");
    // fetch quote data
    $.getJSON(quoteData, function(result) {
      console.log(result);
    }); //get JSON end
  }); //on click end
}); //end document ready