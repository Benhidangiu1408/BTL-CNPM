import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Signin from "./pages/SignInPage/Signin";
import PrintingPage from "./pages/PrintingPage/PrintingPage";
import Printers from "./pages/PrintersPage/Printers";
import Orders from "./pages/OrdersPage/Orders";
import HomePagePrinting from "./HomePagePrinting";
import Users from "./pages/UsersPage/Users";
import PrivateRoute from "./PrivateRoute";
import ContentAddFile from "./components/ui/ContentAddFile";

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

  // {
  //   element: <PrivateRoute />,
  //   children: [
  //     { path: "/homepage", element: <HomePage /> },

  //     { path: "/printing", element: <PrintingPage /> },
  //     { path: "/printers", element: <Printers /> },
  //     { path: "/orders", element: <Orders /> },
  //   ],
  // },

  // {
  //   element: <PrivateRoute />,
  //   children: [
  //     {
  //       path: "user", // muốn vô dc đây thì phải đi qa private route
  //       element: <UserPage />,
  //       children: [{ path: ":id", element: <UserDetailPage /> }],
  //     },
  //   ],
  // },

  // { path: "/", element: <HomePagePrinting /> },
  // { path: "/homepage", element: <HomePage /> },
  // { path: "/login", element: <Signin /> },
  // { path: "/printing", element: <PrintingPage /> },
  // // { path: "/configure", element: < },
  // { path: "/printers", element: <Printers /> },
  // { path: "/orders", element: <Orders /> },
  // { path: "/users", element: <Users /> },

  // { path: "/homepage", element: <HomePagePrinting /> },
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <Signin /> },
  {
    element: <PrivateRoute />,
    children: [
      // `/homepage` route and its children are now protected by PrivateRoute
      {
        path: "/homepage",
        element: <HomePagePrinting />,
        children: [
          { index: true, element: <ContentAddFile /> }, // Default child of /homepage
          { path: "printing", element: <PrintingPage /> }, // Relative path; becomes /homepage/printing
          { path: "printers", element: <Printers /> }, // Becomes /homepage/printers
          { path: "orders", element: <Orders /> }, // Becomes /homepage/orders
          { path: "users", element: <Users /> }, // Becomes /homepage/users
        ],
      },
        
    ],
  },
]);

export default router;
