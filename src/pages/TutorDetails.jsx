import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useGetTutorDetails from "../hooks/useGetTutorDetails";
import TutorDetailsSection from "../components/TutorDetailsSection";
import Loading from "../components/Loading";
import ErrorMessages from "../components/ErrorMessages";

const TutorDetails = () => {
  const { details } = useParams();
  const [tutorDetails, isLoading, errorMessage, getTutorDetails] =
    useGetTutorDetails(details);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Tutor Details</title>
        </Helmet>
      </HelmetProvider>

      {isLoading ? (
        <Loading />
      ) : errorMessage.message ? (
        <ErrorMessages
          errorMessage={errorMessage}
          onRetry={() => getTutorDetails()}
        />
      ) : (
        <div className="py-16 md:py-20">
          <TutorDetailsSection tutorDetails={tutorDetails} />
        </div>
      )}
    </div>
  );
};

export default TutorDetails;
