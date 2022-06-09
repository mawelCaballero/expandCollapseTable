$(document).ready(function () {
  // Once page is loaded, hide the nested tables and show the first table
  $("table table").hide();

  // When checkbox is clicked, show all the nested tables, otherwise hide them
  $('input[type="checkbox"]').click(function () {
    $(this).is(":checked")
      ? $("table table").not("#popup-overlay").show()
      : $("table table").not("#popup-overlay").hide();
  });

  // When a table header is clicked, show the nested table
  $("td > .fa").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("fa-angle-down");
    $(this).toggleClass("fa-angle-up");
    $(this).closest("tr").next().find("table:first").toggle();
  });

  // When a expand or collapse icon is hovered, show a popup with the nested table information
  // otherwise hide the popup
  // If the nested table is visible, popup is not shown
  $("td > .fa").hover(
    function () {
      if ($(this).hasClass("fa-angle-down")) {
        var innerTableContent = $(this)
          .closest("tr")
          .next()
          .find("td:first")
          .html();
        $(".popup-content").html("");
        $(".popup-content").append(innerTableContent);
        $(".popup-overlay").find("table:first").css("display", "block");
        $(".popup-overlay").show();
      }
    },
    function () {
      console.log("Leave");
      $(".popup-overlay").hide();
    }
  );
});
