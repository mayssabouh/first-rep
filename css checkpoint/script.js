document.getElementById("toggleButton").addEventListener("click", function(event) {
    event.preventDefault();
    toggleList();
  });
function toggleList() {
    var list = document.getElementById("myList");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }
  