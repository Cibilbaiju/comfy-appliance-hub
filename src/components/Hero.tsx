
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#2d4a77]">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Transform Your Home With Premium Appliances
          </h1>
          <p className="text-xl mb-8 text-gray-200 animate-fade-in">
            Discover our curated collection of high-quality home appliances. 
            Free delivery and expert installation available.
          </p>
          <div className="flex gap-4 animate-fade-in">
            <Button size="lg" className="bg-white text-[#1a365d] hover:bg-gray-100">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Special Offers
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-0" />
    </div>
  );
};
