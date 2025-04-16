
interface CategoryCardProps {
  title: string;
  image: string;
  itemCount: number;
}

export const CategoryCard = ({ title, image, itemCount }: CategoryCardProps) => {
  return (
    <a href="#" className="group relative overflow-hidden rounded-lg">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-200">{itemCount} items</p>
        </div>
      </div>
    </a>
  );
};
