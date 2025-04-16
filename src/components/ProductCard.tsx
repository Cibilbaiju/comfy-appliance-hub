
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
}

export const ProductCard = ({ name, price, image, brand, rating }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{brand}</p>
        <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-[#1a365d]">${price.toLocaleString()}</span>
          <div className="flex items-center">
            {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
          </div>
        </div>
        <Button className="w-full bg-[#1a365d] hover:bg-[#2d4a77]">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
