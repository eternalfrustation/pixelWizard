const cards = Array.from(document.getElementsByClassName("card"));

function handleCardEnter() {
  Array.from(this.children).filter((child) =>
    child.classList.contains("card-list")
  ).map((list) => {
    list.style.visibility = "visible";
    //list.style.display = "block";
    list.style.width = "auto";
    list.style.height = "auto";
    list.style.opacity = "1";
    list.style.filter = "blur(0px)";
  });
}
function handleCardLeave() {
  Array.from(this.children).filter((child) =>
    child.classList.contains("card-list")
  ).map((list) => {
    list.style.visibility = "hidden";
 //   list.style.display = "none";
    list.style.width = 0;
    list.style.height = 0;
    list.style.opacity = 0;
    list.style.filter = "blur(50px)";
  });
}

cards.map((card, i) => {
  Array.from(card.children).filter((child) =>
    child.classList.contains("card-title")
  ).map((title) => {
    title.classList.add(
      (i % 2 == 0) ? "card-element-left" : "card-element-right",
    );
  });
  Array.from(card.children).filter((child) =>
    child.classList.contains("card-list")
  ).map((list) => {
    list.classList.add(
      (i % 2 == 1) ? "card-element-left" : "card-element-right",
    );
  });
});
cards.map((card) => {
  card.addEventListener("mouseenter", handleCardEnter);
  card.addEventListener("mouseleave", handleCardLeave);
});
["#sidebar", "#logo", ".sidebar-children", "#content", "#slideshow", ".card"].forEach((e, index) => {
	setTimeout(
	() => {document.querySelectorAll(e).forEach((i) => {
		i.style.opacity = "1";
		i.style.filter = "blur(0px)";
		i.style.transform = "translateY(0rem)";
	})}, index*400);	
});
