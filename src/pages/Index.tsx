
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";

const featuredProducts = [
  {
    name: "Smart French Door Refrigerator",
    price: 2499,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=500",
    brand: "LuxeCool",
    rating: 5
  },
  {
    name: "Pro Series Washing Machine",
    price: 899,
    image: "https://images.unsplash.com/photo-1626806787461-102c1a6d2945?q=80&w=500",
    brand: "WashMaster",
    rating: 4
  },
  {
    name: "Digital Air Fryer Oven",
    price: 299,
    image: "https://images.unsplash.com/photo-1644943101787-e931f809648f?q=80&w=500",
    brand: "SmartChef",
    rating: 5
  },
  {
    name: "Smart Dishwasher",
    price: 749,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=500",
    brand: "CleanTech",
    rating: 4
  }
];

const categories = [
  {
    title: "Kitchen Appliances",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=500",
    itemCount: 156
  },
  {
    title: "Laundry",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=500",
    itemCount: 84
  },
  {
    title: "Refrigeration",
    image: "https://images.unsplash.com/photo-1628961188728-786a7b0b9198?q=80&w=500",
    itemCount: 49
  },
  {
    title: "Small Appliances",
    image: "https://images.unsplash.com/photo-1544441892-794166f1e3be?q=80&w=500",
    itemCount: 215
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      
      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#2d4a77] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Summer Sale</h2>
          <p className="text-xl mb-8">Up to 40% off on selected appliances</p>
          <button className="bg-white text-[#1a365d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Offers
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">ComfyHome</h3>
              <p className="text-sm">Your trusted source for premium home appliances.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Kitchen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Laundry</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refrigeration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Small Appliances</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-sm mb-4">Subscribe for exclusive offers and updates.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 px-4 py-2 rounded-lg flex-1 text-white"
                />
                <button className="bg-[#63b3ed] text-white px-4 py-2 rounded-lg hover:bg-[#4299e1] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2024 ComfyHome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
