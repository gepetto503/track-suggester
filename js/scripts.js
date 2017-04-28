$(document).ready(function() {

  $("form#userForm").submit(function(event) {

    event.preventDefault();

    var frontBack = $("input:radio[name=front-back]:checked").val();

    var coSize = $("input:radio[name=co-size]:checked").val();

    if (frontBack === "look") {
      $(".results").hide();
      $("#css").show();
    } else {
      $(".results").hide();
      $("#c-sharp").show();
    };


  });

});
