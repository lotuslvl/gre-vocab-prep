
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function () {
  $('#signupbtn').click(function () {
    var username = $('#username').val();
    var password = $('#psw').val();
    var name = $('#fullname').val();
    var email = $('#email').val();

    $.post("/api/newplayer", {
      username: username,
      password: password,
      name: name,
      email: email,
      gre_test_date: ''
    })
      .done(function (data) {
        window.location.href = "/mydashboard";
      });
  });
})


// <script>
// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// </script>