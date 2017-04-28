$(document).ready(function() {

  $("form#userForm").submit(function(event) {

    event.preventDefault();

    var frontBack = $("input:radio[name=front-back]:checked").val();

    var coSize = $("input:radio[name=co-size]:checked").val();

    var likeApps = $("input:radio[name=app]:checked").val();

    if (frontBack === "look") {
      $(".results").hide();
      $("#css").show();
    } else if (likeApps === "yes") {
      $(".results").hide();
      $("#ruby").show();
    } else {
      $(".results").hide();
      $("#c-sharp").show();
    };


  });

});
