function redirectToFilter(Catagory) {
  localStorage.setItem("filterCategory", Catagory); // Store "women" category in localStorage
  window.location.href = "filter.html"; // Redirect to filter page
}
