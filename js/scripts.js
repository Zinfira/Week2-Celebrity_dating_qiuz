$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault()
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    console.log("I Ran" + $("#prefer").val());
    
    if ($("#prefer").val() === "1") {
      $('#vanessa').removeClass("hidden");
    } else if ($("#prefer").val() === "2") {
      $('#kylie').removeClass("hidden");
    } else {
      $('#ryan').removeClass("hidden");
    }
  });
});