import { Helmet, HelmetProvider } from "react-helmet-async";

const FindTutors = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Find Tutors</title>
        </Helmet>
      </HelmetProvider>
      Find tutors page
    </div>
  );
};

export default FindTutors;
