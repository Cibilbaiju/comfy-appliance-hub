
import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <a href="/" className="text-2xl font-bold text-[#1a365d]">
              ComfyHome
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-[#1a365d] transition-colors">
              Kitchen
            </a>
            <a href="#" className="text-gray-600 hover:text-[#1a365d] transition-colors">
              Laundry
            </a>
            <a href="#" className="text-gray-600 hover:text-[#1a365d] transition-colors">
              Refrigeration
            </a>
            <a href="#" className="text-gray-600 hover:text-[#1a365d] transition-colors">
              Small Appliances
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
