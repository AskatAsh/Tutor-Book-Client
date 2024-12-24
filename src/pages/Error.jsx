import { Helmet, HelmetProvider } from "react-helmet-async";

const Error = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>404 Error</title>
        </Helmet>
      </HelmetProvider>
      error page
    </div>
  );
};

export default Error;
