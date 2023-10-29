const CategoryCard = ({ img, name }) => {
    return (
      <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded">
        <div className="flex justify-between items-center p-6">
          <div className="space-y-4">
            <h3 className="font-medium text-xl">{name}</h3>
          </div>
          <img className="w-[1px]" src={img} alt={name} />
        </div>
      </div>
    );
  };
  
  export default CategoryCard;
  