const AboutUs = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
          About Us
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
          Welcome to <strong>TutorBook</strong>, your go-to platform for
          connecting with expert tutors worldwide. We are dedicated to
          empowering learners of all ages and backgrounds to achieve their
          educational goals with personalized guidance and support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              At TutorBook, our mission is to bridge the gap between passionate
              educators and eager learners. We aim to provide a platform that
              fosters growth, inspires confidence, and delivers high-quality
              education to everyone, anywhere.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We envision a world where education is accessible, inclusive, and
              personalized. By leveraging technology and innovation, TutorBook
              strives to create an engaging learning environment for all.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Access to top-notch tutors across various subjects.</li>
              <li>Flexible scheduling to suit your needs.</li>
              <li>Affordable and transparent pricing.</li>
              <li>Interactive and engaging learning tools.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Have questions or need assistance? We&apos;re here to help. Reach
              out to us at:
            </p>
            <p className="text-green-600 dark:text-green-400">
              <a
                href="mailto:support@tutorbook.com"
                className="hover:underline"
              >
                +880 123 456 789
              </a>
              <br />
              <a
                href="mailto:support@tutorbook.com"
                className="hover:underline"
              >
                support@tutorbook.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
