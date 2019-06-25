var cards = document.getElementsByTagName("article");
function clickedCard(cardID) {
	var editingArticle = cards[cardID];
	if (editingArticle.className === "regular"){
		editingArticle.className = "invis";
	}else{
		editingArticle.className = "regular";
	}
}

for(var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", clickedCard.bind(null, i));
	cards[i].className = "invis";
}