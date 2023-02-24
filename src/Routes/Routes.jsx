// import Layout from "../Views/Layout/Layout";
// import { Outlet } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../Views/Layout/Layout";
import { Home } from "../Views/Pages";

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/attendance",
        //   element: <Dashboard />,
        // },
        // {
        //   path: "/admin/",
        //   element: <Adminpage />
        // },
        // {
        //   path: "/admin/employee",
        //   element: <AdminEmployeeDirectory />
        // },
        // {
        //   path: "/admin/leave-request",
        //   element: <LeaveRequest />
        // },
        // {
        //   path: "/admin/leave-balance",
        //   element: <LeaveBalance />
        // },
        // {
        //   path: "/admin/holiday",
        //   element: <Holiday />
        // },
        // {
        //   path: "/admin/attendance",
        //   element: <Attendance />
        // },
        // {
        //   path: 'ApplyLeave/:id',
        //   element: <ApplyLeaveForm />
        // }
      ],
    },

    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return element;
};

export default Routes;