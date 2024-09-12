// const input = document.getElementById('search-input');
// const container = document.querySelector('.container');

// function toggleContainer() {
//     container.style.display = input.value.trim() ? 'flex' : 'none';
// }

// // Show container when input is focused or value changes
// input.addEventListener('focus', () => container.style.display = 'flex');
// input.addEventListener('input', toggleContainer);

// // Optionally hide container when input loses focus and is empty
// input.addEventListener('blur', toggleContainer);




// document.addEventListener('DOMContentLoaded', () => {
//     const data = {
//         "categories": {
//             "Bag": ["Sling Bag", "Duffel Bag", "Chalk Bag", "Day Pack"],
//             "Jacket": ["Rain Jacket", "Winter Jacket", "Leather Jacket", "Bomber Jacket"],
//             "Shoes": ["Running Shoes", "Hiking Boots", "Sneakers", "Sandals"]
//         },
//         "products": [
//             // Bag Products
//             { "name": "Patagonia Kids' Refugito Day Pack - 18L", "category": "Day Pack", "type": "Bag", "image": "./img/bag/Patagonia Kids' Refugito Day Pack - 18L.png", "price": "$79.00" },
//             { "name": "Patagonia Atom Tote Pack - 20L", "category": "Sling Bag", "type": "Bag", "image": "./img/bag/Patagonia Atom Tote Pack - 20L.png", "price": "$89.00" },
//             { "name": "The North Face Women's Surge Backpack", "category": "Day Pack", "type": "Bag", "image": "./img/bag/The North Face Women's Surge Backpack.png", "price": "$139.00" },
//             { "name": "Osprey Transporter Duffel Bag", "category": "Duffel Bag", "type": "Bag", "image": "path/to/image4.jpg", "price": "$99.00" },
//             { "name": "Black Diamond Chalk Bag", "category": "Chalk Bag", "type": "Bag", "image": "path/to/image5.jpg", "price": "$20.00" },
//             { "name": "Herschel Supply Co. Day Pack", "category": "Day Pack", "type": "Bag", "image": "path/to/image6.jpg", "price": "$60.00" },

//             // Jacket Products
//             { "name": "Men's Waterproof Rain Jacket", "category": "Rain Jacket", "type": "Jacket", "image": "path/to/image7.jpg", "price": "$199.00" },
//             { "name": "Women's Winter Parka", "category": "Winter Jacket", "type": "Jacket", "image": "path/to/image8.jpg", "price": "$250.00" },
//             { "name": "Classic Leather Jacket", "category": "Leather Jacket", "type": "Jacket", "image": "path/to/image9.jpg", "price": "$299.00" },
//             { "name": "Urban Bomber Jacket", "category": "Bomber Jacket", "type": "Jacket", "image": "path/to/image10.jpg", "price": "$150.00" },
//             { "name": "High-Performance Rain Jacket", "category": "Rain Jacket", "type": "Jacket", "image": "path/to/image11.jpg", "price": "$180.00" },
//             { "name": "Heavy-Duty Winter Jacket", "category": "Winter Jacket", "type": "Jacket", "image": "path/to/image12.jpg", "price": "$300.00" },

//             // Shoes Products
//             { "name": "Men's Running Shoes", "category": "Running Shoes", "type": "Shoes", "image": "path/to/image13.jpg", "price": "$120.00" },
//             { "name": "Women's Trail Hiking Boots", "category": "Hiking Boots", "type": "Shoes", "image": "path/to/image14.jpg", "price": "$140.00" },
//             { "name": "Unisex Classic Sneakers", "category": "Sneakers", "type": "Shoes", "image": "path/to/image15.jpg", "price": "$90.00" },
//             { "name": "Summer Beach Sandals", "category": "Sandals", "type": "Shoes", "image": "path/to/image16.jpg", "price": "$40.00" },
//             { "name": "Premium Running Shoes", "category": "Running Shoes", "type": "Shoes", "image": "path/to/image17.jpg", "price": "$150.00" },
//             { "name": "Waterproof Hiking Boots", "category": "Hiking Boots", "type": "Shoes", "image": "path/to/image18.jpg", "price": "$160.00" }
//         ]
//     };

//     const categoryList = document.getElementById('category-list');
//     const productList = document.getElementById('product-list');
//     const searchInput = document.getElementById('search-input');

//     function displayCategories(searchTerm) {
//         const type = Object.keys(data.categories).find(type => type.toLowerCase().includes(searchTerm.toLowerCase()));
//         const categories = type ? data.categories[type] : [];

//         categoryList.innerHTML = '';
//         categories.forEach(category => {
//             const li = document.createElement('li');
//             li.textContent = category;
//             li.addEventListener('click', () => filterProductsByCategory(category));
//             categoryList.appendChild(li);
//         });
//     }

//     function filterProductsByCategory(category) {
//         const filteredProducts = data.products.filter(product => product.category === category);
//         displayProducts(filteredProducts);
//     }

//     function displayProducts(products) {
//         productList.innerHTML = '';
//         products.forEach(product => {
//             productList.innerHTML += `
//                 <div class="product-item">
//                     <img src="${product.image}" alt="${product.name}">
//                     <h3>${product.name}</h3>
//                     <p>${product.price}</p>
//                 </div>
//             `;
//         });
//     }

//     searchInput.addEventListener('input', () => {
//         const searchTerm = searchInput.value.trim();
//         if (searchTerm) {
//             displayCategories(searchTerm);
//             displayProducts(data.products.filter(product => product.type.toLowerCase() === searchTerm.toLowerCase()));
//         } else {
//             categoryList.innerHTML = '';
//             productList.innerHTML = '';
//         }
//     });
// });









































// // document.addEventListener('DOMContentLoaded', function () {
// //     const data = {
// //         "categories": {
// //             "Bag": [
// //                 "Sling Bag",
// //                 "Duffel Bag",
// //                 "Chalk Bag",
// //                 "Day Pack"
// //             ],
// //             "Jacket": [
// //                 "Rain Jacket",
// //                 "Winter Jacket",
// //                 "Leather Jacket",
// //                 "Bomber Jacket"
// //             ],
// //             "Shoes": [
// //                 "Running Shoes",
// //                 "Hiking Boots",
// //                 "Sneakers",
// //                 "Sandals"
// //             ]
// //         },
// //         "products": [
// //             // Bag Products
// //             {
// //                 "name": "Patagonia Kids' Refugito Day Pack - 18L",
// //                 "category": "Day Pack",
// //                 "type": "Bag",
// //                 "image": "path/to/image1.jpg",
// //                 "price": "$79.00"
// //             },
// //             {
// //                 "name": "Patagonia Atom Tote Pack - 20L",
// //                 "category": "Sling Bag",
// //                 "type": "Bag",
// //                 "image": "path/to/image2.jpg",
// //                 "price": "$89.00"
// //             },
// //             {
// //                 "name": "The North Face Women's Surge Backpack",
// //                 "category": "Day Pack",
// //                 "type": "Bag",
// //                 "image": "path/to/image3.jpg",
// //                 "price": "$139.00"
// //             },
// //             {
// //                 "name": "Osprey Transporter Duffel Bag",
// //                 "category": "Duffel Bag",
// //                 "type": "Bag",
// //                 "image": "path/to/image4.jpg",
// //                 "price": "$99.00"
// //             },
// //             {
// //                 "name": "Black Diamond Chalk Bag",
// //                 "category": "Chalk Bag",
// //                 "type": "Bag",
// //                 "image": "path/to/image5.jpg",
// //                 "price": "$20.00"
// //             },
// //             {
// //                 "name": "Herschel Supply Co. Day Pack",
// //                 "category": "Day Pack",
// //                 "type": "Bag",
// //                 "image": "path/to/image6.jpg",
// //                 "price": "$60.00"
// //             },

// //             // Jacket Products
// //             {
// //                 "name": "Men's Waterproof Rain Jacket",
// //                 "category": "Rain Jacket",
// //                 "type": "Jacket",
// //                 "image": "path/to/image7.jpg",
// //                 "price": "$199.00"
// //             },
// //             {
// //                 "name": "Women's Winter Parka",
// //                 "category": "Winter Jacket",
// //                 "type": "Jacket",
// //                 "image": "path/to/image8.jpg",
// //                 "price": "$250.00"
// //             },
// //             {
// //                 "name": "Classic Leather Jacket",
// //                 "category": "Leather Jacket",
// //                 "type": "Jacket",
// //                 "image": "path/to/image9.jpg",
// //                 "price": "$299.00"
// //             },
// //             {
// //                 "name": "Urban Bomber Jacket",
// //                 "category": "Bomber Jacket",
// //                 "type": "Jacket",
// //                 "image": "path/to/image10.jpg",
// //                 "price": "$150.00"
// //             },
// //             {
// //                 "name": "High-Performance Rain Jacket",
// //                 "category": "Rain Jacket",
// //                 "type": "Jacket",
// //                 "image": "path/to/image11.jpg",
// //                 "price": "$180.00"
// //             },
// //             {
// //                 "name": "Heavy-Duty Winter Jacket",
// //                 "category": "Winter Jacket",
// //                 "type": "Jacket",
// //                 "image": "path/to/image12.jpg",
// //                 "price": "$300.00"
// //             },

// //             // Shoes Products
// //             {
// //                 "name": "Men's Running Shoes",
// //                 "category": "Running Shoes",
// //                 "type": "Shoes",
// //                 "image": "path/to/image13.jpg",
// //                 "price": "$120.00"
// //             },
// //             {
// //                 "name": "Women's Trail Hiking Boots",
// //                 "category": "Hiking Boots",
// //                 "type": "Shoes",
// //                 "image": "path/to/image14.jpg",
// //                 "price": "$140.00"
// //             },
// //             {
// //                 "name": "Unisex Classic Sneakers",
// //                 "category": "Sneakers",
// //                 "type": "Shoes",
// //                 "image": "path/to/image15.jpg",
// //                 "price": "$90.00"
// //             },
// //             {
// //                 "name": "Summer Beach Sandals",
// //                 "category": "Sandals",
// //                 "type": "Shoes",
// //                 "image": "path/to/image16.jpg",
// //                 "price": "$40.00"
// //             },
// //             {
// //                 "name": "Premium Running Shoes",
// //                 "category": "Running Shoes",
// //                 "type": "Shoes",
// //                 "image": "path/to/image17.jpg",
// //                 "price": "$150.00"
// //             },
// //             {
// //                 "name": "Waterproof Hiking Boots",
// //                 "category": "Hiking Boots",
// //                 "type": "Shoes",
// //                 "image": "path/to/image18.jpg",
// //                 "price": "$160.00"
// //             }
// //         ]
// //     };

// //     const categoryList = document.getElementById('category-list');
// //     const productList = document.getElementById('product-list');
// //     const searchInput = document.getElementById('search-input');

// //     // Function to display categories and products based on search
// //     function displayCategoriesAndProducts(searchTerm) {
// //         const lowerCaseSearchTerm = searchTerm.toLowerCase();
// //         let relevantCategories = [];
// //         let relevantProducts = [];

// //         for (const [type, categories] of Object.entries(data.categories)) {
// //             if (type.toLowerCase().includes(lowerCaseSearchTerm)) {
// //                 relevantCategories = categories;
// //                 relevantProducts = data.products.filter(product => product.type.toLowerCase() === lowerCaseSearchTerm);
// //                 break;
// //             }
// //         }

// //         // Show categories only if relevant
// //         categoryList.innerHTML = '';
// //         if (relevantCategories.length > 0) {
// //             relevantCategories.forEach(category => {
// //                 const li = document.createElement('li');
// //                 li.textContent = category;
// //                 li.addEventListener('click', () => filterProductsByCategory(category));
// //                 categoryList.appendChild(li);
// //             });
// //         }

// //         // Show relevant products
// //         displayProducts(relevantProducts);
// //     }

// //     // Function to display products by category
// //     function filterProductsByCategory(category) {
// //         const filteredProducts = data.products.filter(product => product.category === category);
// //         displayProducts(filteredProducts);
// //     }

// //     // Function to display products
// //     function displayProducts(products) {
// //         productList.innerHTML = '';
// //         products.forEach(product => {
// //             const div = document.createElement('div');
// //             div.className = 'product-item';
// //             div.innerHTML = `
// //                 <img src="${product.image}" alt="${product.name}">
// //                 <h3>${product.name}</h3>
// //                 <p>${product.price}</p>
// //             `;
// //             productList.appendChild(div);
// //         });
// //     }

// //     // Filter products by search input
// //     searchInput.addEventListener('input', () => {
// //         const searchTerm = searchInput.value;
// //         if (searchTerm === '') {
// //             categoryList.innerHTML = ''; // Clear categories when input is empty
// //             productList.innerHTML = ''; // Clear products when input is empty
// //         } else {
// //             displayCategoriesAndProducts(searchTerm);
// //         }
// //     });

// //     // Initially, do not show any categories or products
// //     categoryList.innerHTML = '';
// //     productList.innerHTML = '';
// // });
