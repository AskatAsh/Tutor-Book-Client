import { Helmet, HelmetProvider } from "react-helmet-async";
import MyTutorialTable from "../components/MyTutorialTable";
import useAuthContext from "../hooks/useAuthContext";
import useGetMyTutorials from "./../hooks/useGetMyTutorials";
import Loading from "./../components/Loading";
import ErrorMessages from "./../components/ErrorMessages";

const MyTutorials = () => {
  const { user } = useAuthContext();
  const [myTutorialsData, isLoading, errorMessage, getMyTutorialsData] =
    useGetMyTutorials(user?.email);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>My Tutorials</title>
        </Helmet>
      </HelmetProvider>

      <section className="py-16 md:pt-20">
      <h1 className="text-4xl font-bold text-center mt-10">
          My Tutorials
        </h1>
        {isLoading ? (
          <Loading />
        ) : errorMessage.message ? (
          <ErrorMessages
            errorMessage={errorMessage}
            onRetry={() => getMyTutorialsData()}
          />
        ) : (
          <div className="">
            <MyTutorialTable myTutorialsData={myTutorialsData} />
          </div>
        )}
      </section>
    </div>
  );
};

export default MyTutorials;
