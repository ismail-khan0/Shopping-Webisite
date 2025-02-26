
const products = [
    {
        id: 1,
        name: "Men Shirt",
        image: "https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/young-handsome-businessman-black-shirt_158595-4806.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/premium-photo/handsome-bearded-man-casual-clothes-gray-wall_155104-58.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/medium-shot-boy-posing-with-monochrome-outfit_23-2151044509.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Shirts",
        brands: "WOOSTRO",
        color:"Brown"
    },
    {
        id: 5,
        name: "Men T-Shirt",
        image: "https://img.freepik.com/free-photo/serious-young-man-standing-isolated-yellow-wall_171337-16803.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/premium-photo/man-wearing-brown-relaxed-fit-oversized-tshiirt-isolated-with-white-background_758367-178700.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/premium-photo/handsome-young-man-sitting-with-hand-face-isolated-bisque-background_676921-12785.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Tshirts",
        brands: "DISPENSER",
        color:"Brown"
    },
    {
        id: 8,
        name: "Men T-Shirt",
        image: "https://img.freepik.com/free-photo/portrait-smiling-young-man_329181-2144.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/premium-photo/guy-standing-black-background_221436-1208.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/premium-photo/portrait-modern-young-man-posing-street_519356-400.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/man-dancer-posing-studio_1303-10919.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/white-sneakers-woman-model_53876-97149.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/children-legs-dangling_23-2147797898.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Casual Shoes",
        brands: "Pepe jeans",
        color:"Black"
    },
    {
        id: 15,
        name: "Men Casual Shoes",
        image: "https://img.freepik.com/free-photo/male-foot-with-brown-leather-shoes-jeans_1150-5999.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/man-jeans-with-cardboard-bouquet-flowers_114579-2389.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Casual Shoes",
        brands: "Shoes",
        color:"Blue"
    },
    {
        id: 21,
        name: "Men Sweatshirts",
        image: "https://img.freepik.com/free-photo/young-handsome-businessman-black-shirt-black-suit_158595-4808.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybridp",
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
        image: "https://img.freepik.com/free-photo/fashionable-man-winter-knitted-clothes_158595-4105.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260954.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/man-blue-sweater-stands-straight-holding-his-head-up_8353-1113.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/portrait-handsome-young-model-man-dressed-jeans-clothes-posing-isolated_158538-9094.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "men",
        subcategory: "Jackets",
        brands: "WOOSTRO",
        color:"Navy blue"
    },
    {
        id: 26,
        name: "Men Jackets",
        image: "https://img.freepik.com/free-photo/man-with-phone-outside_1303-5869.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/rich-man-with-beard-thinking-about-business_1153-7869.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Jackets",
        brands: "DISPENSER",
        color:"Maroon"
    },
    {
        id: 28,
        name: "Men Jackets",
        image: "https://img.freepik.com/free-photo/clean-latin-fresh-natural-one_1368-2259.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "men",
        subcategory: "Jackets",
        brands: "Pepe jeans",
        color:"Black"
    },
    {
        id: 29,
        name: "Men Shorts",
        image: "https://img.freepik.com/premium-photo/male-tourist-park_38810-4419.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/front-view-lifeguard-doing-his-job_23-2149864232.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/men-beige-long-sleeves-shirt-minimal-outfit_53876-96983.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/man-black-shorts-summer-apparel-shoot_53876-125277.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "men",
        subcategory: "Shorts",
        brands: "FBAR",
        color:"Black"
    },
    {
        id: 33,
        name: "Women Shirt",
        image: "https://img.freepik.com/free-photo/picture-handsome-caucasian-woman-with-long-dark-wavy-hair-white-shirt-black-pants-heels-posing-camera_132075-9136.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "women",
        subcategory: "Shirts",
        brands: "Pepe jeans",
        color:"White"
    },
    {
        id: 34,
        name: "Women Shirt",
        image: "https://img.freepik.com/free-photo/fashion-photo-young-magnificent-woman-black-shirt_158595-1040.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$59.99",
        discountPrice: "$44.99",
        category: "women",
        subcategory: "Shirts",
        brands: "Masch Sports",
        color:"Black"
    },
    {
        id: 35,
        name: "Women Shirt",
        image: "https://img.freepik.com/free-photo/young-beautiful-female-posing-with-hands-waist-shirt-looking-charming_176474-113440.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Shirts",
        brands: "Friskers",
        color:"Red"
    },
    {
        id: 36,
        name: "Women Shirt",
        image: "https://img.freepik.com/free-photo/pretty-young-lady-wearing-red-dress-while-posing-street-with-car-building-background-city-lifestyle_132075-5897.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Shirts",
        brands: "WOOSTRO",
        color:"Maroon"
    },
    {
        id: 37,
        name: "Women T-Shirt",
        image: "https://img.freepik.com/free-photo/portrait-young-woman-smiling_23-2149374974.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/pretty-girl-with-long-hair-marsala-sweater-grey-wall-she-wears-knitted-hat-holds-camera-hands-smiling_197531-2505.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Tshirts",
        brands: "DISPENSER",
        color:"Maroon"
    },
    {
        id: 39,
        name: "Women T-Shirt",
        image: "https://img.freepik.com/free-photo/young-delivery-girl-blue-uniform-cap-smiling-confident-fixing-her-cap-standing-pink-wall_141793-63827.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/premium-photo/serious-young-woman-intshirt-denim-pants-posing-with-hands-pockets-isolated-background_482921-2234.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/woman-black-sweater-shows-sadness_140725-7572.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
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
        image: "https://img.freepik.com/free-photo/woman-white-basic-sweater-casual-apparel_53876-102148.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Sweatshirts",
        brands: "FBAR",
        color:"White"
    },
    {
        id: 43,
        name: "Women SweatShirt",
        image: "https://img.freepik.com/free-photo/cheerful-woman-showing-direction-with-right-hand-gesturing-while-sincerely-smiling-camera_651396-3705.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$49.99",
        discountPrice: "$39.99",
        category: "women",
        subcategory: "Sweatshirts",
        brands: "Pepe jeans",
        color:"Blue"
    },
    {
        id: 44,
        name:"Women SweatShirt",
        image: "https://img.freepik.com/free-photo/rebel-girl-hat-showing-gesture-camera_23-2147778836.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$59.99",
        discountPrice: "$44.99",
        category: "women",
        subcategory: "Sweatshirts",
        brands: "Masch Sports",
        color:"White"
    },
    {
        id: 45,
        name: "Women Trouser",
        image: "https://img.freepik.com/free-photo/full-length-portrait-beautiful-woman-looking_74855-5067.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$89.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Trousers",
        brands: "Friskers",
        color:"Black"
    },
    {
        id: 46,
        name: "Women Trouser",
        image: "https://img.freepik.com/free-photo/outdoor-fashion-portrait-stylish-pretty-young-woman-wearing-bohemian-outfit-vintage-hat-long-blonde-hairs-enjoy-free-sunny-autumn-day-good-weather-chill-relax-joy-vacation_291049-741.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$79.99",
        discountPrice: "$69.99",
        category: "women",
        subcategory: "Trousers",
        brands: "WOOSTRO",
        color:"White"
    },
    {
        id: 47,
        name: "Women Trouser",
        image: "https://img.freepik.com/premium-photo/beautiful-business-woman-stands-white-background_160672-5006.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$99.99",
        discountPrice: "$74.99",
        category: "women",
        subcategory: "Trousers",
        brands: "FBAR",
        color:"Black"
    },
    {
        id: 48,
        name: "Women Trouser",
        image: "https://img.freepik.com/free-photo/woman-posing_1303-3738.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Trousers",
        brands: "DISPENSER",
        color:"Blue"
    },
    {
        id: 49,
        name: "Women Jacket",
        image: "https://img.freepik.com/free-photo/blonde-girl-wearing-red-coat-snowy-field_273443-1074.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Pepe jeans",
        color:"Red"
    },
    {
        id: 50,
        name: "Women Jacket",
        image: "https://img.freepik.com/free-photo/white-women-s-coat-outerwear-casual-fashion_53876-102849.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Masch Sports",
        color:"White"
    },
    {
        id: 51,
        name: "Women Jacket",
        image: "https://img.freepik.com/free-photo/woman-posing_1303-3721.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Pepe jeans",
        color:"Black"
    },
    {
        id: 52,
        name: "Women Jacket",
        image: "https://img.freepik.com/free-photo/woman-model-demonstrating-winter-cloths_1303-16967.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jackets",
        brands: "Masch Sports",
        color:"Blue"
    },
    {
        id: 53,
        name: "Women Jeans",
        image: "https://img.freepik.com/free-photo/full-length-portrait-cute-woman-gray-wall_231208-5552.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jeans",
        brands: "Pepe jeans",
        color:"Navy Blue"
    },
    {
        id: 54,
        name: "Women Shoes",
        image: "https://img.freepik.com/free-photo/business-woman-standing-full-length-white-background_231208-2024.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Casual Shoes",
        brands: "Masch Sports",
        color:"White"
    },
    {
        id: 55,
        name: "Women Jeans",
        image: "https://img.freepik.com/free-photo/full-length-smiling-curly-woman-posing-white-wall_171337-2626.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jeans",
        brands: "Pepe jeans",
        color:"Grey"
    },
    {
        id: 56,
        name: "Women Jeans",
        image: "https://img.freepik.com/free-photo/beautiful-smiling-person-portrait_1303-2275.jpg?uid=R188445953&ga=GA1.1.1239189246.1740138222&semt=ais_hybrid",
        price: "$69.99",
        discountPrice: "$49.99",
        category: "women",
        subcategory: "Jeans",
        brands: "Pepe jeans",
        color:"Black"
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
productCard.className = "group bg-white h-auto p-4 rounded-lg shadow-md text-center relative";

productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover h-64 rounded-lg">
    
    <!-- Name, Wishlist & Price Container -->
    <div class="mt-2 transition-opacity duration-300 relative">
       
        <h3 class="text-lg font-semibold group-hover:opacity-0 transition-opacity duration-300">${product.name}</h3>

        <!-- Wishlist Button (Shown on Hover) -->
        <div class="absolute top-0 left-0 w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button class="wishlist-btn bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 active:bg-red-400">
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

function redirectToFilter(Catagory) {
    localStorage.setItem("filterCategory", Catagory); // Store "women" category in localStorage
    window.location.href = "filter.html"; // Redirect to filter page
  }
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
