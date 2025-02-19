const products = [
  {
    id: 1,
    name: "Men Shirt",
    image:
      "data:image/jpeg;base64,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",
    price: "$49.99",
    discountPrice: "$39.99",
    category: "men",
    subcategory: "Shirts",
    brands: "Friskers",
    color: "Grey",
  },
  {
    id: 2,
    name: "Men Shirt",
    image: "img/Men-catagories/shirt_2.webp",
    price: "$59.99",
    discountPrice: "$44.99",
    category: "men",
    subcategory: "Shirts",
    brands: "Friskers",
    color: "Black",
  },
  {
    id: 3,
    name: "Men Shirt",
    image: "img/Men-catagories/shirt_3.webp",
    price: "$89.99",
    discountPrice: "$69.99",
    category: "men",
    subcategory: "Shirts",
    brands: "WOOSTRO",
    color: "Maroon",
  },
  {
    id: 4,
    name: "Men Shirt",
    image: "img/Men-catagories/men_2.webp",
    price: "$79.99",
    discountPrice: "$69.99",
    category: "men",
    subcategory: "Shirts",
    brands: "WOOSTRO",
    color: "",
  },
  {
    id: 5,
    name: "Men T-Shirt",
    image: "img/Men-catagories/t-shirt.webp",
    price: "$99.99",
    discountPrice: "$74.99",
    category: "men",
    subcategory: "Tshirts",
    brands: "DISPENSER",
    color: "White",
  },
  {
    id: 6,
    name: "Men T-Shirt",
    image: "img/Men-catagories/t-shirt2.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Tshirts",
    brands: "FBAR",
    color: "Maroon",
  },
  {
    id: 7,
    name: "Men T-Shirt",
    image: "img/Men-catagories/t-shirt3.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Tshirts",
    brands: "DISPENSER",
    color: "",
  },
  {
    id: 8,
    name: "Men T-Shirt",
    image: "img/Men-catagories/t-shirt4.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Tshirts",
    brands: "DISPENSER",
    color: "Blue",
  },
  {
    id: 9,
    name: "Men Jeans",
    image: "img/Men-catagories/jeans.webp",
    price: "$49.99",
    discountPrice: "$39.99",
    category: "men",
    subcategory: "Jeans",
    brands: "DISPENSER",
    color: "Navy Blue",
  },
  {
    id: 10,
    name: "Men Jeans",
    image: "img/Men-catagories/jeans2.webp",
    price: "$59.99",
    discountPrice: "$44.99",
    category: "men",
    subcategory: "Jeans",
    brands: "FBAR",
    color: "Grey",
  },
  {
    id: 11,
    name: "Men Jeans",
    image: "img/Men-catagories/jeans3.webp",
    price: "$89.99",
    discountPrice: "$69.99",
    category: "men",
    subcategory: "Jeans",
    brands: "FBAR",
    color: "Black",
  },
  {
    id: 12,
    name: "Men Jeans",
    image: "img/Men-catagories/jeans4.webp",
    price: "$79.99",
    discountPrice: "$69.99",
    category: "men",
    subcategory: "Jeans",
    brands: "FBAR",
    color: "Grey",
  },
  {
    id: 13,
    name: "Men Casual Shoes",
    image: "img/Men-catagories/casual-shoes.webp",
    price: "$99.99",
    discountPrice: "$74.99",
    category: "men",
    subcategory: "Casual Shoes",
    brands: "Pepe jeans",
    color: "White",
  },
  {
    id: 14,
    name: "Men Casual Shoes",
    image: "img/Men-catagories/casual4-shoes.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Casual Shoes",
    brands: "Pepe jeans",
    color: "",
  },
  {
    id: 15,
    name: "Men Casual Shoes",
    image: "img/Men-catagories/casual2-shoes.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Casual Shoes",
    brands: "Pepe jeans",
    color: "Maroon",
  },
  {
    id: 16,
    name: "Men Casual Shoes",
    image: "img/Men-catagories/casual3-shoes.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Casual Shoes",
    brands: "Pepe jeans",
    color: "",
  },
  {
    id: 21,
    name: "Men Sweatshirts",
    image: "img/Men-catagories/sweatshirt.webp",
    price: "$99.99",
    discountPrice: "$74.99",
    category: "men",
    subcategory: "Sweatshirts",
    brands: " Masch Sports",
    color: "Black",
  },
  {
    id: 22,
    name: "Men Sweatshirts",
    image: "img/Men-catagories/sweatshirt2.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Sweatshirts",
    brands: "Masch Sports",
    color: "Brown",
  },
  {
    id: 23,
    name: "Men Sweatshirts",
    image: "img/Men-catagories/sweatshirt3.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Sweatshirts",
    brands: "Masch Sports",
    color: "Black",
  },
  {
    id: 24,
    name: "Men Sweatshirts",
    image: "img/Men-catagories/sweatshirt4.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Sweatshirts",
    brands: "Masch Sports",
    color: "Blue",
  },
  {
    id: 25,
    name: "Men Jackets",
    image: "img/Men-catagories/jackets.webp",
    price: "$49.99",
    discountPrice: "$39.99",
    category: "men",
    subcategory: "Jackets",
    brands: "WOOSTRO",
    color: "",
  },
  {
    id: 26,
    name: "Men Jackets",
    image: "img/Men-catagories/jackets2.webp",
    price: "$59.99",
    discountPrice: "$44.99",
    category: "men",
    subcategory: "Jackets",
    brands: "FBAR",
    color: "Brown",
  },
  {
    id: 27,
    name: "Men Jackets",
    image: "img/Men-catagories/jackets3.webp",
    price: "$89.99",
    discountPrice: "$69.99",
    category: "men",
    subcategory: "Jackets",
    brands: "DISPENSER",
    color: "",
  },
  {
    id: 28,
    name: "Men Jackets",
    image: "img/Men-catagories/jackets4.webp",
    price: "$79.99",
    discountPrice: "$69.99",
    category: "men",
    subcategory: "Jackets",
    brands: "Pepe jeans",
    color: "",
  },
  {
    id: 29,
    name: "Men Shorts",
    image: "img/Men-catagories/short4.webp",
    price: "$99.99",
    discountPrice: "$74.99",
    category: "men",
    subcategory: "Shorts",
    brands: "Masch Sports",
    color: "Brown",
  },
  {
    id: 30,
    name: "Men Shorts",
    image: "img/Men-catagories/short3.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Shorts",
    brands: "Friskers",
    color: "Red",
  },
  {
    id: 31,
    name: "Men Shorts",
    image: "img/Men-catagories/short2.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Shorts",
    brands: "WOOSTRO",
    color: "White",
  },
  {
    id: 32,
    name: "Men Shorts",
    image: "img/Men-catagories/short.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "men",
    subcategory: "Shorts",
    brands: "FBAR",
    color: "Black",
  },
  {
    id: 33,
    name: "Men Shirt",
    image: "img/women-catagories/sareas.webp",
    price: "$49.99",
    discountPrice: "$39.99",
    category: "women",
    subcategory: "Shirts",
    brands: "Pepe jeans",
    color: "",
  },
  {
    id: 34,
    name: "Men Shirt",
    image: "img/women-catagories/sareas2.webp",
    price: "$59.99",
    discountPrice: "$44.99",
    category: "women",
    subcategory: "Shirts",
    brands: "Masch Sports",
    color: "",
  },
  {
    id: 35,
    name: "Men Shirt",
    image: "img/women-catagories/sareas3.webp",
    price: "$89.99",
    discountPrice: "$69.99",
    category: "women",
    subcategory: "Shirts",
    brands: "Friskers",
    color: "",
  },
  {
    id: 36,
    name: "Women Shirt",
    image: "img/women-catagories/sareas4.webp",
    price: "$79.99",
    discountPrice: "$69.99",
    category: "women",
    subcategory: "Shirts",
    brands: "WOOSTRO",
    color: "",
  },
  {
    id: 37,
    name: "Women T-Shirt",
    image: "img/women-catagories/w-Tshirt.webp",
    price: "$99.99",
    discountPrice: "$74.99",
    category: "women",
    subcategory: "Tshirts",
    brands: "FBAR",
    color: "Black",
  },
  {
    id: 38,
    name: "Women T-Shirt",
    image: "img/women-catagories/w-Tshirt2.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Tshirts",
    brands: "DISPENSER",
    color: "Black",
  },
  {
    id: 39,
    name: "Women T-Shirt",
    image: "img/women-catagories/w-Tshirt3.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Tshirts",
    brands: "Pepe jeans",
    color: "Navy Blue",
  },
  {
    id: 40,
    name: "Women T-Shirt",
    image: "img/women-catagories/w-Tshirt4.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Tshirts",
    brands: "Masch Sports",
    color: "White",
  },
  {
    id: 41,
    name: "Sweat Shirt",
    image: "img/women-catagories/w-sweater.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Sweatshirts",
    brands: "WOOSTRO",
    color: "Black",
  },
  {
    id: 42,
    name: "Women SweatShirt",
    image: "img/women-catagories/w-sweater2.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Sweatshirts",
    brands: "FBAR",
    color: "White",
  },
  {
    id: 43,
    name: "Women SweatShirt",
    image: "img/women-catagories/w-sweater3.webp",
    price: "$49.99",
    discountPrice: "$39.99",
    category: "women",
    subcategory: "Sweatshirts",
    brands: "Pepe jeans",
    color: "",
  },
  {
    id: 44,
    name: "Women SweatShirt",
    image: "img/women-catagories/w-sweater4.webp",
    price: "$59.99",
    discountPrice: "$44.99",
    category: "women",
    subcategory: "Sweatshirts",
    brands: "Masch Sports",
    color: "White",
  },
  {
    id: 45,
    name: "Women Trouser",
    image: "img/women-catagories/w-Trouser.webp",
    price: "$89.99",
    discountPrice: "$69.99",
    category: "women",
    subcategory: "Trousers",
    brands: "Friskers",
    color: "Black",
  },
  {
    id: 46,
    name: "Women Trouser",
    image: "img/women-catagories/w-Trouser2.webp",
    price: "$79.99",
    discountPrice: "$69.99",
    category: "women",
    subcategory: "Trousers",
    brands: "WOOSTRO",
    color: "White",
  },
  {
    id: 47,
    name: "Women Trouser",
    image: "img/women-catagories/w-Trouser3.webp",
    price: "$99.99",
    discountPrice: "$74.99",
    category: "women",
    subcategory: "Trousers",
    brands: "FBAR",
    color: "Black",
  },
  {
    id: 48,
    name: "Women Trouser",
    image: "img/women-catagories/w-Trouser4.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Trousers",
    brands: "DISPENSER",
    color: "Black",
  },
  {
    id: 49,
    name: "Women Jacket",
    image: "img/women-catagories/w-Jacket.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Jackets",
    brands: "Pepe jeans",
    color: "Red",
  },
  {
    id: 50,
    name: "Women Jacket",
    image: "img/women-catagories/w-Jacket2.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Jackets",
    brands: "Masch Sports",
    color: "White",
  },
  {
    id: 51,
    name: "Women Jacket",
    image: "img/women-catagories/w-Jacket3.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Jackets",
    brands: "Pepe jeans",
    color: "White",
  },
  {
    id: 52,
    name: "Women Jacket",
    image: "img/women-catagories/w-Jacket4.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Jackets",
    brands: "Masch Sports",
    color: "Blue",
  },
  {
    id: 53,
    name: "Women Jeans",
    image: "img/women-catagories/w-Jeans.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Jeans",
    brands: "Pepe jeans",
    color: "Grey",
  },
  {
    id: 54,
    name: "Women Shoes",
    image: "img/women-catagories/w-Shoes.webp",
    price: "$69.99",
    discountPrice: "$49.99",
    category: "women",
    subcategory: "Casual Shoes",
    brands: "Masch Sports",
    color: "White",
  },
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
  if (document.getElementById("tshirts").checked)
    selectedSubcategories.push("Tshirts");
  if (document.getElementById("shirts").checked)
    selectedSubcategories.push("Shirts");
  if (document.getElementById("jeans").checked)
    selectedSubcategories.push("Jeans");
  if (document.getElementById("casual-shoes").checked)
    selectedSubcategories.push("Casual Shoes");
  if (document.getElementById("trouser").checked)
    selectedSubcategories.push("Trousers");
  if (document.getElementById("jacket").checked)
    selectedSubcategories.push("Jackets");
  if (document.getElementById("shorts").checked)
    selectedSubcategories.push("Shorts");
  if (document.getElementById("sweater").checked)
    selectedSubcategories.push("Sweatshirts");

  // Collect selected brands
  if (document.getElementById("friskers").checked)
    selectedBrands.push("Friskers");
  if (document.getElementById("woostro").checked)
    selectedBrands.push("WOOSTRO");
  if (document.getElementById("fear").checked) selectedBrands.push("FBAR");
  if (document.getElementById("dispenser").checked)
    selectedBrands.push("DISPENSER");
  if (document.getElementById("pepe-jeans").checked)
    selectedBrands.push("Pepe jeans");
  if (document.getElementById("masch-sports").checked)
    selectedBrands.push("Masch Sports");

  // Collect selected colors
  const colors = [
    { id: "black", name: "Black" },
    { id: "white", name: "White" },
    { id: "blue", name: "Blue" },
    { id: "navy", name: "Navy Blue" },
    { id: "red", name: "Red" },
    { id: "grey", name: "Grey" },
    { id: "maroon", name: "Maroon" },
    { id: "brown", name: "Brown" },
  ];

  colors.forEach((color) => {
    const checkbox = document.getElementById(color.id);
    if (checkbox?.checked) selectedColor.push(color.name);
  });

  // Filter products
  let filteredProducts = products.filter((product) => {
    let categoryMatch = false;
    let subcategoryMatch =
      selectedSubcategories.length === 0 ||
      selectedSubcategories.includes(product.subcategory);
    let brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brands.trim());
    let colorMatch =
      selectedColor.length === 0 ||
      selectedColor.includes(product.color.trim());

    if (showMen && showWomen) {
      categoryMatch =
        product.category === "men" || product.category === "women";
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
    filteredProducts.sort(
      (a, b) =>
        parseFloat(a.discountPrice.replace("$", "")) -
        parseFloat(b.discountPrice.replace("$", ""))
    );
  } else if (sortOption === "high-low") {
    filteredProducts.sort(
      (a, b) =>
        parseFloat(b.discountPrice.replace("$", "")) -
        parseFloat(a.discountPrice.replace("$", ""))
    );
  }

  // Show a message if no products match the filter
  if (filteredProducts.length === 0) {
    productGrid.innerHTML =
      "<p class='text-center text-gray-500'>No products found</p>";
    return;
  }

  // Render filtered products
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className =
      "group bg-white h-76 p-4 rounded-lg shadow-md text-center relative";

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
  if (wishlist.some((item) => item.id === product.id)) {
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
    wishlistDiv.innerHTML =
      "<p class='text-center text-gray-500'>Your wishlist is empty</p>";
    return;
  }

  wishlist.forEach((product) => {
    const wishlistItem = document.createElement("div");
    wishlistItem.className =
      "bg-white p-4 rounded-lg shadow-md text-center flex items-center gap-4 mt-2";

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
    wishlistItem
      .querySelector(".remove-wishlist")
      .addEventListener("click", () => {
        wishlist = wishlist.filter((item) => item.id !== product.id);
        localStorage.setItem("wishlist", JSON.stringify(wishlist)); // Update wishlist in localStorage
        updateWishlist();
      });

    wishlistDiv.appendChild(wishlistItem);
  });
}

// Add event listeners for filtering
document.querySelectorAll(".filter").forEach((checkbox) => {
  checkbox.addEventListener("change", displayProducts);
});

// Clear Filters function
function clearFilters() {
  document
    .querySelectorAll(".filter")
    .forEach((checkbox) => (checkbox.checked = false));
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
