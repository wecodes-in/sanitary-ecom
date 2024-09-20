import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu } from "react-icons/fi";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const SanitaryEcommerce = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const categories = [
    { id: 1, name: "Bathroom", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 2, name: "Kitchen", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 3, name: "Cleaning", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 4, name: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 5, name: "Wooden Work", image: "https://images.unsplash.com/photo-1611046243936-22bb7b590886?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 6, name: "Tiles", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 7, name: "Plaster of Paris", image: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }
  ];

  const items = [
    { id: 1, categoryId: 1, name: "Toilet Cleaner", price: 9.99, rating: 4.5, image: "https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 2, categoryId: 1, name: "Shower Gel", price: 7.99, rating: 4, image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 3, categoryId: 2, name: "Dish Soap", price: 5.99, rating: 4.5, image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 4, categoryId: 2, name: "Kitchen Cleaner", price: 8.99, rating: 3.5, image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 5, categoryId: 3, name: "All-Purpose Cleaner", price: 6.99, rating: 4, image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 6, categoryId: 3, name: "Microfiber Cloth", price: 3.99, rating: 5, image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" },
    { id: 7, categoryId: 4, name: "Hand Sanitizer", price: 4.99, rating: 4.5, image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 8, categoryId: 4, name: "Face Mask", price: 2.99, rating: 4, image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 9, categoryId: 5, name: "Wood Polish", price: 12.99, rating: 4.2, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 10, categoryId: 5, name: "Wood Varnish", price: 15.99, rating: 4.7, image: "https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 11, categoryId: 6, name: "Tile Grout", price: 8.99, rating: 4.3, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 12, categoryId: 6, name: "Tile Cutter", price: 29.99, rating: 4.8, image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 13, categoryId: 7, name: "POP Powder", price: 18.99, rating: 4.6, image: "https://images.unsplash.com/photo-1517582082532-16a092d47074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    { id: 14, categoryId: 7, name: "POP Tools Set", price: 39.99, rating: 4.4, image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<BsStarHalf key={i} className="text-yellow-400" />);
      } else {
        stars.push(<BsStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  const renderHomePage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => {
              setSelectedCategory(category);
              setActiveTab("category");
            }}
          >
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCategoryPage = () => (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{selectedCategory.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items
          .filter((item) => item.categoryId === selectedCategory.id)
          .map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => {
                setSelectedItem(item);
                setActiveTab("item");
              }}
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">{renderStars(item.rating)}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const renderItemPage = () => (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-4">${selectedItem.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">{renderStars(selectedItem.rating)}</div>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus,
              molestie est a, tempor magna.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => addToCart(selectedItem)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Sanitary E-commerce</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <FiShoppingCart className="text-2xl text-gray-600 cursor-pointer" />
            <FiHeart className="text-2xl text-gray-600 cursor-pointer" />
            <FiMenu className="text-2xl text-gray-600 cursor-pointer md:hidden" />
          </div>
        </div>
      </header>

      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex space-x-4">
            <li>
              <button
                className={`py-2 px-4 rounded ${activeTab === "home" ? "bg-blue-500" : ""}`}
                onClick={() => setActiveTab("home")}
              >
                Home
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`py-2 px-4 rounded ${selectedCategory?.id === category.id ? "bg-blue-500" : ""}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveTab("category");
                  }}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto py-8">
        {activeTab === "home" && renderHomePage()}
        {activeTab === "category" && renderCategoryPage()}
        {activeTab === "item" && renderItemPage()}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p>Email: info@sanitaryecommerce.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-500">Facebook</a>
                <a href="#" className="text-white hover:text-blue-500">Twitter</a>
                <a href="#" className="text-white hover:text-blue-500">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SanitaryEcommerce;
