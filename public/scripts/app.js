let dailyPoems = "https://pafmon-walt-whitman-poems.p.mashape.com/poems/";

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
    dataType: "json",
    success: function(dataResponse) {
      console.log(dataResponse);

      let poems = dataResponse;
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader(
        "X-Mashape-Authorization",
        "iTKvwAD0gymshgyAlAQFMvbGZFsQp1bgWN4jsnF49Su6wVZTKE"
      );
    }
  });
}
