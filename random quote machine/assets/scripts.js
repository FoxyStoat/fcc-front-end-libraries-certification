// My Quotes stored as JSON Data on Github
const quoteData = "https://github.com/FoxyStoat/fcc-front-end-libraries-certification-/blob/main/random%20quote%20machine/assets/data.json";

$ (document).ready(function() {
  // Event listener for on click new quote button
  $('#new-quote').click(function() {
    console.log("I was clicked");
    // fetch quote data
    // $.getJSON("https://github.com/FoxyStoat/fcc-front-end-libraries-certification-/blob/main/random%20quote%20machine/assets/data.json", function(result){
      // $("#quote").html(result[0].text + '-' + result[0].author)
      // console.log(result);
    // });
  });
});
