let dailyPoems = "https://pafmon-walt-whitman-poems.p.mashape.com/poems/";

$(document).ready(function() {
  getDailyPoem();
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

// $.ajax({
//   url: "MASHAPE-URL", // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
//   type: "POST", // The HTTP Method
//   data: {}, // Additional parameters here
//   dataType: "json",
//   success: function(data) {
//     alert(JSON.stringify(data));
//   },
//   error: function(err) {
//     alert(err);
//   },
//   beforeSend: function(xhr) {
//     xhr.setRequestHeader("X-Mashape-Authorization", "YOUR-MASHAPE-KEY"); // Enter here your Mashape key
//   }
// });
