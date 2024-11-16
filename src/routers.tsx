import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Signin from "./pages/SignInPage/Signin";
import PrintingPage from "./pages/PrintingPage/PrintingPage";
import Printers from "./pages/PrintersPage/Printers";
import Orders from "./pages/OrdersPage/Orders";
import HomePagePrinting from "./HomePagePrinting";
import Users from "./pages/UsersPage/Users";
// import PrivateRoute from "./PrivateRoute";

//có link to, redirect,

const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />, // thk nay la chính children hiện bên dưới
  //     errorElement: <ErrorPage />,
  //     children: [
  //       { index: true, element: <HomePage></HomePage> }, // mặc định con hiện cái này
  //       // { path: "user", element: <UserListPage></UserListPage> },
  //       // { path: "contact", element: <ContactPage /> },
  //       { path: "/login", element: <LoginPage /> },
  //       // { path: "user/:id", element: <UserDetailPage /> }, // hien id tren link]
  //     ],
  //   },

//   {
//     element: <PrivateRoute />,
//     children: [
//       { path: "/homepage", element: <HomePage /> },

//       { path: "/printing", element: <PrintingPage /> },
//       { path: "/printers", element: <Printers /> },
//       { path: "/orders", element: <Orders /> },
//     ],
//   },

  { path: "/", element: <HomePagePrinting /> },
  { path: "/homepage", element: <HomePage /> },
  { path: "/login", element: <Signin /> },
  { path: "/printing", element: <PrintingPage /> },
  { path: "/printers", element: <Printers /> },
  { path: "/orders", element: <Orders /> },
  { path: "/users", element: <Users /> },

]);

export default router;
