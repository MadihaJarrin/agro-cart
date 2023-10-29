const CategoryCard = require("./CategoryCard").default;

const data = [
  {
    id: 0,
    name: "Rice",
    img: "/category___8.webp"
  },
  {
    id: 1,
    name: "Fish",
    img: "/category___2.webp"
  },
  {
    id: 2,
    name: "Meat",
    img: "/category___3.webp"
  },
  {
    id: 3,
    name: "Fresh Vegetables",
    img: "/category___4.webp"
  },
  {
    id: 4,
    name: "Fresh Fruits",
    img: "/category___5.webp"
  },
  {
    id: 5,
    name: "Spices",
    img: "/category___6.webp"
  },
  {
    id: 6,
    name: "Salt & Sugar",
    img: "/category___7.webp"
  },
  {
    id: 7,
    name: "Oil",
    img: "/category___9.webp"
  }
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard key={el.id} img={el.img} name={el.name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
