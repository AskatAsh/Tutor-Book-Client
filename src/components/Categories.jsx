import { MdArrowForwardIos, MdOutlineCategory } from "react-icons/md";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-green-500 dark:text-green-400 text-center px-6">
        Explore Categories
      </h2>
      <div className="max-w-7xl w-11/12 mx-auto rounded-lg grid grid-cols-12 gap-5 my-10">
        {/* tutors count */}
        <Link className="bg-white dark:bg-gray-800 p-4 rounded-lg col-span-4 border flex items-center justify-between dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <MdOutlineCategory size={28} />
            <div>
              <strong className="text-xl font-semibold text-gray-700 dark:text-gray-300 inline-block">
                English Tutors
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                20,000+ Teachers
              </p>
            </div>
          </div>
          <MdArrowForwardIos size={20} />
        </Link>
        {/* tutors count */}
        <Link className="bg-white dark:bg-gray-800 p-4 rounded-lg col-span-4 border flex items-center justify-between dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <MdOutlineCategory size={28} />
            <div>
              <strong className="text-xl font-semibold text-gray-700 dark:text-gray-300 inline-block">
                Spanish Tutors
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                20,000+ Teachers
              </p>
            </div>
          </div>
          <MdArrowForwardIos size={20} />
        </Link>
        {/* tutors count */}
        <Link className="bg-white dark:bg-gray-800 p-4 rounded-lg col-span-4 border flex items-center justify-between dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <MdOutlineCategory size={28} />
            <div>
              <strong className="text-xl font-semibold text-gray-700 dark:text-gray-300 inline-block">
                French Tutors
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                20,000+ Teachers
              </p>
            </div>
          </div>
          <MdArrowForwardIos size={20} />
        </Link>
        {/* tutors count */}
        <Link className="bg-white dark:bg-gray-800 p-4 rounded-lg col-span-4 border flex items-center justify-between dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <MdOutlineCategory size={28} />
            <div>
              <strong className="text-xl font-semibold text-gray-700 dark:text-gray-300 inline-block">
                German Tutors
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                20,000+ Teachers
              </p>
            </div>
          </div>
          <MdArrowForwardIos size={20} />
        </Link>
        {/* tutors count */}
        <Link className="bg-white dark:bg-gray-800 p-4 rounded-lg col-span-4 border flex items-center justify-between dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <MdOutlineCategory size={28} />
            <div>
              <strong className="text-xl font-semibold text-gray-700 dark:text-gray-300 inline-block">
                Italian Tutors
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                20,000+ Teachers
              </p>
            </div>
          </div>
          <MdArrowForwardIos size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Categories;
