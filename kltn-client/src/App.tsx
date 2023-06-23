import { ToastContainer } from "react-toastify";
import useRouteElements from "./hook/useRouteElements";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Suspense } from "react";
import LoadingPage from "./features/LoadingPage";
import { QueryClient, QueryClientProvider } from "react-query";
import UserModal from "./components/UserModal";
import { UserModalProvider } from "./contexts/UserModalContext";

function App() {
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
