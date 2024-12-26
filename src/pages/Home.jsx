import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      {/* Image slider banner */}
      <Banner />
      {/* Stats Section */}
      <Stats />
      {/* Categories Section */}
      <Categories />
      {/* Students Testimonials */}
      <TestimonialsSection />
    </div>
  );
};

export default Home;
