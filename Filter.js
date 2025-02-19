
const products = [
    {
        id: 1,
        name: "Men Shirt",
        image: "/img/Men-catagories/shirt_4.webp",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "men",
        subcategory: "Shirts",
        brands: "Friskers",
        color:"Grey"
    },
    {
        id: 2,
        name: "Men Shirt",
        image: "/img/Men-catagories/shirt_2.webp",
        price: "$59.99",
        discountPrice: "$44.99",
        category: "men",
        subcategory: "Shirts",
        brands: "Friskers",
        color:"Black"
    },
    {
        id: 3,
        name: "Men Shirt",
        image: "/img/Men-catagories/shirt_3.webp",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Shirts",
        brands: "WOOSTRO",
        color:"Maroon"
    },
    {
        id: 4,
        name: "Men Shirt",
        image: "/img/Men-catagories/men_2.webp",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Shirts",
        brands: "WOOSTRO",
        color:""
    },
    {
        id: 5,
        name: "Men T-Shirt",
        image: "/img/Men-catagories/t-shirt.webp",
        price: "$99.99",
        discountPrice: "$74.99",
        category: "men",
        subcategory: "Tshirts",
        brands: "DISPENSER",
        color:"White"
    },
    {
        id: 6,
        name: "Men T-Shirt",
        image: "/img/Men-catagories/t-shirt2.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Tshirts",
        brands: "FBAR",
        color:"Maroon"
    },
    {
        id: 7,
        name: "Men T-Shirt",
        image: "/img/Men-catagories/t-shirt3.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Tshirts",
        brands: "DISPENSER",
        color:""
    },
    {
        id: 8,
        name: "Men T-Shirt",
        image: "/img/Men-catagories/t-shirt4.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Tshirts",
        brands: "DISPENSER",
        color:"Blue"
    },
    {
        id: 9,
        name: "Men Jeans",
        image: "/img/Men-catagories/jeans.webp",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "men",
        subcategory: "Jeans",
        brands: "DISPENSER",
        color:"Navy Blue"
    },
    {
        id: 10,
        name: "Men Jeans",
        image: "/img/Men-catagories/jeans2.webp",
        price: "$59.99",
        discountPrice: "$44.99",
        category: "men",
        subcategory: "Jeans",
        brands: "FBAR",
        color:"Grey"
    },
    {
        id: 11,
        name: "Men Jeans",
        image: "/img/Men-catagories/jeans3.webp",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Jeans",
        brands: "FBAR",
        color:"Black"
    },
    {
        id: 12,
        name: "Men Jeans",
        image: "/img/Men-catagories/jeans4.webp",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Jeans",
        brands: "FBAR",
        color:"Grey"
    },
    {
        id: 13,
        name: "Men Casual Shoes",
        image: "/img/Men-catagories/casual-shoes.webp",
        price: "$99.99",
        discountPrice: "$74.99",
        category: "men",
        subcategory: "Casual Shoes",
        brands: "Pepe jeans",
        color:"White"
    },
    {
        id: 14,
        name: "Men Casual Shoes",
        image: "/img/Men-catagories/casual4-shoes.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Casual Shoes",
        brands: "Pepe jeans",
        color:""
    },
    {
        id: 15,
        name: "Men Casual Shoes",
        image: "/img/Men-catagories/casual2-shoes.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Casual Shoes",
        brands: "Pepe jeans",
        color:"Maroon"
    },
    {
        id: 16,
        name: "Men Casual Shoes",
        image: "/img/Men-catagories/casual3-shoes.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Casual Shoes",
        brands: "Pepe jeans",
        color:""
    },
    {
        id: 21,
        name: "Men Sweatshirts",
        image: "/img/Men-catagories/sweatshirt.webp",
        price: "$99.99",
        discountPrice: "$74.99",
        category: "men",
        subcategory: "Sweatshirts",
        brands: " Masch Sports",
        color:"Black"
    },
    {
        id: 22,
        name: "Men Sweatshirts",
        image: "/img/Men-catagories/sweatshirt2.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Sweatshirts",
        brands: "Masch Sports",
        color:"Brown"
    },
    {
        id: 23,
        name: "Men Sweatshirts",
        image: "/img/Men-catagories/sweatshirt3.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Sweatshirts",
        brands: "Masch Sports",
        color:"Black"
    },
    {
        id: 24,
        name: "Men Sweatshirts",
        image: "/img/Men-catagories/sweatshirt4.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Sweatshirts",
        brands: "Masch Sports",
        color:"Blue"
    },
    {
        id: 25,
        name: "Men Jackets",
        image: "/img/Men-catagories/jackets.webp",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "men",
        subcategory: "Jackets",
        brands: "WOOSTRO",
        color:""
    },
    {
        id: 26,
        name: "Men Jackets",
        image: "/img/Men-catagories/jackets2.webp",
        price: "$59.99",
        discountPrice: "$44.99",
        category: "men",
        subcategory: "Jackets",
        brands: "FBAR",
        color:"Brown"
    },
    {
        id: 27,
        name: "Men Jackets",
        image: "/img/Men-catagories/jackets3.webp",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Jackets",
        brands: "DISPENSER",
        color:""
    },
    {
        id: 28,
        name: "Men Jackets",
        image: "/img/Men-catagories/jackets4.webp",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Jackets",
        brands: "Pepe jeans",
        color:""
    },
    {
        id: 29,
        name: "Men Shorts",
        image: "/img/Men-catagories/short4.webp",
        price: "$99.99",
        discountPrice: "$74.99",
        category: "men",
        subcategory: "Shorts",
        brands: "Masch Sports",
        color:"Brown"
    },
    {
        id: 30,
        name: "Men Shorts",
        image: "/img/Men-catagories/short3.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Shorts",
        brands: "Friskers",
        color:"Red"
    },
    {
        id: 31,
        name: "Men Shorts",
        image: "/img/Men-catagories/short2.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Shorts",
        brands: "WOOSTRO",
        color:"White"
    },
    {
        id: 32,
        name: "Men Shorts",
        image: "/img/Men-catagories/short.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Shorts",
        brands: "FBAR",
        color:"Black"
    },
    {
        id: 33,
        name: "Men Shirt",
        image: "/img/women-catagories/sareas.webp",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "women",
        subcategory: "Shirts",
        brands: "Pepe jeans",
        color:""
    },
    {
        id: 34,
        name: "Men Shirt",
        image: "/img/women-catagories/sareas2.webp",
        price: "$59.99",
        discountPrice: "$44.99",
        category: "women",
        subcategory: "Shirts",
        brands: "Masch Sports",
        color:""
    },
    {
        id: 35,
        name: "Men Shirt",
        image: "/img/women-catagories/sareas3.webp",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Shirts",
        brands: "Friskers",
        color:""
    },
    {
        id: 36,
        name: "Women Shirt",
        image: "/img/women-catagories/sareas4.webp",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Shirts",
        brands: "WOOSTRO",
        color:""
    },
    {
        id: 37,
        name: "Women T-Shirt",
        image: "/img/women-catagories/w-Tshirt.webp",
        price: "$99.99",
        discountPrice: "$74.99",
        category: "women",
        subcategory: "Tshirts",
        brands: "FBAR",
        color:"Black"
    },
    {
        id: 38,
        name: "Women T-Shirt",
        image: "/img/women-catagories/w-Tshirt2.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Tshirts",
        brands: "DISPENSER",
        color:"Black"
    },
    {
        id: 39,
        name: "Women T-Shirt",
        image: "/img/women-catagories/w-Tshirt3.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Tshirts",
        brands: "Pepe jeans",
        color:"Navy Blue"
    },
    {
        id: 40,
        name: "Women T-Shirt",
        image: "/img/women-catagories/w-Tshirt4.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Tshirts",
        brands: "Masch Sports",
        color:"White"
    },
    {
        id: 41,
        name: "Sweat Shirt",
        image: "/img/women-catagories/w-sweater.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Sweatshirts",
        brands: "WOOSTRO",
        color:"Black"
    },
    {
        id: 42,
        name: "Women SweatShirt",
        image: "/img/women-catagories/w-sweater2.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Sweatshirts",
        brands: "FBAR",
        color:"White"
    },
    {
        id: 33,
        name: "Women SweatShirt",
        image: "/img/women-catagories/w-sweater3.webp",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "women",
        subcategory: "Sweatshirts",
        brands: "Pepe jeans",
        color:""
    },
    {
        id: 34,
        name:"Women SweatShirt",
        image: "/img/women-catagories/w-sweater4.webp",
        price: "$59.99",
        discountPrice: "$44.99",
        category: "women",
        subcategory: "Sweatshirts",
        brands: "Masch Sports",
        color:"White"
    },
    {
        id: 35,
        name: "Women Trouser",
        image: "/img/women-catagories/w-Trouser.webp",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Trousers",
        brands: "Friskers",
        color:"Black"
    },
    {
        id: 36,
        name: "Women Trouser",
        image: "/img/women-catagories/w-Trouser2.webp",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Trousers",
        brands: "WOOSTRO",
        color:"White"
    },
    {
        id: 37,
        name: "Women Trouser",
        image: "/img/women-catagories/w-Trouser3.webp",
        price: "$99.99",
        discountPrice: "$74.99",
        category: "women",
        subcategory: "Trousers",
        brands: "FBAR",
        color:"Black"
    },
    {
        id: 38,
        name: "Women Trouser",
        image: "/img/women-catagories/w-Trouser4.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Trousers",
        brands: "DISPENSER",
        color:"Black"
    },
    {
        id: 39,
        name: "Women Jacket",
        image: "/img/women-catagories/w-Jacket.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Pepe jeans",
        color:"Red"
    },
    {
        id: 40,
        name: "Women Jacket",
        image: "/img/women-catagories/w-Jacket2.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Masch Sports",
        color:"White"
    },
    {
        id: 41,
        name: "Women Jacket",
        image: "/img/women-catagories/w-Jacket3.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Pepe jeans",
        color:"White"
    },
    {
        id: 42,
        name: "Women Jacket",
        image: "/img/women-catagories/w-Jacket4.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Masch Sports",
        color:"Blue"
    },
    {
        id: 43,
        name: "Women Jeans",
        image: "/img/women-catagories/w-Jeans.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jeans",
        brands: "Pepe jeans",
        color:"Grey"
    },
    {
        id: 42,
        name: "Women Shoes",
        image: "/img/women-catagories/w-Shoes.webp",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Casual Shoes",
        brands: "Masch Sports",
        color:"White"
    }
];

const productGrid = document.getElementById("product-grid");
const wishlistDiv = document.getElementById("wishlist"); 
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []; // Store wishlist items in localStorage

function displayProducts() {
productGrid.innerHTML = "";

const showMen = document.getElementById("men-checkbox").checked;

const showWomen = document.getElementById("women-checkbox").checked;
const selectedSubcategories = [];
const selectedBrands = [];
const selectedColor = [];

// Collect selected subcategories
if (document.getElementById("tshirts").checked) selectedSubcategories.push("Tshirts");
if (document.getElementById("shirts").checked) selectedSubcategories.push("Shirts");
if (document.getElementById("jeans").checked) selectedSubcategories.push("Jeans");
if (document.getElementById("casual-shoes").checked) selectedSubcategories.push("Casual Shoes");
if (document.getElementById("trouser").checked) selectedSubcategories.push("Trousers");
if (document.getElementById("jacket").checked) selectedSubcategories.push("Jackets");
if (document.getElementById("shorts").checked) selectedSubcategories.push("Shorts");
if (document.getElementById("sweater").checked) selectedSubcategories.push("Sweatshirts");

// Collect selected brands
if (document.getElementById("friskers").checked) selectedBrands.push("Friskers");
if (document.getElementById("woostro").checked) selectedBrands.push("WOOSTRO");
if (document.getElementById("fear").checked) selectedBrands.push("FBAR");
if (document.getElementById("dispenser").checked) selectedBrands.push("DISPENSER");
if (document.getElementById("pepe-jeans").checked) selectedBrands.push("Pepe jeans");
if (document.getElementById("masch-sports").checked) selectedBrands.push("Masch Sports");

// Collect selected colors
const colors = [
{ id: "black", name: "Black" },
{ id: "white", name: "White" },
{ id: "blue", name: "Blue" },
{ id: "navy", name: "Navy Blue" },
{ id: "red", name: "Red" },
{ id: "grey", name: "Grey" },
{ id: "maroon", name: "Maroon" },
{ id: "brown", name: "Brown" }
];

colors.forEach(color => {
const checkbox = document.getElementById(color.id);
if (checkbox?.checked) selectedColor.push(color.name);
});

// Filter products
let filteredProducts = products.filter(product => {
let categoryMatch = false;
let subcategoryMatch = selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subcategory);
let brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brands.trim());
let colorMatch = selectedColor.length === 0 || selectedColor.includes(product.color.trim());

if (showMen && showWomen) {
    categoryMatch = product.category === "men" || product.category === "women";
} else if (showMen) {
    categoryMatch = product.category === "men";
} else if (showWomen) {
    categoryMatch = product.category === "women";
} else {
    categoryMatch = true;
}

return categoryMatch && subcategoryMatch && brandMatch && colorMatch;
});

// show the counting of the catagories
const categoryHeading = document.getElementById("category-heading");

if (showMen && !showWomen) {
categoryHeading.textContent = ` Men - ${filteredProducts.length} items`;
} else if (showWomen && !showMen) {
categoryHeading.textContent = ` Women - ${filteredProducts.length} items`;
} else if (showMen && showWomen) {
categoryHeading.textContent = ` Men & Women - ${filteredProducts.length} items`;
} else {
categoryHeading.textContent = `All Catagories - ${filteredProducts.length} items`;
}


// Sorting logic
const sortOption = document.getElementById("sort").value;
if (sortOption === "low-high") {
filteredProducts.sort((a, b) => parseFloat(a.discountPrice.replace("$", "")) - parseFloat(b.discountPrice.replace("$", "")));
} else if (sortOption === "high-low") {
filteredProducts.sort((a, b) => parseFloat(b.discountPrice.replace("$", "")) - parseFloat(a.discountPrice.replace("$", "")));
}

// Show a message if no products match the filter
if (filteredProducts.length === 0) {
productGrid.innerHTML = "<p class='text-center text-gray-500'>No products found</p>";
return;
}

// Render filtered products
filteredProducts.forEach(product => {
const productCard = document.createElement("div");
productCard.className = "group bg-white h-76 p-4 rounded-lg shadow-md text-center relative";

productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover rounded-lg">
    
    <!-- Name, Wishlist & Price Container -->
    <div class="mt-2 transition-opacity duration-300 relative">
       
        <h3 class="text-lg font-semibold group-hover:opacity-0 transition-opacity duration-300">${product.name}</h3>

        <!-- Wishlist Button (Shown on Hover) -->
        <div class="absolute top-0 left-0 w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button class="wishlist-btn bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600">
                ❤️ Add to Wishlist
            </button>
        </div>

        <p class="text-red-500 text-xl font-bold mt-2">${product.discountPrice} 
            <span class="text-gray-400 line-through text-sm">${product.price}</span>
        </p>
    </div>
`;

// Add Wishlist Functionality
const wishlistBtn = productCard.querySelector(".wishlist-btn");
wishlistBtn.addEventListener("click", () => addToWishlist(product));

productGrid.appendChild(productCard);
});
}

// Add event listener for sorting
document.getElementById("sort").addEventListener("change", displayProducts);
// Function to Add Product to Wishlist
function addToWishlist(product) {
// Prevent duplicate entries
if (wishlist.some(item => item.id === product.id)) {
alert("Product is already in the wishlist!");
return;
}

wishlist.push(product);
localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Persist wishlist to localStorage
updateWishlist();
}

// Function to Update Wishlist Display
function updateWishlist() {
wishlistDiv.innerHTML = ""; // Clear previous items

if (wishlist.length === 0) {
wishlistDiv.innerHTML = "<p class='text-center text-gray-500'>Your wishlist is empty</p>";
return;
}

wishlist.forEach(product => {
const wishlistItem = document.createElement("div");
wishlistItem.className = "bg-white p-4 rounded-lg shadow-md text-center flex items-center gap-4 mt-2";

wishlistItem.innerHTML = `
     <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover rounded-lg">
    <div class="text-left">
        <h3 class="text-lg font-semibold">${product.name}</h3>
        <p class="text-red-500 text-xl font-bold">${product.discountPrice} 
            <span class="text-gray-400 line-through text-sm">${product.price}</span>
        </p>
    </div>
    <button class="remove-wishlist bg-gray-300 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-400">
        ❌ Remove
    </button>
`;

// Remove from Wishlist on Click
wishlistItem.querySelector(".remove-wishlist").addEventListener("click", () => {
    wishlist = wishlist.filter(item => item.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Update wishlist in localStorage
    updateWishlist();
});

wishlistDiv.appendChild(wishlistItem);
});
}

// Add event listeners for filtering
document.querySelectorAll(".filter").forEach(checkbox => {
checkbox.addEventListener("change", displayProducts);
});

// Clear Filters function
function clearFilters() {
document.querySelectorAll('.filter').forEach(checkbox => checkbox.checked = false);
displayProducts();
}

// Initial render
displayProducts();


// On the filter.html page, you can add the following script to handle the filter logic
document.addEventListener("DOMContentLoaded", function () {
    const filterCategory = localStorage.getItem("filterCategory");

    if (filterCategory === "men") {
        document.getElementById("men-checkbox").checked = true;
    } 
    if (filterCategory === "women") {
        document.getElementById("women-checkbox").checked = true;
    }

    // Clear stored value to prevent unintended selection on next visit
    localStorage.removeItem("filterCategory");

    // Call the function to display products based on the filter
    displayProducts();
});
