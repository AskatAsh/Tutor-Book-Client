import { Helmet, HelmetProvider } from "react-helmet-async";
import TutorCard from "../components/TutorCard";

const FindTutors = () => {
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
        <div className="grid grid-cols-12 gap-5">
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
          <TutorCard />
        </div>
      </section>
    </div>
  );
};

export default FindTutors;
