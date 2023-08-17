import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserModalProvider } from "./contexts/UserModalContext";
import useRouteElements from "./hook/useRouteElements";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {
  const routeElements = useRouteElements();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <UserModalProvider>
          {routeElements}
          <ToastContainer />
        </UserModalProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
