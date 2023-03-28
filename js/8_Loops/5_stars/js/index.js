console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const newStar = document.createElement("img");
    newStar.setAttribute("data-js", "starry_night");
    if (i <= filledStars) {
      newStar.src = "assets/star-filled.svg";
    } else {
      newStar.src = "assets/star-empty.svg";
    }
    newStar.addEventListener("click", ()=>{
      renderStars(i)
    })
    starContainer.appendChild(newStar);
  }

  //--^-- your code here --^--
}
renderStars();
