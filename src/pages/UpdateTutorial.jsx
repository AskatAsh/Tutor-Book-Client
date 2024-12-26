import { Helmet, HelmetProvider } from "react-helmet-async";
import UpdateTutorialForm from "../components/UpdateTutorialForm";

const UpdateTutorial = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Update Tutorial</title>
        </Helmet>
      </HelmetProvider>
      
      {/* update tutorial form */}
      <UpdateTutorialForm />
    </div>
  );
};

export default UpdateTutorial;
