import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../components/Banner";

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
    </div>
  );
};

export default Home;
