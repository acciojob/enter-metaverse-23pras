//your JS code here. If required.

let ptag = document.getElementById('status');
let button = document.getElementById("enterBtn");

button.addEventListener("click",()=>{
	  let h1Tag = document.createElement("h1");
      h1Tag.textContent = "Entered Metaverse";

      ptag.replaceWith(h1Tag);
})