import { MdArrowForwardIos, MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import useGetCategories from "../hooks/useGetCategories";
import Loading from "./Loading";
import ErrorMessages from "./ErrorMessages";

const Categories = () => {
  const [categories, isLoading, errorMessage, getCategories] =
    useGetCategories();

  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-green-500 dark:text-green-400 text-center px-6">
        Explore Categories
      </h2>

      {isLoading ? (
        <Loading />
      ) : errorMessage.message ? (
        <ErrorMessages
          errorMessage={errorMessage}
          onRetry={() => getCategories()}
        />
      ) : (
        <div className="max-w-7xl w-11/12 mx-auto rounded-lg grid grid-cols-12 gap-5 my-10">
          {categories.map((category, idx) => (
            <Link
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg col-span-4 border flex items-center justify-between dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700"
            >
              <div className="flex items-center gap-4">
                <MdOutlineCategory size={28} />
                <div>
                  <strong className="text-xl font-semibold text-gray-700 dark:text-gray-300 inline-block">
                    {category} Tutors
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
      )}
    </section>
  );
};

export default Categories;
