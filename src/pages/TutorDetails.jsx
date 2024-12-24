import { Helmet, HelmetProvider } from "react-helmet-async";

const TutorDetails = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tutor Details</title>
        </Helmet>
      </HelmetProvider>
      Tutor details page
    </div>
  );
};

export default TutorDetails;
