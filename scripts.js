const cards = Array.from(document.getElementsByClassName("card"));

function handleCardLeave() {
	Array.from(this.children).filter((child) => child.classList.contains("card-list")).map((list) => {list.style.display="none"});
}
function handleCardEnter() {
	Array.from(this.children).filter((child) => child.classList.contains("card-list")).map((list) => {list.style.display="block"});
	
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
