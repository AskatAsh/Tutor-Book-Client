import { Helmet, HelmetProvider } from "react-helmet-async";

const MyBookedTutor = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>My Booked Tutor</title>
        </Helmet>
      </HelmetProvider>
      My booked tutor
    </div>
  );
};

export default MyBookedTutor;
