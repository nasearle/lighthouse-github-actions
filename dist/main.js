const getRandomCocktail = async () => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  return await response.json();
};

window.onload = async () => {
  // document.getElementById("content").innerHTML = `
  //   <h1 id="name" class="skeleton skeleton-text"></h1>
  //   <img id="image" class="skeleton" src="placholder" width="700" height="700" alt="Cocktail" />
  //   <h3 id="instructions-title" class="skeleton skeleton-text"></h3>
  //   <p id="instructions" class="skeleton skeleton-text"></p>
  // `;

  // get random cocktail
  const cocktailList = await getRandomCocktail();
  const cocktail = cocktailList.drinks[0];

  const name = document.getElementById("name");
  name.innerText = cocktail.strDrink;
  name.classList.remove("skeleton", "skeleton-h1");

  const image = document.getElementById("image");
  image.src = cocktail.strDrinkThumb;
  image.classList.remove("skeleton");

  const instructionsTitle = document.getElementById("instructions-title");
  instructionsTitle.innerText = "Instructions";
  instructionsTitle.classList.remove("skeleton", "skeleton-h3");

  const instructions = document.getElementById("instructions");
  instructions.innerText = cocktail.strInstructions.replace(
    /(\r\n|\n|\r)/gm,
    " "
  );
  instructions.classList.remove("skeleton", "skeleton-text");
};
