import { createBrowserRouter } from "react-router-dom";
// Components
import LoginModalMain from "../components/LoginModalMain";
import AuthLayout from "../layouts/Auth";
import MainLayout from "../layouts/MainLayout";
import ActorPage from "../pages/ActorPage";
import DetailPage from "../pages/DetailPage";
import FavouriteFilm from "../pages/FavouriteFilm";
import HomePage from "../pages/HomePage";
import KeywordResultPage from "../pages/KeywordResultPage";
import NotFoundPage from "../pages/NotFoundPage";
import SearchPage from "../pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "movie/:id",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <DetailPage />,
          },
        ],
      },
      {
        path: "movie",
        element: <HomePage />,
      },
      {
        path: "favouritefilm",
        element: <FavouriteFilm />,
      },
      {
        path: "keyword/:id",
        element: <KeywordResultPage />,
      },
      {
        path: "actor/:id",
        element: <ActorPage />,
      },
      {
        path: "search/:id",
        element: <SearchPage />,
      },
      {
        path: "login",
        element: <LoginModalMain />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
