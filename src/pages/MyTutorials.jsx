import { Helmet, HelmetProvider } from "react-helmet-async";

const MyTutorials = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>My Tutorials</title>
        </Helmet>
      </HelmetProvider>
      My Tutorials
    </div>
  );
};

export default MyTutorials;
