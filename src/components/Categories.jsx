import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { language: "english", icon: "https://i.ibb.co.com/fGLX4yB/image.png" },
    { language: "spanish", icon: "https://i.ibb.co.com/xjt3yVG/image.png" },
    { language: "french", icon: "https://i.ibb.co.com/mDJxZ8H/image.png" },
    { language: "german", icon: "https://i.ibb.co.com/Ltt5DKR/image.png" },
    { language: "italian", icon: "https://i.ibb.co.com/R24z37G/image.png" },
    { language: "chinese", icon: "https://i.ibb.co.com/gV8tnLF/image.png" },
    { language: "arabic", icon: "https://i.ibb.co.com/KLD4NGT/image.png" },
    { language: "japanese", icon: "https://i.ibb.co.com/d7dKpqJ/image.png" },
    { language: "portuguese", icon: "https://i.ibb.co.com/xsctxVS/image.png" },
  ];

  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-green-500 dark:text-green-400 text-center px-6">
        Explore Categories
      </h2>

      <div className="max-w-7xl w-11/12 mx-auto rounded-lg grid grid-cols-12 gap-5 my-10">
        {categories.map((category, idx) => (
          <Link
            to={`/findTutors/${category.language}`}
            key={idx}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg col-span-12 md:col-span-6 lg:col-span-4 border flex items-center justify-between dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700"
          >
            <div className="flex items-center gap-4">
              <img className="w-10 bg-gray-100 dark:bg-gray-400 p-1 rounded-md" src={category.icon} alt={`icon of ${category.language} category`} />
              <div>
                <strong className="text-xl font-semibold text-gray-700 dark:text-gray-300 inline-block">
                {category.language.charAt(0).toUpperCase() + category.language.slice(1)} Tutors
                </strong>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  20,000+ Teachers
                </p>
              </div>
            </div>
            <MdArrowForwardIos size={20} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
