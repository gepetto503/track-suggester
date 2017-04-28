$(document).ready(function() {

  $("form#userForm").submit(function(event) {

    event.preventDefault();

    var lookWork = $("input:radio[name=front-back]:checked").val();
    var coSize = $("input:radio[name=cosize]:checked").val();
    var appSite = $("input:radio[name=app-site]:checked").val();
    var androidBase = $("input:radio[name=android-base]:checked").val();
    var likeComps = $("input:radio[name=likecomps]:checked").val();

    var nameInput = $("input#nameinput").val();

    if (likeComps === "no") {
      $(".results").hide();
      $("#else").fadeIn();
    } else if (lookWork === "look") {
      $(".results").hide();
      $("#css").fadeIn();
    } else if (appSite === "app") {
      $(".results").hide();
      $("#ruby").fadeIn();
    } else if (coSize === "big" && androidBase === "base") {
      $(".results").hide();
      $("#c-sharp").fadeIn();
    }else if (coSize === "big" && androidBase === "android") {
      $(".results").hide();
      $("#java").fadeIn();
    } else if (coSize === "small" && appSite === "site") {
      $(".results").hide();
      $("#php").fadeIn();
    } else {
      $(".results").hide();
      $("#uhoh").fadeIn();
    };

    $("#personsname").empty().append(nameInput);


  });

});
