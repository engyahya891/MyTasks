const products = [
    { name: "iPhone 14", brand: "Apple", category: "Mobile", price: 37000, instock: true, rating: 4.8 },
    { name: "Galaxy S24", brand: "Samsung", category: "Mobile", price: 33000, instock: false, rating: 4.6 },
    { name: "MacBook Air", brand: "Apple", category: "Laptop", price: 52000, instock: true, rating: 4.9 },
    { name: "HP Pavilion", brand: "HP", category: "Laptop", price: 27000, instock: true, rating: 4.3 },
    { name: "Dell XPS", brand: "Dell", category: "Laptop", price: 45000, instock: false, rating: 4.5 },
    { name: "AirPods Pro", brand: "Apple", category: "Accessories", price: 8000, instock: true, rating: 4.7 },
    { name: "Galaxy Buds", brand: "Samsung", category: "Accessories", price: 6000, instock: true, rating: 4.4 },
    { name: "Apple Watch", brand: "Apple", category: "Smart Watch", price: 18000, instock: false, rating: 4.8 },
    { name: "Fitbit Charge 6", brand: "Fitbit", category: "Smart Watch", price: 9000, instock: true, rating: 4.2 }
];



let laptopCategory = products.filter(product => product.category === "Laptop" && product.rating >= 4.5);
let appleBrand = products.filter(product => product.brand === "Apple" && product.instock === true);
let priceAndstock = products.filter(product => product.price < 10000 && product.instock === true);


const totalPrice = products.reduce((acc, product) => product.instock ? acc + product.price : acc, 0);


const highestRProduct = products.reduce((highest, product) => {
    return product.rating > highest.rating ? product : highest;
});






const availableNames = products
    .filter(product => product.instock === true)
    .map(product => product.name);

console.log("اسماء المنتجات المتوفرة : ");    
console.log(availableNames);






function print(title, stateName) {
    console.log(title);
    stateName.forEach(element => {
        console.log(`✅ ${element.name} - ${element.price} - ${element.brand} - ${element.rating} ⭐`)
    });
}



print("اللابتوبات ذات التقيم العالي  : ", laptopCategory);
print("منتجات apple المتوفرة  : ", appleBrand);
print("المنتجات المتوفرة وسعرها اقل من 10000 : ", priceAndstock);


console.log("اجماالي اسعار المنتجات المتوفرة : ", totalPrice);
console.log("اعلى منتج ك تقييم : ", highestRProduct);
