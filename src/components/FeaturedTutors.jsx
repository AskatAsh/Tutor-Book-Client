import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const FeaturedTutors = () => {
  const tutors = [
    {
      id: "676c46cebcc8cd3a169cf23b",
      name: "John Doe",
      subject: "English Communication",
      image:
        "https://i.ibb.co.com/s9vCQF1/portrait-interesting-young-man-winter-clothes-158595-914.jpg",
      rating: 4.8,
      tagline: "Helping you master English communication.",
    },
    {
      id: "676c46cebcc8cd3a169cf234",
      name: "Amanullah Emon",
      subject: "French Language",
      image:
        "https://i.ibb.co.com/P6Dt0L0/crazy-man-looking-camera-23-2147808150.jpg",
      rating: 4.7,
      tagline: "Fluency in French, one step at a time.",
    },
    {
      id: "676c46cebcc8cd3a169cf235",
      name: "Sifat Chy",
      subject: "Spanish Language",
      image:
        "https://i.ibb.co.com/4psKJYT/young-man-wearing-blue-outfit-looking-confident-1298-291.jpg",
      rating: 4.9,
      tagline: "Speak Spanish confidently in no time.",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto w-11/12">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600 dark:text-green-500">
          Featured Tutors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="card shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700 dark:bg-gray-800"
            >
              <figure className="p-4">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="rounded-xl w-full min-h-56 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center p-4">
                <h3 className="card-title text-lg font-semibold dark:text-gray-300">
                  {tutor.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tutor.subject}
                </p>
                <p className="mt-2 text-gray-500 dark:text-gray-300">
                  {tutor.tagline}
                </p>
                <Link to={`/tutor/${tutor.id}`}>
                  <button className="text-green-500 font-medium hover:underline flex items-center gap-2">
                    View details <LuSquareArrowOutUpRight />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTutors;
