$ (document).ready(function() {
  // Quotes stored as JSON Data
  const quoteData = "assets/data.json";
  let tweetUrl = "https://twitter.com/intent/tweet?text=";
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
      $('#text').html(`<i class="fa fa-quote-left left-quote" aria-hidden="true"></i> ${item.quote}`);
      $('#author').html(`- ${item.author}`);
      $('#img-container').html(`<img src="${item.img}" id="img" alt="image of ${item.author}"/>`);
      $('#cite').html(`${item.cite}`);
    }); //for each end
  } //function end

  // Event listener for on click new quote button
  $('#new-quote').click(function(e) {
    e.preventDefault();
    shuffleArray();
  }); //on click end

  // Event listener Twitter share
  $('#tweet-quote').click(function(e) {
    e.preventDefault();
    // grab current quote, author and cite
    let quote = $('#text').text();
    let author = $('#author').text();
    let cite = $('#cite').text();
    $('#tweet-quote').attr("href", tweetUrl);
    // open new window and tweet quote
    window.open(tweetUrl + encodeURIComponent('\"' + quote + '\"' + ' ' + author + ' ' + 'from' + ' ' + cite));
  }); //on click twitter end

  shuffleArray();
}); //end document ready