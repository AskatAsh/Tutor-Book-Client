import { Helmet, HelmetProvider } from "react-helmet-async";
import useGetBookedTutors from './../hooks/useGetBookedTutors';
import useAuthContext from './../hooks/useAuthContext';
import Loading from "../components/Loading";
import ErrorMessages from './../components/ErrorMessages';
import BookedTutorsTable from './../components/BookedTutorsTable';

const MyBookedTutors = () => {
  const {user} = useAuthContext();
  const [myBookedTutors, isLoading, errorMessage, getMyBookedTutors] = useGetBookedTutors(user?.email);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>My Booked Tutors</title>
        </Helmet>
      </HelmetProvider>
      
      {/* My Booked Tutors */}
      <section className="py-16 md:pt-20">
        <h1 className="text-4xl font-bold text-center mt-10">My Booked Tutors</h1>
        {isLoading ? (
          <Loading />
        ) : errorMessage.message ? (
          <ErrorMessages
            errorMessage={errorMessage}
            onRetry={() => getMyBookedTutors()}
          />
        ) : (
          <div>
            <BookedTutorsTable myBookedTutors={myBookedTutors} />
          </div>
        )}
      </section>
    </div>
  );
};

export default MyBookedTutors;
