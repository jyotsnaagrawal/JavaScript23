// Define the Product class
function Product(name, price, category, quantity) {
  this.name = name;
  this.price = price;
  this.category = category;
  this.quantity = quantity;
}

// Add a method to display product stats
Product.prototype.displayStats = function () {
  return `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}, Quantity: ${this.quantity}`;
};

// Create instances of the Product class
const product1 = new Product('Product A', 10.99, 'Electronics', 50);
const product2 = new Product('Product B', 19.99, 'Clothing', 20);
const product3 = new Product('Product C', 5.99, 'Toys', 100);
const product4 = new Product('Product D', 8.49, 'Home & Garden', 30);

// Display the product stats in the respective paragraphs
document.getElementById('product1').textContent = product1.displayStats();
document.getElementById('product2').textContent = product2.displayStats();
document.getElementById('product3').textContent = product3.displayStats();
document.getElementById('product4').textContent = product4.displayStats();
