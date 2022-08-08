import Dashboard from "./pages/User/dashboard";
import {Landing} from "./pages/landing";
import Account from "./pages/User/account";
import Settings from "./pages/User/settings";
import { Routes, Route } from "react-router-dom";
import ShoutOut from "./pages/User/shoutout";
import CustomCommands from "./pages/User/customcommands";

const routes = [
    {
      path: "/dashboard",
      component: <Dashboard/>,
      routes:[
        {
          path: "/dashboard/account",
          component: <Account />
        },
        {
          path: "/dashboard/settings",
          component: <Settings />
        },
        {
          path: "/dashboard/shoutout",
          component: <ShoutOut />
        }
      ]
    },
    {
        path: "/account",
        component: <Account/>
      },
    {
      path: "/*",
      component: <Landing/>,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    
    }

  ];

const allRoutes = () => {
return (<Routes>
  <Route path="/" >
    <Route index element={<Landing />} />
    <Route path="dashboard" element={<Dashboard />}>
      <Route path="account" element={<Account />} />
      <Route path="redirect" element={<Account />} />
      <Route path="settings" element={<Settings />} />
      <Route path="shoutout" element={<ShoutOut />} />
      <Route path="customcmds" element={<CustomCommands />} />
    </Route>
  </Route>
</Routes>);
}

export {routes, allRoutes}