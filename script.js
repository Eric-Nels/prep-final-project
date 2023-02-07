const h2 = document.createElement("h2");
h2.textContent = "A History";
document.querySelector("body").appendChild(h2);

const rav4 = document.getElementById("rav4");
rav4.addEventListener("click", function() {
   document.getElementById("rav4Paragraph").style.display = "block";
});