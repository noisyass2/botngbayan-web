import Account from "./account";
import Settings from "./settings";

const routes = [
  {
    path: "/dashboard/account",
    component: <Account />,
  },
  {
    path: "/dashboard/settings",
    component: <Settings />,
  },
];

export { routes };
