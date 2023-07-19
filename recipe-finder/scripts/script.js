// Function to fetch recipe data from the API
async function fetchRecipes(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Function to display search results
function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = 'No recipes found.';
    return;
  }

  const ul = document.createElement('ul');

  results.forEach((recipe) => {
    const li = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = recipe.title;
    li.appendChild(title);
    ul.appendChild(li);
  });

  resultsContainer.appendChild(ul);
}

// Event listener for searching by ingredients
const searchIngredientsButton = document.getElementById('searchIngredients');
searchIngredientsButton.addEventListener('click', () => {
  const ingredients = document.getElementById('ingredients').value;
  const url = `https://docs.suggestic.com/graphql/?ingredients=${ingredients}`; // Replace API_URL with the actual API endpoint URL

  fetchRecipes(url)
    .then((results) => displayResults(results))
    .catch((error) => console.log('Error:', error));
});

// Event listener for searching by dietary preferences
const searchDietButton = document.getElementById('searchDiet');
searchDietButton.addEventListener('click', () => {
  const diet = document.getElementById('diet').value;
  const url = `https://docs.suggestic.com/graphql/?diet=${diet}`; // Replace API_URL with the actual API endpoint URL

  fetchRecipes(url)
    .then((results) => displayResults(results))
    .catch((error) => console.log('Error:', error));
});
