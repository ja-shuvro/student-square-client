// Function to delete a cookie
function deleteCookie(name) {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

// Logout script
document.getElementById("logout-action").addEventListener("click", function () {
  // Delete the authentication token cookie
  deleteCookie("token");

  // Redirect to the login page
  window.location.href = "/login";
});
