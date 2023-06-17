import { ToastContainer } from "react-toastify";
import useRouteElements from "./hook/useRouteElements";
import { AuthContextProvider } from "./contexts/auth.context";
import { Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const routeElements = useRouteElements();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        {routeElements}
        <ToastContainer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
