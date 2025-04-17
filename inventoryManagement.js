// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"]
function logFirstProduct() {
  console.log(products[0])
}
function addProduct() {
  products.push("Tablet")
}

function updateProductName() {
  products[1] = "Smartphone"
}

function removeLastProduct() {
  products.pop()
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
