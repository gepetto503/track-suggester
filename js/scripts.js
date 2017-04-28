$(document).ready(function() {

  $("form#userForm").submit(function(event) {

    event.preventDefault();

    var lookWork = $("input:radio[name=front-back]:checked").val();

    var coSize = $("input:radio[name=co-size]:checked").val();

    var appSite = $("input:radio[name=app-site]:checked").val();

    if (lookWork === "look") {
      $(".results").hide();
      $("#css").show();
    } else if (appSite === "app") {
      $(".results").hide();
      $("#ruby").show();
    } else {
      $(".results").hide();
      $("#uhoh").show();
    };


  });

});
