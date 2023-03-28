console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    const newStar = document.createElement("img");
    newStar.src = "assets/star-empty.svg";
    newStar.setAttribute("src", "assets/star-empty.svg");
    starContainer.appendChild(newStar);
  }

  //--^-- your code here --^--
}

renderStars();
