// Quotes stored as JSON Data
const quoteData = "assets/data.json";
let shuffledQuotes = [];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}

function shuffleArray() {
  // fetch quote data
  $.getJSON(quoteData, function(result) {
    // invoke shuffle function and store in variable shuffledData
    shuffledQuotes = shuffle(result);
    // call randomQuote function
    randomQuote();
  }); //get JSON end
} //function end

function randomQuote() {
  // iterate over shuffledQuotes array to update quote
  $.each(shuffledQuotes, function(i, item) {
    $('#text').html(item.quote);
    $('#author').html(item.author);
  }); //for each end
} //function end

  // Event listener for on click new quote button
  $('#new-quote').click(function() {
    shuffleArray();
  }); //on click end

$ (document).ready(function() {
  shuffleArray();
}); //end document ready