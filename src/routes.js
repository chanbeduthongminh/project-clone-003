// import
import Dashboard from "./views/Dashboard/Dashboard";
import Tables from "./views/Dashboard/Tables";
import Billing from "./views/Dashboard/Billing";
import RTLPage from "./views/Dashboard/RTL";
import Profile from "./views/Dashboard/Profile";
import SignIn from "./views/Auth/SignIn.js";
import SignUp from "./views/Auth/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "./components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "THÔNG TIN TÀI KHOẢN",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Hồ sơ",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Đăng nhập-k",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
      {
        path: "/logout",
        name: "Đăng xuất",
        icon: <SupportIcon color="inherit" />,
        secondaryNavbar: true,
        // component: SignIn,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
