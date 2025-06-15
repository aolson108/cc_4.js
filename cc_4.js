//Array of objects, 5 products
let products=[
    {name: "Chicken", category: "groceries", price: 11.99, inventory: 26},
    {name: "Plunger", category: "household", price: 17.99, inventory: 52},
    {name: "Phone", category: "electronics", price: 1099.99, inventory: 44},  
    {name: "Tanktop", category: "apparel", price: 14.99, inventory: 95},
    {name: "Bodywash", category: "hygiene", price: 7.99, inventory: 63},
];
//Loop using switch to apply discount for category
for (let product of products) {
   let discount = 0;
   switch(product.category) {
    case "electronics": discount = 0.2; break;
    case "apparel": discount = 0.15; break;
    case "groceries": 
    case "household": discount = 0.1; break;
    default: discount= 0;
   }
   product.discountedPrice= product.price * (1 - discount);
}
//Apply additional discount for customerTypes( more in step 5/next section )
let customerTypes = ["student", "senior", "regular"];
//Checkout process for 3 customers 
for (let i = 1; i <=3; i++) {
    let customerType = customerTypes[Math.floor(Math.random() * customerTypes.length)];
    console.log(`\nCustomer ${i} - Type: ${customerType}`);
        let total = 0;
   
    for (let product of products) {
        if (product.inventory > 0) {
            total = total + product.discountedPrice;
            product.inventory--;
        } else { console.log(`${product.name} is out of stock.`); }
        }

    let extraDiscount = 0;
    if (customerType === "student") { extraDiscount = 0.05; }
    else if (customerType === "senior") { extraDiscount = 0.07; }
let finalTotal = total * (1 - extraDiscount);
    console.log(`Total cost after extra discount ${i}: $${finalTotal.toFixed(2)}`);
}
//Log each key and value for single product after discount
console.log("\nSingle Product Info (with discount):"); 
let sampleProduct = products[0];
for (let key in sampleProduct) { 
    console.log(`${key}: ${sampleProduct[key]}`); }
//Log all product info after inventory update
console.log("\nAll Products After Updating Inventory:");
for (let product of products) {
    let entries = Object.entries(product);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
    console.log("----------");
}


