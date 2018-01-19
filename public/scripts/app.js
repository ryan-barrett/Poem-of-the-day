let dailyPoems = "https://talaikis.com/api/quotes/random/";

$(document).ready(function() {
  getDailyPoem();

  $(".sendText").on("submit", function() {
    console.log("sent");
  });
});

function getDailyPoem() {
  $.ajax({
    method: "GET",
    url: dailyPoems,
    dataType: "html",
    success: function(dataResponse) {
      console.log(dataResponse);
      let quote = dataResponse.split(":")[1];
      quote = quote.replace(/,"author"/g, "");
      $(".daily-poem-content").append(quote);
      $(".quoteText").val(quote);
      $(".phoneNum").val("5303885681");
    },
    error: handleError
  });
}

function handleError(e) {
  console.log("uh oh");
  $("#bookTarget").text("Failed to load books, is the server working?");
}
