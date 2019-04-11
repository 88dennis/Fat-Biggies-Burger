//PUBLIC FOLDER
// $(document).ready(function(){    
//   alert('page loaded');  // alert to confirm the page is loaded 
//   event.preventDefault();   
//   $('.container1').hide(); //enter the class or id of the particular html element which you wish to hide. 
  
//   $(".create-form").click(function(){
//     $(".container1").show(1000);
  
//   });

// });
// Make sure we wait to attach our handlers until the DOM is fully loaded.



$(function() {



    $(".change-burger").on("click", function(event) {

      // $(".purchased").hide(1000);

      

  //     var x = document.getElementsById("purchasedId");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }

      var id = $(this).data("id");
      var imFull = $(this).data("eatthis");
  
      var hungryState = {
        eaten: imFull

      };  
  
    //   Send the PUT request.

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: hungryState
      }).then(
        function() {
          console.log("changed eatthis", imFull);
          // Reload the page to get the updated list
          location.reload();
          
        }
      );
    
    });


  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burgername: $("#bur").val().trim(),
        // eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
          
        }
      );
      
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  

  