import { ROUTES } from 'constants/route-constants';

import HomePage from "containers/HomeLayout/Home";

const routes = [
    { path: ROUTES.HOME, component: HomePage, exact: true },
    { path: ROUTES.LOGIN, component: HomePage, exact: true },
];


export default routes;