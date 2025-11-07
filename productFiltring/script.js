const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 25000,
        instock: true,
        rating: 4.7
    },
    {
        name: "Smartphone",
        category: "Electronics",
        price: 15000,
        instock: false,
        rating: 4.2
    },
    {
        name: "Smart Watch",
        category: "Electronics",
        price: 900,
        instock: true,
        rating: 4.5
    },
    {
        name: "Headphones",
        category: "Electronics",
        price: 800,
        instock: true,
        rating: 3.9
    },
    {
        name: "T-shirt",
        category: "Clothing",
        price: 350,
        instock: true,
        rating: 4.1
    },
    {
        name: "Sneakers",
        category: "Clothing",
        price: 900,
        instock: false,
        rating: 4.6
    },
    {
        name: "Jacket",
        category: "Clothing",
        price: 1200,
        instock: true,
        rating: 4.8
    },
    {
        name: "Backpack",
        category: "Accessories",
        price: 500,
        instock: true,
        rating: 4.3
    },
    {
        name: "Sunglasses",
        category: "Accessories",
        price: 700,
        instock: false,
        rating: 3.7
    }
];



let inStock = products.filter(product => product.instock === true);
let price1000 = products.filter(product => product.price < 1000);
let rating = products.filter(product => product.rating >= 4.5);
let cat = products.filter(product => product.category === "Electronics" && product.price < 5000);


function print(title,filterName){
    console.log(title);
    filterName.forEach((element) => {
        console.log(`✅ ${element.name} - ${element.price} EGP - ⭐ ${element.rating} 
        `);
    });
}

print("المنتجات المتوفرة : ",inStock);
print("المنتجات الارخص من 1000   : ",price1000);
print("المنتجات ذات التييم العالي : ",rating);
print("المنتجات الالكترونية الأقل من 5000  : ",cat);



