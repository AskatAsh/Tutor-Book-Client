import { Helmet, HelmetProvider } from "react-helmet-async";
import TutorCard from "../components/TutorCard";
import useGetTutorialsData from "../hooks/useGetTutorialsData";
import Loading from "./../components/Loading";
import ErrorMessages from "./../components/ErrorMessages";

const FindTutors = () => {
  const [tutorialsData, isLoading, errorMessage, getTutorialsData] =
    useGetTutorialsData();
  console.log(tutorialsData);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Find Tutors</title>
        </Helmet>
      </HelmetProvider>

      {/* Tutorials from database */}
      <section className="max-w-7xl w-11/12 mx-auto py-16 md:py-20">
        <h1 className="text-4xl font-bold text-center my-10">
          Explore and Find Tutorials
        </h1>
        {/* show tutorial data in grid */}
        {isLoading ? (
          <Loading />
        ) : errorMessage.message ? (
          <ErrorMessages
            errorMessage={errorMessage}
            onRetry={() => getTutorialsData()}
          />
        ) : (
          <div className="grid grid-cols-12 gap-5">
            
            {
              tutorialsData.map(tutorial => <TutorCard key={tutorial._id} tutorial={tutorial} />)
            }
          </div>
        )}
      </section>
    </div>
  );
};

export default FindTutors;
