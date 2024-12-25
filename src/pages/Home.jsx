import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../components/Banner";
import Stats from "../components/Stats";

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
    </div>
  );
};

export default Home;
