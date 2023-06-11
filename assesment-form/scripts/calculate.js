function calculateOrder() {
  // Get drink inputs
  const drink1Quantity = parseInt(document.getElementById("drink1Quantity").value);
  const drink1Price = parseFloat(document.getElementById("drink1Price").value.replace('$', ''));
  const drink2Quantity = parseInt(document.getElementById("drink2Quantity").value);
  const drink2Price = parseFloat(document.getElementById("drink2Price").value.replace('$', ''));
  const drink3Quantity = parseInt(document.getElementById("drink3Quantity").value);
  const drink3Price = parseFloat(document.getElementById("drink3Price").value.replace('$', ''));
  const drink4Quantity = parseInt(document.getElementById("drink4Quantity").value);
  const drink4Price = parseFloat(document.getElementById("drink4Price").value.replace('$', ''));
  const drink5Quantity = parseInt(document.getElementById("drink5Quantity").value);
  const drink5Price = parseFloat(document.getElementById("drink5Price").value.replace('$', ''));

  // Get sandwich inputs
  const sandwich1Quantity = parseInt(document.getElementById("sandwich1Quantity").value);
  const sandwich1Price = parseFloat(document.getElementById("sandwich1Price").value.replace('$', ''));
  const sandwich2Quantity = parseInt(document.getElementById("sandwich2Quantity").value);
  const sandwich2Price = parseFloat(document.getElementById("sandwich2Price").value.replace('$', ''));
  const sandwich3Quantity = parseInt(document.getElementById("sandwich3Quantity").value);
  const sandwich3Price = parseFloat(document.getElementById("sandwich3Price").value.replace('$', ''));
  const sandwich4Quantity = parseInt(document.getElementById("sandwich4Quantity").value);
  const sandwich4Price = parseFloat(document.getElementById("sandwich4Price").value.replace('$', ''));
  const sandwich5Quantity = parseInt(document.getElementById("sandwich5Quantity").value);
  const sandwich5Price = parseFloat(document.getElementById("sandwich5Price").value.replace('$', ''));

  // Get dessert/side inputs
  const desert1Quantity = parseInt(document.getElementById("desert1Quantity").value);
  const desert1Price = parseFloat(document.getElementById("desert1Price").value.replace('$', ''));
  const desert2Quantity = parseInt(document.getElementById("desert2Quantity").value);
  const desert2Price = parseFloat(document.getElementById("desert2Price").value.replace('$', ''));
  const desert3Quantity = parseInt(document.getElementById("desert3Quantity").value);
  const desert3Price = parseFloat(document.getElementById("desert3Price").value.replace('$', ''));
  const desert4Quantity = parseInt(document.getElementById("desert4Quantity").value);
  const desert4Price = parseFloat(document.getElementById("desert4Price").value.replace('$', ''));
  const desert5Quantity = parseInt(document.getElementById("desert5Quantity").value);
  const desert5Price = parseFloat(document.getElementById("desert5Price").value.replace('$', ''));

  // Calculate totals
  const drinksCost = (drink1Quantity * drink1Price) + (drink2Quantity * drink2Price) + (drink3Quantity * drink3Price) + (drink4Quantity * drink4Price) + (drink5Quantity * drink5Price);
  const sandwichesCost = (sandwich1Quantity * sandwich1Price) + (sandwich2Quantity * sandwich2Price) + (sandwich3Quantity * sandwich3Price) + (sandwich4Quantity * sandwich4Price) + (sandwich5Quantity * sandwich5Price);
  const desertsCost = (desert1Quantity * desert1Price) + (desert2Quantity * desert2Price) + (desert3Quantity * desert3Price) + (desert4Quantity * desert4Price) + (desert5Quantity * desert5Price);
  const totalCost = drinksCost + sandwichesCost + desertsCost;

  // Display order summary
  document.getElementById("drinksSummary").textContent = `Drinks: $${drinksCost.toFixed(2)}`;
  document.getElementById("sandwichesSummary").textContent = `Sandwiches: $${sandwichesCost.toFixed(2)}`;
  document.getElementById("desertsSummary").textContent = `Deserts/Sides: $${desertsCost.toFixed(2)}`;
  document.getElementById("totalCost").textContent = totalCost.toFixed(2);
}
