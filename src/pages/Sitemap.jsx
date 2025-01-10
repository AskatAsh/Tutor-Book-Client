import { Link } from "react-router-dom";

const Sitemap = () => {
  const pages = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/addTutorials",
      name: "Add Tutorials",
    },
    {
      path: "/myTutorials",
      name: "My Tutorials",
    },
    {
      path: "/updateTutorial/:id",
      name: "Update Tutorial",
    },
    {
      path: "/findTutors",
      name: "Find Tutors",
    },
    {
      path: "/findTutors/:category",
      name: "Find Category Tutors",
    },
    {
      path: "/myBookedTutor",
      name: "My Booked Tutors",
    },
    {
      path: "/tutor/:details",
      name: "Tutor Details",
    },
    {
      path: "/auth/login",
      name: "Login",
    },
    {
      path: "/auth/register",
      name: "Register",
    },
    {
      path: "/sitemap",
      name: "Sitemap",
    },
    {
      path: "/terms-of-use",
      name: "Terms of Use",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen px-4 py-20 flex items-center justify-center">
      <div>
        <img className="block mx-auto mb-10" src="https://i.ibb.co.com/7SdPwvB/icons8-training-96.png" alt="tutor book logo" />
        <h2 className="text-2xl font-bold mb-6 text-center">Sitemap</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="text-green-600 hover:underline"
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
