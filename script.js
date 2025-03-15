let pTag = document.getElementById("status");
let button = document.getElementById("enterBtn");

button.addEventListener("click", () => {
  // Instead of replacing, we change the inner HTML
  pTag.innerHTML = "<h1>Entered Metaverse</h1>";
});
