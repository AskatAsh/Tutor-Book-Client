import { Helmet, HelmetProvider } from "react-helmet-async";

const AddTutorials = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Add Tutorials</title>
        </Helmet>
      </HelmetProvider>
      Add tutorials
    </div>
  );
};

export default AddTutorials;
