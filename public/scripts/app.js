let dailyPoems =
  "http://www.stands4.com/services/v2/poetry.php?uid=6113&tokenid=goA30YdhRjsoIkso&term=grass";

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
      $(".daily-poem-content").append(dataResponse);
    },
    error: handleError
  });
}

function handleError(e) {
  console.log("uh oh");
  $("#bookTarget").text("Failed to load books, is the server working?");
}
