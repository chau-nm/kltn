import { ToastContainer } from "react-toastify";
import useRouteElements from "./hook/useRouteElements";
import { AuthContextProvider } from "./contexts/auth.context";

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
