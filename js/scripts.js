$(document).ready(function() {

  $("form#userForm").submit(function(event) {

    event.preventDefault();

    var lookWork = $("input:radio[name=front-back]:checked").val();

    var coSize = $("input:radio[name=cosize]:checked").val();

    var appSite = $("input:radio[name=app-site]:checked").val();

    var androidBase = $("input:radio[name=android-base]:checked").val();

    if (lookWork === "look") {
      $(".results").hide();
      $("#css").show();
    } else if (appSite === "app") {
      $(".results").hide();
      $("#ruby").show();
    } else if (coSize === "big" && androidBase === "base") {
      $(".results").hide();
      $("#c-sharp").show();
    }else if (coSize === "big" && androidBase === "android") {
      $(".results").hide();
      $("#java").show();
    } else if (true) {
      $(".results").hide();
      $("#php").show();
    } else {
      $(".results").hide();
      $("#uhoh").show();
    };


  });

});
