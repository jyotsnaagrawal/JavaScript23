const food1 = {
name: "Creme-Brulee",
category: "Dessert",
image: "images/burpee.jpeg",
ingredients: "1 quart heavy cream,1 vanilla bean, split and scraped, " +
"1 cup vanilla sugar, divided, 6 large egg yolks, 2 quarts hot water",
directions: 'Preheat the oven to 325 degrees\n' +
'Place the cream, vanilla bean and its pulp into a medium saucepan' +
'set over medium-high heat and bring to a boil. Remove from the heat' +
'cover, and allow to sit for 15 minutes. \nIn a medium bowl In a medium bowl,' +
'whisk together 1/2 cup sugar and the egg yolks until well blended and it just' +
'starts to lighten in color. Add the cream a little at a time, stirring continually.' +
'Pour the liquid into 6 (7 to 8-ounce) ramekins. Place the ramekins into a large' +
'cake pan or roasting pan. Pour enough hot water into the pan to come halfway up' +
'the sides of the ramekins. Bake just until the creme brulee is set, but still' +
'trembling in the center, approximately 40 to 45 minutes.',
source: "https://www.foodnetwork.com/recipes/alton-brown/creme-brulee-recipe-1916827"
};
function display() {
let html = `<h2>${food1.name}</h2>` +
`<h3>${food1.category}</h3>` + `<img src = ${food1.image}>` +
`<h3>Ingredients</h3>` +
`<p>${food1.ingredients}<p>` + `<h3>Directions</h3>` +
`<p>${food1.directions}</p>` + `<h3>Source</h3>` +
`<p>${food1.source}</p>`;
document.getElementById('ob1').innerHTML = html;
}

