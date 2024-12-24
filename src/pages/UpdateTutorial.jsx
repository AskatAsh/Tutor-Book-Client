import { Helmet, HelmetProvider } from "react-helmet-async";

const UpdateTutorial = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Update Tutorial</title>
        </Helmet>
      </HelmetProvider>
      Update Tutorial
    </div>
  );
};

export default UpdateTutorial;
