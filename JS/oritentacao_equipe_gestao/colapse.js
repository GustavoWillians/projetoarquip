var coll = document.getElementsByClassName("collapsible-equipes");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-equipes");
    var content_equipes = this.nextElementSibling;
    if (content_equipes.style.maxHeight){
      content_equipes.style.maxHeight = null;
    } else {
      content_equipes.style.maxHeight = content_equipes.scrollHeight + "px";
    } 
  });
}