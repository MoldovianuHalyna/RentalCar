import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFoundPage/NotFound";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CatalogItemPage = lazy(() =>
  import("./pages/CatalogItemPage/CatalogItemPage")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CatalogItemPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
        <ToastContainer />
      </Suspense>
    </Layout>
  );
}

export default App;
