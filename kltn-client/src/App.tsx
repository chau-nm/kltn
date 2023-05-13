import { ToastContainer } from "react-toastify";
import useRouteElements from "./hook/useRouteElements";
import { AuthContextProvider } from "./contexts/auth.context";
import { Suspense } from "react";
import LoadingPage from "./pages/loading-page";

function App() {
  const routeElements = useRouteElements();

  return (
    <AuthContextProvider>
      {routeElements}
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
