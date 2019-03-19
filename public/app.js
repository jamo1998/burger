$(function() {
    $(".change-food").on("click", function(event) {
      var id = $(this).data("id");
      var newFood = $(this).data("newfood");
  
      var newFoodState = {
        devoured: newFood
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newFoodState
      }).then(
        function() {
          console.log("changed sleep to", newFood);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});