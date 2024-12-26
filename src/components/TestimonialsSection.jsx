import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jesica Clerk",
      image: "https://i.ibb.co.com/qpPW3VZ/young-student-girl-isolated-gray-wall-smiling-camera-pressing-laptop-chest-wearing-backpack-ready-go.jpg",
      review: "This platform connected me with the best tutor I’ve ever had!",
    },
    {
      name: "Jane Smith",
      image: "https://i.ibb.co.com/wLz15v3/front-view-male-student-green-checkered-shirt-with-black-backpack-holding-copybooks-smiling-blue-wal.jpg",
      review: "Learning a new language has never been easier. Highly recommended!",
    },
    {
      name: "Robert Johnson",
      image: "https://i.ibb.co.com/YBRHSXZ/portrait-young-student-smiling-23-2148586534.jpg",
      review: "Affordable, accessible, and amazing tutors. Love this site!",
    },
  ];

  return (
    <section className="bg-base-100 dark:bg-base-200 py-16">
      <h2 className="text-4xl text-center font-bold mb-8 text-green-500">What Our Students Say</h2>
      <div className="max-w-7xl w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card shadow-md bg-white dark:bg-gray-900 p-6 border dark:border-gray-800 rounded-lg relative">
            <div className="absolute"><FaQuoteLeft size={40} /></div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4 border dark:border-gray-800 bg-gray-50 dark:bg-gray-400"
            />
            <h3 className="text-xl font-semibold text-center dark:text-gray-100">{testimonial.name}</h3>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-400">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
