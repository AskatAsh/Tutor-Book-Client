import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
